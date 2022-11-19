<template>
  <div>
    <h2 class="product-title">{{ service.name }}</h2>
    <div class="price">Price: {{ $filters.formatNumber(service.price) }}</div>

  </div>

  <div class="mt-3 p-0">

    <form @submit.prevent="register">
      <div class="row g-2">

        <div class="form-group   col-6">
          <general-input
            id="first_name"
            :error="v$.first_name"
            v-model="form.first_name"
            name="First name"
            type="text"
          />

        </div>

        <div class="form-group   col-6">
          <general-input
            id="last_name"
            :error="v$.last_name"
            v-model="form.last_name"
            name="Last name"
            type="text"
          />

        </div>

        <div class="form-group   col-6">
          <general-input
            id="email"
            :error="v$.email"
            v-model="form.email"
            name="Email"
            type="email"
          />

        </div>

        <div class="form-group   col-6">
          <general-input
            id="phone"
            :error="v$.phone_number"
            v-model="form.phone_number"
            name="Phone"
            type="text"
          />

        </div>
      </div>

      <general-button
        type="submit"
        :text="text"
        class="btn btn-dark w-100 mt-2"
        :loading="loading"
      />
    </form>
  </div>
</template>
 
<script>
import { useVuelidate } from "@vuelidate/core";
import { useActions } from "vuex-composition-helpers";

import { onMounted, reactive, ref } from "vue";
import SimpleMessage from "../../message/SimpleMessage";
import GeneralButton from "../../general/Button";
import GeneralInput from "../../Forms/Input";
import Message from "../../message/Message";

import { masterClassOutRules } from "../../../utils/ValidationRules";
import { masterClassData } from "../../../utils/FormData";
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
    GeneralSelect,
  },
  setup(props, { emit }) {
    const loading = ref(false);
    const price = ref("Select shout out  type to  get price");

    const text = ref("Register");
    const message = ref(null);
    const data = masterClassData(props.service, props.user);
    const server_errors = ref(data);
    const post_server_error = ref(null);
    const form = reactive(data);
    const rules = masterClassOutRules(form);
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

    function register() {
      this.v$.$touch();

      if (this.v$.$error) {
        return;
      }
      var handler = PaystackPop.setup({
        key: "pk_test_abcbb577deb8d821bc57ff8a99c59942d5d4162f", //'pk_live_c4f922bc8d4448065ad7bd3b0a545627fb2a084f',//'pk_test_844112398c9a22ef5ca147e85860de0b55a14e7c',
        email: props.user.email,
        amount: props.service.price * 100,
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
      register,
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