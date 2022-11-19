@extends('layouts.app')

@section('content')

<nav class="mt-5" style="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb">
  <ol class="breadcrumb border px-5 py-3">
    <li class="breadcrumb-item"><a href="#">Home</a></li>
    <li class="breadcrumb-item active" aria-current="page">Library</li>
  </ol>
</nav>

<section id="main-content" class="py-5 ">
  <div class="container">
    <div class="row">
      <div class="col-lg-7">
        <div class="image">
          <img src="{{ $service->image_to_show  ??  $service->image }}" class="img-fluid" alt="" srcset="">
        </div>
      </div>
      <div class="col-lg-5">
        <show-products :user="{{ $user }}" :service="{{ $service }}" />
      </div>
    </div>

    <div class="row my-5">
      <div class="col-12">
        <nav>
          <div class="nav nav-tabs" id="nav-tab" role="tablist">
            <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Description</button>
          </div>
        </nav>
        <div class="tab-content" id="nav-tabContent">
          <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
            <div class="row">
              <div class="col-md-6">

                <p><?php echo  html_entity_decode($service->description);  ?></p>
              </div>

              <div class="col-md-6">
                <h1>Schedule</h1>


              </div>

            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</section>


<section id="order-complete" class="d-none">
  <div class="container-fluid mt-5">
    <div class="row justify-content-center align-items-center">
      <div class="col-lg-8">
        <div class="card border-width-3 border-radius-0 border-color-success">
          <div class="card-body text-center">
            <p class="text-color-dark font-weight-bold text-4-5 mb-0"><i class="fas fa-check text-color-success me-1"></i> Thank You. Your Order has been received.</p>
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


@stop