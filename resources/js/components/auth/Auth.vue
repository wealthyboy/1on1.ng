<template>
  <!-- Modal -->

  <template v-if="page.login">
    <div class="col-md-4 mt-5 ">
      <div class="content-header text-center">
        <h1>Welcome</h1>
        <p>Sign in to enjoy our service</p>
      </div>
      <login @switched="changeUi" />
    </div>

  </template>

  <template v-if="page.forgetPassword">
    <div class="col-md-4 mt-5 ">
      <div class="content-header text-center">
        <h1>F</h1>
        <p></p>
      </div>
      <forget-password @switched="changeUi" />
    </div>

  </template>

  <template v-if="page.register">
    <div class="col-md-5 mt-5 ">
      <div class="content-header text-center">
        <h1>Welcome</h1>
        <p>Sign up to keep track </p>
      </div>
      <register @switched="changeUi" />
    </div>
  </template>

</template>

<script>
import Register from "./Register";
import ForgetPassword from "./ForgetPassword";
import Login from "./Login";
import { onMounted, ref } from "vue";
export default {
  components: {
    Register,
    ForgetPassword,
    Login,
  },
  setup() {
    const page = ref({
      login: true,
      register: false,
      forgetPassword: false,
    });

    function changeUi(p) {
      page.value["login"] = false;
      page.value["register"] = false;
      page.value["forgetPassword"] = false;
      page.value[p] = true;
    }

    return {
      page,
      changeUi,
    };
  },
};
</script>