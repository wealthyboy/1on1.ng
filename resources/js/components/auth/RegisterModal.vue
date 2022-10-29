<template>
  <div class="modal-body px-4">
    <form @submit.prevent="register">
      <div class="row">
        <div class="mb-3 col-6">
          <label
            for="first_name"
            class="form-label"
          >First Name</label>
          <input
            type="text"
            v-model="form.first_name"
            class="form-control"
            id="first_name"
          >
        </div>
        <div class="mb-3 col-6">
          <label
            for="LastName"
            class="form-label"
          >Last Name</label>
          <input
            type="text"
            v-model="form.last_name"
            class="form-control"
            id="LastName"
          >
        </div>
      </div>
      <div class="mb-3">
        <label
          for="email_address"
          class="form-label"
        >Email address</label>
        <input
          type="email"
          v-model="form.email"
          class="form-control"
          id="email_address"
        >
      </div>
      <div class="mb-3">
        <label
          for="password"
          class="form-label"
        >Password</label>
        <input
          type="password"
          v-model="form.password"
          class="form-control"
          id="password"
        >
      </div>
      <div class="mb-3">
        <label
          for="Confirm_Password"
          class="form-label"
        >Confirm Password</label>
        <input
          type="password"
          v-model="form.password_confirmation"
          class="form-control"
          id="Confirm_Password"
        >
      </div>
      <general-button
        class="btn  w-100 text-center btn-primary"
        :type="submit"
        :loading="loading"
        :text="text"
      />

    </form>
    <div class="text-center mt-3">
      <p class="form-group col-12">
        Already have an account yet? <a
          @click.prevent="change('login')"
          href="#"
          class="color--primary bold"
        >Login</a>
      </p>
    </div>
    <div class="text-center  border-top  py-3">
      <div class="text-sm ">
        By Registering , you agree to our
      </div>
      <div class="form-group col-12">
        Dont have an account yet? <a
          href="/register"
          class="color--primary bold"
        >Terms of Service</a>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, ref } from "vue"; // "from '@vue/composition-api'" if you are using Vue 2.x
import { useVuelidate } from "@vuelidate/core";
import { required, email } from "@vuelidate/validators";
import axios from "axios";

import GeneralButton from "../general/Button";

export default {
  emits: ["switched"],
  components: {
    GeneralButton,
  },
  setup(props, { emit }) {
    const text = ref("Submit");
    const loading = ref(null);

    const form = reactive({
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      password_confirmation: "",
    });

    function change(page) {
      emit("switched", page);
    }

    function register() {
      // this.v$.$validate()
      loading.value = true;
      text.value = "Loading";
      axios
        .post("/register", form)
        .then((res) => {
          location.reload();
        })
        .catch((err) => {
          console.log(err);
          loading.value = false;
          text.value = "Submit";
        });
      // console.log(this.v$)
    }

    return {
      change,
      register,
      form,
      text,
      loading,
    };
  },
};
</script>