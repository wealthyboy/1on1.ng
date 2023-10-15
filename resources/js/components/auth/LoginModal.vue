<template>
  <div class="modal-body px-4">
    <form @submit.prevent="login">
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Email address</label>
        <input type="email" v-model="form.email" class="form-control " :class="{ 'border-danger': null !== v$.email }"
          id="exampleInputEmail1" aria-describedby="emailHelp">
        <div id="emailHelp" class="form-text"></div>
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Password</label>
        <input type="password" v-model="form.password" class="form-control" id="exampleInputPassword1">
      </div>
      <div class="d-flex justify-content-between align-items-center ">
        <div class="mb-3 form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1">
          <label class="form-check-label" for="exampleCheck1">Remember me</label>
        </div>
        <div class="text-right "><a @click.prevent="change('forgetPassword')" href="#" class="color--primary bold">Forget
            your password?</a></div>
      </div>
      <button type="submit" class="btn  w-100 text-center btn-primary">Submit</button>
    </form>
    <div class="text-center mt-3">
      <p class="form-group col-12">
        Dont have an account yet? <a @click.prevent="change('register')" href="#"
          class="color--primary bold text-black">Create One</a>
      </p>
    </div>
    <div class="text-center  border-top  py-3">
      <div class="text-sm ">
        By logging in, you agree to our
      </div>
      <div class="form-group col-12">
        Dont have an account yet? <a href="/terms" class="color--primary bold">Terms of Service</a>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from "vue"; // "from '@vue/composition-api'" if you are using Vue 2.x
import { useVuelidate } from "@vuelidate/core";
import { required, email } from "@vuelidate/validators";
import axios from "axios";

export default {
  emits: ["switched"],
  setup(p, { emit }) {
    const rules = {
      password: { required }, // Matches state.lastName
      email: { required, email }, // Matches state.contact.email
    };

    const form = reactive({
      email: "",
      password: "",
    });

    function change(page) {
      emit("switched", page);
    }

    function login() {
      // this.v$.$validate()
      axios
        .post("/login", form)
        .then((res) => {
          location.reload();
        })
        .catch((err) => {
          console.log(err);
        });
      // console.log(this.v$)
    }

    const v$ = useVuelidate(rules, form);

    return { form, v$, change, login };
  },
};
</script>