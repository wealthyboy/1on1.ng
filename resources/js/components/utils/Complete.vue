<template>
  <section
    id="order-complete"
    class="d-none"
  >
    <div class="container-fluid mt-5">
      <div class="row justify-content-center align-items-center">
        <div class="col-lg-8">
          <div class="card border-width-3 border-radius-0 border-color-success">
            <div class="card-body text-center">
              <p class="text-color-dark font-weight-bold text-4-5 mb-0"><i class="fas fa-check text-color-success me-1"></i> {{ message }}</p>
            </div>
          </div>
          <div class="d-flex flex-column flex-md-row justify-content-between py-3 px-4 my-4">
            <div class="text-center">
              <span>
                Order Number <br>
                <strong class="text-color-dark">31891</strong>
              </span>
            </div>
            <div class="text-center mt-4 mt-md-0">
              <span>
                Date <br>
                <strong class="text-color-dark">June 17, 2020</strong>
              </span>
            </div>
            <div class="text-center mt-4 mt-md-0">
              <span>
                Email <br>
                <strong class="text-color-dark">abc@abc.com</strong>
              </span>
            </div>
            <div class="text-center mt-4 mt-md-0">
              <span>
                Total <br>
                <strong class="text-color-dark">$30</strong>
              </span>
            </div>
            <div class="text-center mt-4 mt-md-0">
              <span>
                Payment Method <br>
                <strong class="text-color-dark">Cash on Delivery</strong>
              </span>
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