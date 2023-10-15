<template>
  <button data-bs-toggle="modal" data-bs-target="#main-modal" class="btn btn-outline-secondary w-100 rounded-0 text-black"
    type="button" id="button-addon2">Fund your wallet</button>

  <modal>
    <template v-slot:header>
      1on1
    </template>

    <template v-slot:title>
      <h2 class="text-black">Fund your wallet</h2>
    </template>

    <div class="row h-100  d-flex align-items-center justify-content-center   mx-2 mt-2">
      <div style="height: 200px;" class="form-floating mx-2 mt-2">
        <wallet @wallet:funded="refresh" :user="user" />
      </div>
    </div>

  </modal>
</template>
<script>
import Modal from "../Modal/Index";
import GeneralInput from "../Forms/Input";
import Wallet from "../auth/Wallet";
import { useActions } from "vuex-composition-helpers";

export default {
  components: { Modal, GeneralInput, Wallet },
  props: ["user"],
  setup() {
    const { getTableData } = useActions(["getTableData"]);

    function refresh(m) {
      console.log(m);
      setTimeout(() => {
        getTableData(location.href);
      }, 3000);
    }

    return {
      refresh,
    };
  },
};
</script>