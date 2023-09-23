<template>
  <div v-if="message" class="modal-body">

    <div :class="[error === true ? 'alert-danger' : 'alert-success']" class="alert alert-rounded text-sm">
      <span class="fs-6">{{ message }}</span>
    </div>
  </div>
</template>
    
<script>
import { onMounted, ref } from "vue-demi";
export default {
  props: {
    message: String,
    error: {
      type: Boolean,
      default: false
    },
  },
};
</script>