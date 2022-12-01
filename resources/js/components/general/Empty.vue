<template>

  <div class="d-flex justify-content-center align-content-center  page-loading w-100 h-100">
    <div class="align-self-center">
      {{ message || 'Nothing Found' }}
    </div>
  </div>
</template>
<script>
export default {
  props: ["message"],
  setup() {},
};
</script>
