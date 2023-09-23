<template>
  <transition name="alert">
    <div class="minipopup-area">
      <div :class="{ 'active': data.active, 'bg-danger text-white': data.error }" class="minipopup-box "
        style="top: 0px;">
        <div class="product">

          <div class="product-detail">
            <div class="d-flex">
              <i class="fa fa-bell fs-4 align-self-center"></i>
              <div class="content ms-3">
                <div>{{ data.error ? "Error " : "Success" }}</div>
                <p>{{ data.message }}</p>
              </div>
            </div>
          </div>
        </div>

        <button @click="cancel" role="button" class="mfp-close mt-1 me-1 rounded-circle"><i
            class="bi bi-x-lg "></i></button>
      </div>
    </div>
  </transition>
</template>
<script>
import { ref, onMounted } from "vue";

export default {
  props: ["data"],
  setup(props) {
    const close = ref(false);
    const config = ref(props.data);

    function cancel() {
      props.data.active = false
    }

    onMounted(() => {
      setInterval(() => {
        props.data.active = false
      }, 4000)
    })

    return {
      cancel,
      close,
      config,
    };
  },
};
</script>