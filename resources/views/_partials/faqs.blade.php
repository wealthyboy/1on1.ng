@if($faqs->count())


<!-- <faq-start> -->
<section class="faq">
    <div class="container">
        <div class="row">
            <div class="col-xl-8 mt-xl-0 mt-4 ps-xl-3 col-md-8 offset-md-2">
                @foreach($categories as $category)
                @if($category->faqs->count())
                <div class="pq-1 text-center">
                    <h6 class="pq-section-title">{{ $category->name }}</h6>
                </div>
                <div class="pq-accordion-block mt-4">
                    @foreach($category->faqs as $key => $faq)
                    <div class="pq-accordion-box {{$key}} {{$key === 0 ? 'pq-active' : ''}} ">
                        <div class="pq-ad-title">
                            <h4 class="ad-title-text">
                                {{ $faq->name }}
                                <i aria-hidden="true" class="ion ion-ios-arrow-down active"></i><i aria-hidden="true" class="ion ion-ios-arrow-up inactive"></i>
                            </h4>
                        </div>
                        <div class="pq-accordion-details">
                            <p class="pq-detail-text"> {{ $faq->description }} </p>
                        </div>
                    </div>
                    @endforeach
                </div>

                @endif


                @endforeach
            </div>
        </div>
    </div>
</section>
<!-- <faq-end> -->

@endif