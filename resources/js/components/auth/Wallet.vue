<template>
  <message :message="message" :error="error" />

  <form action="" class="mb-0" method="post" @submit.prevent="fund">

    <div class="form-floating mb-3">
      <general-input :error="v$.amount" v-model="form.amount" id="wallet" name="Wallet" type="wallet" />
    </div>

    <general-button type="submit" :text="text" class="btn btn-dark w-100 mb-3" :loading="loading" />

  </form>
</template>
  
<script>
import { useVuelidate } from "@vuelidate/core";
import axios from "axios";
import { onMounted, reactive, ref } from "vue";
import SimpleMessage from "../message/SimpleMessage";
import GeneralButton from "../general/Button.vue";
import GeneralInput from "../Forms/Input";
import Message from "../message/Message";
import { walletRules } from "../../utils/ValidationRules";
import { useActions, useGetters } from "vuex-composition-helpers";
import { loadScript } from "../../utils/Payment";
import { useStore } from "vuex";

export default {
  props: ["user"],
  emits: ["wallet:funded"],
  components: {
    SimpleMessage,
    GeneralButton,
    GeneralInput,
    Message,
  },
  setup(props, { emit }) {
    const loading = ref(false);
    const post_server_error = ref(false);
    const scriptLoaded = ref(null);
    const store = useStore();
    const error = ref(false);

    const text = ref("Submit");
    const message = ref(null);
    const form = reactive({
      amount: "",
      type: "Wallet",
      customer_id: props.user.id,
    });

    onMounted(() => {
      scriptLoaded.value = new Promise((resolve) => {
        loadScript(() => {
          resolve();
        });
      });
    });

    const { wallet, walletBalance } = useGetters(["wallet", "walletBalance"]);
    const rules = walletRules(form);
    const v$ = useVuelidate(rules, form);
    const { clearErr, makePost, getWalletBalance, getTableData } = useActions([
      "makePost",
      "clearErr",
      "getWalletBalance",
      "getTableData",
    ]);

    function fund() {
      this.v$.$touch();
      if (this.v$.$error) {
        return;
      }

      var handler = PaystackPop.setup({
        key: "pk_test_abcbb577deb8d821bc57ff8a99c59942d5d4162f", //'pk_live_c4f922bc8d4448065ad7bd3b0a545627fb2a084f',//'pk_test_844112398c9a22ef5ca147e85860de0b55a14e7c',
        email: props.user.email,
        amount: form.amount * 100,
        currency: "NGN",
        first_name: props.user.name,
        metadata: {
          custom_fields: [
            {
              form,
            },
          ],
        },
        callback: function (response) {
          let new_balnce = parseInt(walletBalance.value) + parseInt(form.amount);
          store.commit("setWalletBalance", new_balnce);

          error.value = false;
          message.value = "Your money has been addedd";
          const postData = {
            url: "/wallets",
            data: form,
            loading,
            needsValidation: false,
            error: null,
            post_server_error: post_server_error,
            method: "post",
          };

          makePost(postData)
            .then((res) => { loading.value = falses })
            .catch((error) => {
              message.value = "Your money has been addedd";
              setTimeout(() => {
                message.value = null;
              }, 3000);
            });
          emit("wallet:funded", new_balnce);
        },
        onClose: function () { },
      });
      handler.openIframe();
    }
    return {
      form,
      v$,
      fund,
      text,
      loading,
      message,
      getTableData,
      getWalletBalance,
      error,
    };
  },
};
</script>