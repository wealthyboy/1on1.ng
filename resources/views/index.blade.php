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
                  <p class="mc-text-large">Unlimited access to all.</p>
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
                              <div class="col-md-9"><input type="text" placeholder="Email" class="form-control rounded-0"></div>
                              <div class="col-md-3"><button data-bs-toggle="modal" data-bs-target="#main-modal" class="btn btn-outline-secondary w-100 rounded-0" type="button" id="button-addon2">Place Bid</button></div>
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
         @foreach( $category->services as $service)
         <div class="col-lg-3 mb-lg-0 mb-4">
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
$('.owl-carousel').owlCarousel.owlCarousel({
loop: true,
margin: 10,
nav: true,
dots: true,
center: true,
navText: [
'<div class="nav-btn prev-slide"><svg width="31" height="50" viewBox="0 0 21 40" xmlns="http://www.w3.org/2000/svg">
      <path d="M19.9 40L1.3 20 19.9 0" stroke="#FFF" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path>
   </svg></div>',
'<div class="nav-btn next-slide"><svg width="19" height="40" viewBox="0 0 19 40" xmlns="http://www.w3.org/2000/svg">
      <path d="M.1 0l18.6 20L.1 40" stroke="#FFF" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path>
   </svg></div>',
],
responsive: {
0: {
items: 2,
},
600: {
items: 4,
},
1000: {
items: 4,
},
},
});
})
@stop