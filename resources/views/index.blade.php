@extends('layouts.app')

@section('content')



<!-- Portfolio -->
<section class="portfolio py-1">
    <div class="container-fluid">
        <div class="row">
            <div class="col-lg-12">
                <div class="pq-section-title-style-1 text-left">
                    <h5 class="pq-section-title">Latest Bids</h5>
                </div>
            </div>
            <div class="col-lg-12 p-0">
                <div class="owl-carousel owl-loaded owl-drag" data-dots="false" data-nav="true" data-desk_num="4" data-lap_num="3" data-tab_num="2" data-mob_num="1" data-mob_sm="1" data-autoplay="false" data-loop="true" data-margin="10">
                    @foreach( $auctions as $auction)

                    <div class="item">
                        <div class="pq-portfoliobox-1">
                            <div class="pq-portfolio-block">
                                <div class="pq-portfolio-img  ">
                                    <img decoding="async" src="images/beer/1.jpg" alt="">
                                    <div class="pq-portfolio-info">
                                        <div class="pq-portfolio-info-content">
                                            <div class="pq-portfolio-link">
                                                <a href="">wine</a>
                                            </div>
                                            <h5><a href="portfolio-single.html">Delicious</a></h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    @endforeach





                </div>
            </div>
        </div>
    </div>
</section>
<!-- Portfolio -->


<!-- Popup -->
<section class="popup">
    <div class="container-fluid">
        <div class="row pq-bg-dark-color pq-ms-30">
            <div class="col-xl-5 pq-popup-video-bg-img pq-popup-video-bg-img-dark-layer">
                <div class="pq-popup-video-block">
                    <div class="pq-video-icon">
                        <a href="https://www.youtube.com/watch?v=XHOmBV4js_E" class="pq-video default popup-youtube">
                            <i aria-hidden="true" class="ion ion-play"></i>
                        </a>
                    </div>
                </div>
            </div>
            <div class="col-xl-7 pq-tab-padding">
                <div class="pq-dark-section-side-right">
                </div>
                <div class="pq-section-title-style-1">
                    <span class="pq-section-sub-title">About Us</span>
                    <h5 class="pq-section-title">Enjoy An Exceptional Drink of Wine</h5>
                </div>
                <div class="pq-advance-tab pq-about-tab">

                    <div class="tab-content" id="advance-nav-tabContent">
                        <div class="pq-advance-tab-content tab-pane fade show active" id="advance-nav-0" role="tabpanel" aria-labelledby="advance-nav-home-0">
                            <div class="row">
                                <div class="col-lg-12">
                                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable.</p>
                                    <ul class="pq-list-check">
                                        <li>
                                            <i class="ion ion-ios-checkmark-outline"></i>
                                            <span>Lorem is dummy text of the printing and typesettiry</span>
                                        </li>
                                        <li>
                                            <i class="ion ion-ios-checkmark-outline"></i>
                                            <span>There are many variations of passages</span>
                                        </li>
                                        <li>
                                            <i class="ion ion-ios-checkmark-outline"></i>
                                            <span>It is a long established fact that a reader will be distracted</span>
                                        </li>
                                        <li>
                                            <i class="ion ion-ios-checkmark-outline"></i>
                                            <span>Various versions have evolved over the years</span>
                                        </li>
                                    </ul>
                                    <a class="pq-button pq-button-flat pq-mt-30 rounded" href="/">
                                        <div class="pq-button-block rounded">
                                            <span class="pq-button-line-left"></span>
                                            <span class="pq-button-text">Read More</span>
                                            <span class="pq-button-line-right"></span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<!-- Popup -->

@if ($shoutouts->count())
<!-- Menu -->
<section class="menu pq-bg-dark-color">
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <div class="pq-section-title-style-1 text-left">
                    <h5 class="pq-section-title">Trending Shoutouts</h5>
                </div>
            </div>
            @foreach( $shoutouts as $shoutout)
            <div class="col-lg-6">
                <div class="pq-food-price-wrapper pq-style-1  ">
                    <div class="pq-food-price-item">
                        <div class="pq-food-price-hoverimg">
                            <img decoding="async" src="{{ optional($shoutout->celebrity)->image }}" alt="">
                        </div>

                        <div class="pq-food-price-content">
                            <div class="pq-food-price-top">
                                <div class="pq-food-price-title">
                                    <h5 class="pq-food-title">{{ $auction->name }}</h5>
                                </div>
                                <div class="pq-food-price-line"> </div>
                                <div class="pq-food-price-main">{{ $auction->latest_price }}</div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            @endforeach


        </div>
    </div>
</section>
<!-- Menu -->
@endif

<!-- <faq-start> -->
<section class="faq">
    <div class="container">
        <div class="row">
            <div class="col-xl-8 mt-xl-0 mt-4 ps-xl-3 col-md-8 offset-md-2">
                <div class="pq-1 text-center">
                    <h6 class="pq-section-title">Asked questions</h6>
                </div>
                <div class="pq-accordion-block mt-4">
                    <div class="pq-accordion-box 1 pq-active">
                        <div class="pq-ad-title">
                            <h4 class="ad-title-text">
                                How Can Improve My Health ?
                                <i aria-hidden="true" class="ion ion-ios-arrow-down active"></i><i aria-hidden="true" class="ion ion-ios-arrow-up inactive"></i>
                            </h4>
                        </div>
                        <div class="pq-accordion-details">
                            <p class="pq-detail-text"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. </p>
                        </div>
                    </div>
                    <div class="pq-accordion-box 2">
                        <div class="pq-ad-title">
                            <h6 class="ad-title-text">
                                More Information About Weight Loss Program ?
                                <i aria-hidden="true" class="ion ion-ios-arrow-down active"></i><i aria-hidden="true" class="ion ion-ios-arrow-up inactive"></i>
                            </h6>
                        </div>
                        <div class="pq-accordion-details">
                            <p class="pq-detail-text"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. </p>
                        </div>
                    </div>
                    <div class="pq-accordion-box 3 ">
                        <div class="pq-ad-title">
                            <h6 class="ad-title-text">
                                Do Your Products Contain Nutrition ?
                                <i aria-hidden="true" class="ion ion-ios-arrow-down active"></i><i aria-hidden="true" class="ion ion-ios-arrow-up inactive"></i>
                            </h6>
                        </div>
                        <div class="pq-accordion-details">
                            <p class="pq-detail-text"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. </p>
                        </div>
                    </div>
                    <div class="pq-accordion-box 4">
                        <div class="pq-ad-title">
                            <h4 class="ad-title-text">
                                Nutritionist Provides a Full Range of Services ?
                                <i aria-hidden="true" class="ion ion-ios-arrow-down active"></i><i aria-hidden="true" class="ion ion-ios-arrow-up inactive"></i>
                            </h4>
                        </div>
                        <div class="pq-accordion-details">
                            <p class="pq-detail-text"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. </p>
                        </div>
                    </div>
                    <div class="pq-accordion-box 5">
                        <div class="pq-ad-title">
                            <h4 class="ad-title-text">
                                how to follow nutrition plan ?
                                <i aria-hidden="true" class="ion ion-ios-arrow-down active"></i><i aria-hidden="true" class="ion ion-ios-arrow-up inactive"></i>
                            </h4>
                        </div>
                        <div class="pq-accordion-details" style="display: none;">
                            <p class="pq-detail-text"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<!-- <faq-end> -->

@stop
@section('inline-scripts')

@stop