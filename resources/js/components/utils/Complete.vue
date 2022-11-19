<template>
  <section
    id="order-complete"
    class=""
  >
    <div class="container-fluid mt-5">
      <div class="row justify-content-center align-items-center">
        <div class="col-lg-8">
          <div class="card border-width-3 border-radius-0 border-color-success">
            <div class="card-body text-center">
              <p class="text-color-dark font-weight-bold text-4-5 mb-0"><i class="fas fa-check text-color-success me-1"></i> {{ message }}</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  props: ["message"],
  setup() {},
};
</script>