@extends('layouts.app')

@section('content')

@include('_partials.slider')

<section class="py-5">
   <div class="container">
      <div class="row justify-content-center align-items-center no-gutters">
         <div class="col-12 col-lg-6">
            <div class="mc-mb-6 mc-mb-md-9 mc-mb-lg-0">
               <div class="fresnel-container fresnel-lessThan-lg "></div>
               <div class="fresnel-container fresnel-greaterThanOrEqual-lg ">
                  <h1 class="mc-text--brand mc-text--uppercase mc-text-d1 mc-mb-8">Gain New Skills, Meet Your Favorite Celeb</h1>
                  <p class="mc-text-large">Unlimited access to all. </p>
               </div>
            </div>
         </div>
         <div class="col-12 col-lg-5 offset-lg-1">
            <div class="fresnel-container fresnel-lessThan-md "></div>
            <div class="fresnel-container fresnel-greaterThanOrEqual-md ">
               <div>
                  <div class="row justify-content-center">
                     <div class="col-10 col-md-8 col-lg-12">
                        <form class="row justify-content-center justify-content-lg-start no-gutters">

                           <div class="row g-0">
                              <div class="col-md-9 col-9"><input type="text" placeholder="Email" class="form-control rounded-0"></div>
                              <div class="col-md-3 col-3"><button data-bs-toggle="modal" data-bs-target="#main-modal" class="btn btn-outline-secondary w-100 rounded-0" type="button" id="button-addon2">Place Bid</button></div>
                           </div>
                           <p class="mc-text-x-small mc-opacity--muted">By sharing your email, you agree to our <a class="mc-text--link" href="/terms">Terms of Service</a> and <a class="mc-text--link" href="https://privacy.masterclass.com">Privacy Policy.</a></p>
                        </form>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>

      @if(null !== $categories)
      @foreach( $categories as $category)
      <div class="row">
         <div class="col-lg-6">
            <h2 class="mc-text-h2 mc-my-2 d-inline-block">Trending {{ $category->name }}</h2>
            <span></span>
         </div>
      </div>
      <div class="row mt-4">
         <div class="owl-carousel owl-theme">
            @foreach( $category->auctions as $auction)
            <div class="">
               <a href="{{ $auction->url }}">
                  <div class="card card-background">
                     <img src="{{ optional($auction->celebrity)->image }}" alt="" srcset="">
                     <div class="card-body pt-12">
                        <h4 class="tex">{{ $auction->name }}</h4>
                        <p class="text"></p>
                     </div>
                  </div>
               </a>
            </div>
            @endforeach
         </div>

         <div class="  {{ $category->services->count() > 4 ? 'owl-carousel owl-theme' : 'col-md-4 col-6'}}">
            @foreach( $category->services as $service)
            <div class="{{ $category->services->count() > 4 ? '' : ''}}">
               <a href="{{ $service->url }}">
                  <div class="card card-background">
                     <img src="{{ optional($service->celebrity)->image }}" alt="" srcset="">
                     <div class="card-body pt-12">
                        <h4 class="tex">{{ $service->name }}</h4>
                        <p class="text"></p>
                     </div>
                  </div>
               </a>
            </div>
            @endforeach
         </div>

      </div>


      <div class="row">
         <div class="col-lg-12  mx-auto  text-center">
            <button type="button" class="btn bg-gradient-primary mt-3">Read more</button>
         </div>
      </div>
      @endforeach

      @endif


   </div>
</section>
@include('_partials.faqs')
@stop
@section('inline-scripts')

jQuery(function() {
$('.owl-carousel').owlCarousel({
loop: true,
margin: 10,
nav: true,
dots: true,
center: true,
navText: [
'<i class="bi bi-arrow-left-circle-fill"></i>',
'<i class="bi bi-arrow-right-circle-fill"></i>',
],
responsive: { 576: { items: 3 }, 992: { items: 4 } }
});


$('.service-carousel').owlCarousel({
loop: true,
margin: 10,
nav: true,
dots: true,
center: false,
navText: [
'<i class="bi bi-arrow-left-circle-fill"></i>',
'<i class="bi bi-arrow-right-circle-fill"></i>',
],
responsive: { 576: { items: 3 }, 992: { items: 4 } }
});


})
@stop