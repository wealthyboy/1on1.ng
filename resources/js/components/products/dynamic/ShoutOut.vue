<template>

  <div
    v-if="!reg_message"
    class="container"
  >
    <div class="row">
      <div class="col-lg-7 ">
        <div class="image">
          <img
            v-if="service.image"
            :src="service.image"
            class="img-fluid"
            alt=""
            srcset=""
          >

          <img
            v-else
            :src="service.image_to_show"
            class="img-fluid"
            alt=""
            srcset=""
          >
        </div>
      </div>
      <div class="col-lg-5">
        <div class="mb-3">
          <h2 class="product-title mt-xs-3">{{ service.name }}</h2>
          <div class="price">Price: <span v-if="!isNaN(price)">{{ service.currency }}</span>{{ price }}</div>

        </div>
        <div class=" p-0">

          <form @submit.prevent="sendShoutOut">

            <div class="row g-1">

              <div class="form-group   col-6">
                <general-input
                  id="recipient_first_name"
                  :error="v$.recipient_first_name"
                  v-model="form.recipient_first_name"
                  name="Recipient's first name"
                  type="text"
                />

              </div>

              <div class="form-group   col-6">
                <general-input
                  id="recipient_last_name"
                  :error="v$.recipient_last_name"
                  v-model="form.recipient_last_name"
                  name="Recipient's last name"
                  type="text"
                />
              </div>

              <div class="form-group   col-6">
                <general-input
                  id="recipient_email"
                  :error="v$.recipient_email"
                  v-model="form.recipient_email"
                  name="Rcipient's email"
                  type="text"
                />

              </div>

              <div class="form-group   col-6">
                <general-input
                  id="recipient_phone"
                  :error="v$.recipient_phone"
                  v-model="form.recipient_phone"
                  name="Recipient's phone"
                  type="text"
                />

              </div>

              <div class="form-floating mb-2 col-6">

                <flat-pickr
                  class="form-control"
                  v-model="form.date"
                  :error="v$.date"
                ></flat-pickr>
                <label for="floatingInput">Date of event</label>
              </div>
              <div class="form-floating mb-2 col-6">
                <general-select
                  id="type"
                  :error="v$.type"
                  v-model="form.type"
                  name="Choose type"
                  @change="doChange($event)"
                >
                  <option
                    :data-price="service.audio_shout_out_price"
                    value="video"
                  >Audio</option>

                  <option
                    :data-price="service.video_shout_out_price"
                    value="audio"
                  >Video</option>

                </general-select>
              </div>
              <div class="form-floating mb-2">
                <textarea
                  class="form-control"
                  placeholder="Leave a comment here"
                  id="floatingTextarea2"
                  style="height: 100px"
                  v-model="form.comment"
                ></textarea>
                <label for="floatingTextarea2">Comments</label>
              </div>

              <general-button
                type="submit"
                :text="text"
                class="btn btn-dark w-100"
                :loading="loading"
              />

            </div>

          </form>
        </div>
      </div>
    </div>

    <div class="row my-5">
      <div class="col-12">
        <nav>
          <div
            class="nav nav-tabs"
            id="nav-tab"
            role="tablist"
          >
            <button
              class="nav-link active"
              id="nav-home-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-home"
              type="button"
              role="tab"
              aria-controls="nav-home"
              aria-selected="true"
            ></button>
          </div>
        </nav>
        <div
          class="tab-content"
          id="nav-tabContent"
        >
          <div
            class="tab-pane fade show active"
            id="nav-home"
            role="tabpanel"
            aria-labelledby="nav-home-tab"
          >
            <div class="row">
              <div class="col-md-6">
                <div class="row my-5">
                  <div class="col-12">
                    <nav>
                      <div
                        class="nav nav-tabs"
                        id="nav-tab"
                        role="tablist"
                      >
                        <button
                          class="nav-link active"
                          id="nav-home-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#nav-home"
                          type="button"
                          role="tab"
                          aria-controls="nav-home"
                          aria-selected="true"
                        ></button>
                      </div>
                    </nav>
                    <div
                      class="tab-content"
                      id="nav-tabContent"
                    >
                      <div
                        class="tab-pane fade show active"
                        id="nav-home"
                        role="tabpanel"
                        aria-labelledby="nav-home-tab"
                      >
                        <div class="row">
                          <div class="col-md-6">
                            <h1 class="mt-3">Description</h1>

                            <p v-html="service.description"></p>
                          </div>

                        </div>

                      </div>
                    </div>
                  </div>
                </div>
                <p v-html="service.description"></p>
              </div>

            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
  <template v-if="reg_message">
    <complete :message="reg_message" />
  </template>
</template>

<script>
import flatPickr from "vue-flatpickr-component";
import "flatpickr/dist/flatpickr.css";
import { useVuelidate } from "@vuelidate/core";
import { useActions } from "vuex-composition-helpers";

import { onMounted, reactive, ref } from "vue";
import SimpleMessage from "../../message/SimpleMessage";
import GeneralButton from "../../general/Button";
import GeneralInput from "../../Forms/Input";
import Message from "../../message/Message";

import { shoutOutRules } from "../../../utils/ValidationRules";
import { shoutOutData } from "../../../utils/FormData";
import { loadScript } from "../../../utils/Payment";

import GeneralSelect from "../../Forms/Select";
import Complete from "../../utils/Complete";

export default {
  props: ["user", "service"],
  emits: ["switched"],
  components: {
    SimpleMessage,
    GeneralButton,
    GeneralInput,
    Message,
    flatPickr,
    GeneralSelect,
    Complete,
  },
  setup(props, { emit }) {
    const loading = ref(false);
    const price = ref("Select shout out type to get price");
    const text = ref("Submit");
    const message = ref(null);
    const reg_message = ref(null);

    const data = shoutOutData(props.service, props.user, price);
    const server_errors = ref(data);
    const post_server_error = ref(null);
    const form = reactive(data);
    const rules = shoutOutRules(form);
    const v$ = useVuelidate(rules, form);
    const { clearErr, makePost } = useActions(["makePost", "clearErr"]);
    const scriptLoaded = ref(null);

    function change(page) {
      emit("switched", page);
    }

    function doChange(e) {
      price.value = e.target.selectedOptions[0].dataset.price;
    }

    onMounted(() => {
      scriptLoaded.value = new Promise((resolve) => {
        loadScript(() => {
          resolve();
        });
      });
    });

    function sendShoutOut() {
      this.v$.$touch();

      if (this.v$.$error) {
        return;
      }
      var handler = PaystackPop.setup({
        key: "pk_test_abcbb577deb8d821bc57ff8a99c59942d5d4162f", //'pk_live_c4f922bc8d4448065ad7bd3b0a545627fb2a084f',//'pk_test_844112398c9a22ef5ca147e85860de0b55a14e7c',
        email: props.user.email,
        amount: price.value * 100,
        currency: "NGN",
        first_name: props.user.name,
        metadata: {
          custom_fields: { form },
        },
        callback: function (response) {
          console.log(response);
          reg_message.value =
            "Thank You. Your event  has been placed. Please  check your email for more details.";
        },
        onClose: function () {},
      });
      handler.openIframe();
    }

    return {
      form,
      loading,
      v$,
      sendShoutOut,
      text,
      message,
      server_errors,
      post_server_error,
      change,
      doChange,
      price,
      reg_message,
    };
  },
};
</script>