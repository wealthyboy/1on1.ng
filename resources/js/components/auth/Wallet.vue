<template>

  <message :message="message" />
  <form
    action=""
    class="mb-0"
    method="post"
    @submit.prevent="login"
  >

    <div class="form-floating mb-3">
      <general-input
        :error="v$.amount"
        v-model="form.amount"
        id="wallet"
        name="Wallet"
        type="wallet"
      />
    </div>

    <general-button
      type="submit"
      :text="text"
      class="btn btn-dark w-100 mb-3"
      :loading="loading"
    />

  </form>

</template>
  
  <script>
import { useVuelidate } from "@vuelidate/core";
import axios from "axios";
import { reactive, ref } from "vue";
import SimpleMessage from "../message/SimpleMessage";
import GeneralButton from "../general/Button.vue";
import GeneralInput from "../Forms/Input";
import Message from "../message/Message";
import { walletRules } from "../../utils/ValidationRules";
import { useActions, useGetters } from "vuex-composition-helpers";

export default {
  emits: ["switched"],
  components: {
    SimpleMessage,
    GeneralButton,
    GeneralInput,
    Message,
  },
  setup(p, { emit }) {
    const loading = ref(false);
    const post_server_error = ref(false);

    const text = ref("Submit");
    const message = ref(null);
    const form = reactive({
      amount: "",
    });

    const { wallet } = useGetters(["wallet"]);
    const rules = walletRules(form);
    const v$ = useVuelidate(rules, form);
    const { clearErr, makePost } = useActions(["makePost", "clearErr"]);

    function change(page) {
      emit("switched", page);
    }

    function login() {
      this.v$.$touch();

      const postData = {
        url: "/wallet",
        data: form,
        loading,
        needsValidation: true,
        error: this.v$.$error,
        post_server_error: post_server_error,
      };

      makePost(postData)
        .then((res) => {})
        .catch((error) => {
          message.value = "We could not find your data in our system";
          setTimeout(() => {
            message.value = null;
          }, 3000);
        });
    }
    return { form, v$, login, text, loading, message, change };
  },
};
</script>