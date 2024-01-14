<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Millennium - Restaurant HTML Template</title>
    <!-- Favicon Icon -->
    <link rel="shortcut icon" href="/images/favicon.ico">
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="/css/bootstrap.min.css">
    <!-- LOADING FONTS AND ICONS -->
    <link rel="stylesheet" type="text/css" href="/rev/fonts/pe-icon-7-stroke/css/pe-icon-7-stroke.css">
    <link rel="stylesheet" type="text/css" href="/rev/fonts/font-awesome/css/font-awesome.css">
    <!-- REVOLUTION STYLE SHEETS -->
    <link rel="stylesheet" type="text/css" href="/rev/css/rs6.css">
    <!-- Icons CSS -->
    <link rel="stylesheet" href="/fonts/font-awesome/css/all.min.css">
    <link rel="stylesheet" href="/fonts/themify-icons/themify-icons.css">
    <link rel="stylesheet" href="/fonts/ionicons/ionicons.min.css">
    <link rel="stylesheet" type="/text/css" href="/fonts/flaticons/flaticon.css">
    <!-- Owl Carousel CSS -->
    <link rel="stylesheet" href="/css/owl.carousel.min.css">
    <link rel="stylesheet" href="/css/magnific-popup.min.css">
    <!-- Animation CSS -->
    <link rel="stylesheet" href="/css/animations.min.css">
    <!--  Style CSS -->
    <link rel="stylesheet" href="/css/style.css">
    <!--  Responsive CSS -->
    <link rel="stylesheet" href="/css/responsive.css">
</head>

<body>

    <!--Loading-->
    <div id="pq-loading">
        <div id="pq-loading-center">
            <img src="https://1on1.ng/images/logo/one.ng.PNG" width="100" height="50" alt="loading">
        </div>
    </div>
    <!--Loading-->

    <!-- Header -->
    <header id="pq-header" class="pq-header-default">
        <div class="pq-top-header">
            <div class="container">
                <div class="row flex-row-reverse">
                    <div class="col-md-6 text-right">
                        <div class="pq-header-social text-right">
                            <ul>
                                <li><a href="index-5.html#"><i class="fab fa-facebook-f"></i></a></li>
                                <li><a href="index-5.html#"><i class="fab fa-instagram"></i></a></li>
                                <li><a href="index-5.html#"><i class="fab fa-twitter"></i></a></li>
                                <li><a href="index-5.html#"><i class="fab fa-linkedin-in"></i></a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="pq-header-contact ">
                            <ul>
                                <li>
                                    <a href="tel:+1800001658"><i class="fas fa-phone"></i>
                                        <span> +1800-001-658</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="mailto:peacefulqode@gmail.com"><i class="fas fa-envelope"></i><span>peacefulqode@gmail.com</span></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="pq-bottom-header">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <nav class="navbar navbar-expand-lg navbar-light">
                            <a class="navbar-brand" href="/">
                                <img class="img-fluid logo" src="https://1on1.ng/images/logo/one.ng.PNG" width="100" height="50" alt="loading">
                            </a>
                            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                <div id="pq-menu-contain" class="pq-menu-contain">
                                    <ul id="pq-main-menu" class="navbar-nav ml-auto">
                                        @foreach( $global_categories as $category)

                                        <li class="menu-item current-menu-item"><a href="{{ $category->link() }}">
                                                {{ $category->name }}
                                            </a>
                                            @if( $category->children->count())
                                            @foreach( $category->children as $category)
                                            <i class="ion-chevron-down pq-submenu-icon"></i>
                                            <ul class="sub-menu">
                                                <li class="menu-item"><a href="{{ $category->link() }}" aria-current="page">
                                                        {{ $category->name }}
                                                    </a></li>

                                            </ul>
                                            @endforeach
                                            @endif
                                        </li>
                                        @endforeach


                                    </ul>
                                </div>
                            </div>
                            <div class="pq-menu-search-block">
                                <a href="javascript:void(0)" id="pq-seacrh-btn"><i class="ti-search"></i></a>
                                <div class="pq-search-form">
                                    <form role="search" method="get" class="search-form">
                                        <label>
                                            <span class="screen-reader-text">Search for:</span>
                                            <input type="search" class="search-field" placeholder="Search …" value="" name="s">
                                        </label>
                                        <button class="search-submit"><span class="screen-reader-text">Search</span></button>
                                    </form>
                                </div>
                            </div>
                            <div class="pq-btn-container">
                                <a href="booking-table.html" class="pq-button rounded">
                                    <div class="pq-button-block">
                                        <span class="pq-button-line-left"></span>
                                        <span class="pq-button-text">Book a table</span>
                                        <span class="pq-button-line-right"></span>
                                    </div>
                                </a>
                            </div>
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <i class="fas fa-bars"></i>
                            </button>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </header>
    <!-- Header -->

    <main class="py-1">
        @yield('content')
        <auth-modal />
    </main>


    <!-- Footer -->
    <footer id="pq-footer">
        <div class="pq-footer-style-1">

            <div class="pq-subscribe align-items-center">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-lg-5">
                            <div class="pq-subscribe-block">
                                <img src="images/Subscribe.png" class="pq-subscribe-img" alt="millennium-subscribe-image">
                                <div class="pq-subscribe-details">
                                    <h5>Subscribe Our Newsletter </h5>
                                    <span>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-7">
                            <div class="pq-subscribe-form">
                                <div class="row align-items-center">
                                    <div class="col-lg-8 col-md-8 p-lg-0">
                                        <news-letter />

                                    </div>
                                    <div class="col-lg-4 col-md-4 p-lg-0">
                                        <a href="index-5.html#" class="pq-button">
                                            <span class="pq-button-text">Subscribe</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="pq-copyright-footer">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12 align-self-center">
                            <p class="footer-copyright py-3 text-white pr-4 mb-0">© {{ config('app.name') }}. {{ date('Y') }}. All Rights Reserved</p>
                            @if ( auth()->check() && auth()->user()->isAdmin() )
                            <p class="footer-copyright mx-3"><a target="_blank" href="/admin">Go to Admin</a></p>
                            @endif
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    <!-- Footer -->

    <!-- Back to Top -->
    <div id="back-to-top">
        <div class="top" id="top">
            <a id="pq-back-to-top" href="index-5.html#" class="on">
                <span class="pq-icon-up">
                    <i class="ion-ios-arrow-up"></i> </span>
            </a>
        </div>
    </div>
    <!-- Back to Top -->

    <!--jquery js-->
    <script src="/js/jquery.min.js"></script>
    <script src="{{ asset('js/app.js') }}" defer></script>


    @yield('page-scripts')
    <script type="text/javascript">
        @yield('inline-scripts')
    </script>
</body>

</html>