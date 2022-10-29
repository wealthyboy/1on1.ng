<template>

  <div
    class="modal fade"
    id="mainweewewew-modal"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="main-modal"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5
            class="modal-title"
            id="staticBackdropLabel"
          >Fund </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          hjdhhjjhsjhsdhj
        </div>

      </div>
    </div>
  </div>

</template>
  
  <script>
import { useVuelidate } from "@vuelidate/core";
import axios from "axios";
import { reactive, ref } from "vue";
import SimpleMessage from "../message/SimpleMessage";
import GeneralButton from "../general/Button.vue";
import GeneralInput from "../Forms/Input";
import Message from "../message/Message";
import { loginRules } from "../../utils/ValidationRules";
import { useActions } from "vuex-composition-helpers";

export default {
  emits: ["switched"],
  components: {
    SimpleMessage,
    GeneralButton,
    GeneralInput,
    Message,
  },

  computed: {
    ...mapGetters({
      carts: "carts",
      meta: "meta",
      loading: "loading",
    }),
  },
  setup(p, { emit }) {
    const loading = ref(false);
    const post_server_error = ref(false);

    const text = ref("Submit");
    const message = ref(null);
    const form = reactive({
      email: "",
      password: "",
    });

    const rules = loginRules(form);
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
        .then((res) => {
          window.location.href = res.data.url;
        })
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