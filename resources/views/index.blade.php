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
            <span>sll</span>
         </div>
      </div>
      <div class="row mt-4">
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
<section class="py-5">
   <div class="container">
      <div class="row">
         <div class="col-md-10   mx-auto  text-center">
            <div class="content-header">
               <h3 class="mt-4">Frequently asked questions</h3>
            </div>
            <div class="accordion accordion-flush" id="accordionFlushExample">
               <div class="accordion-item">
                  <h2 class="accordion-header" id="flush-headingOne">
                     <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                        Accordion Item #1
                     </button>
                  </h2>
                  <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                     <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
                  </div>
               </div>
               <div class="accordion-item">
                  <h2 class="accordion-header" id="flush-headingTwo">
                     <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                        Accordion Item #2
                     </button>
                  </h2>
                  <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                     <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
                  </div>
               </div>
               <div class="accordion-item">
                  <h2 class="accordion-header" id="flush-headingThree">
                     <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                        Accordion Item #3
                     </button>
                  </h2>
                  <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                     <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</section>
@stop