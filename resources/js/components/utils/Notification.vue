<template>
  <div
    v-if="data.active"
    class="minipopup-area"
  >
    <div
      :class="{'active': data.active}"
      class="minipopup-box "
      style="top: 0px;"
    >
      <div class="product">

        <div class="product-detail">
          <div class="d-flex">
            <i class="bi bi-check-circle"></i>
            <div class="content">
              <div>Success</div>
              <p>{{ data.message }}</p>
            </div>
          </div>
        </div>
      </div>

      <button class="mfp-close"><i class="bi bi-x-lg"></i></button>
    </div>
  </div>
</template>
<script>
export default {
  props: ["data"],
  setup() {},
};
</script>