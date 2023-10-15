<template>
  <!-- Modal -->
  <div class="modal fade" id="auth-modal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
    aria-labelledby="auth-modal" aria-hidden="true">
    <div class="modal-dialog  modal-dialog-centered modal-dialog-scrollable">
      <div class="modal-content px-4">
        <div class="modal-header">
          <img src="https://1on1.ng/images/logo/one.ng.PNG" alt="" srcset="" width="80" height="50">
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <template v-if="page.login">
          <div class="text-center text-black my-2">
            <h2 class="text-black">Welcome</h2>
            <div>Sign in to enjoy our service</div>
          </div>

          <login @switched="changeUi" />
        </template>

        <template v-if="page.forgetPassword">
          <forget-password @switched="changeUi" />
        </template>

        <template v-if="page.register">
          <div class="text-center text-black my-2">
            <h2 class="text-black">Welcome</h2>
            <div>Sign up to enjoy our services in full</div>
          </div>
          <register @switched="changeUi" />
        </template>

      </div>
    </div>
  </div>
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