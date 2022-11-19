@extends('layouts.app')

@section('content')

<nav style="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="#">Home</a></li>
    <li class="breadcrumb-item active" aria-current="page">Library</li>
  </ol>
</nav>


<section class="py-5">
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

@stop