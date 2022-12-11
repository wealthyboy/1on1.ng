<template>
  <div class="">
    <template v-if="message">
      <p>
      <div class="text-center color--light">
        <h3 class="text-center color--light">{{ message }} </h3>
      </div>
      </p>
    </template>

    <form
      v-if="!message"
      @submit.prevent="signUp"
      class="row justify-content-center justify-content-lg-start no-gutters"
    >

      <div class="row g-0">
        <div class="col-md-9 col-8"><input
            type="email"
            placeholder="Email"
            v-model="form.email"
            class="form-control rounded-0"
          ></div>
        <div class="col-md-3 col-4">
          <button
            class="btn btn-outline-secondary w-100 rounded-0"
            type="submit"
          >
            <span
              v-if="submitting"
              class="spinner-border spinner-border-sm"
              role="status"
              aria-hidden="true"
            ></span>

            Subscribe
          </button>
        </div>
      </div>
      <p class="mc-text-x-small text-white mt-2">By sharing your email, you agree to our <a
          class="mc-text--link"
          href="/terms"
        >Terms of Service</a> and <a
          class="mc-text--link"
          href="https://privacy.masterclass.com"
        >Privacy Policy.</a></p>
    </form>
    <notification :data="n" />

  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import ErrorMessage from "../messages/components/Error";
import Notification from "../utils/Notification";

export default {
  data() {
    return {
      form: {
        email: null,
      },
      submitting: false,
      message: null,
      error: null,
      errorsBag: [],
      n: {
        active: false,
      },
    };
  },
  computed: {
    ...mapGetters({
      errors: "errors",
    }),
  },
  components: {
    ErrorMessage,
    Notification,
  },
  methods: {
    signUp() {
      this.submitting = true;
      axios
        .post("/newsletter/signup", {
          email: this.form.email,
        })
        .then((response) => {
          this.submitting = false;
          this.message = response.data.message;
        })
        .catch((error) => {
          console.log(true);
          this.submitting = false;
          this.n = {
            active: true,
            message: "An error occured",
            error: true,
          };
        });
    },
  },
};
</script>