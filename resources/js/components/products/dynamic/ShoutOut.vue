<template>

  <div class="mb-3">
    <h2 class="product-title">{{ service.name }}</h2>
    <div class="price">Price: <span v-if="!isNaN(price)"></span>{{ $filters.formatNumber(price) }}</div>
  </div>
  <div class=" p-0">

    <form @submit.prevent="sendShoutOut">

      <div class="row g-1">

        <div class="form-group col-6">
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
  },
  setup(props, { emit }) {
    const loading = ref(false);
    const price = ref("Select shout out type to get price");
    const text = ref("Submit");
    const message = ref(null);
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
    };
  },
};
</script>