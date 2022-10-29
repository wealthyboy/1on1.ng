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
        :error="v$.email"
        v-model="form.email"
        id="email"
        name="Email"
        type="email"
      />
    </div>

    <div class="form-floating">
      <general-input
        id="password"
        :error="v$.password"
        v-model="form.password"
        name="Password"
        type="password"
      />

    </div>

    <div class="d-flex justify-content-between align-items-center ">
      <div class="mb-3 form-check">
        <input
          type="checkbox"
          class="form-check-input"
          id="rememberme"
        >

        <label
          class="form-check-label mt-"
          role="button"
          for="rememberme"
        >Remember me</label>
      </div>
      <div class="text-right "><a
          href="#"
          @click.prevent="change('forgetPassword')"
          class="color--primary bold"
        >Forget your password?</a></div>
    </div>

    <general-button
      type="submit"
      :text="text"
      class="btn btn-dark w-100"
      :loading="loading"
    />

  </form>
  <div class="text-center mt-3">
    <p class="form-group col-12">
      Dont have an account yet? <a
        @click.prevent="change('register')"
        href="#"
        class="color--primary bold"
      >Create One</a>
    </p>
  </div>
  <div class="text-center  border-top  py-3">
    <div class="text-sm ">
      By logging in, you agree to our
    </div>
    <div class="form-group col-12">
      Dont have an account yet? <a
        href="/terms"
        class="color--primary bold"
      >Terms of Service</a>
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

      if (this.v$.$error) {
        return false;
      }

      const postData = {
        url: "/login",
        data: form,
        loading,
        needsValidation: true,
        post_server_error: post_server_error,
        method: "post",
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