<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Autofactor') }}</title>

    <!--     Fonts and icons     -->
    <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900|Roboto+Slab:400,700" />

    <!-- Font Awesome Icons -->
    <script src="https://kit.fontawesome.com/42d5adcbca.js" crossorigin="anonymous"></script>

    <!-- Material Icons -->
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
    <!-- CSS Files -->

    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">

    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
</head>

<body>
    <div id="app">
        <!-- -------- START HEADER 3 w/ image on background ------- -->

        <header>
            <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                <div class="container-fluid">
                    <a class="navbar-brand" href="/">
                        <img src="https://1on1.ng/images/logo/one.ng.PNG" width="100" height="50" alt="">
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarCollapse">
                        <ul class="navbar-nav  mx-auto">

                            @foreach( $global_categories as $category)
                            <li class="nav-item dropdown dropdown-hover mx-2">
                                <a href="{{ $category->link() }}" class="nav-link ps-2 d-flex cursor-pointer align-items-center" id="dropdownMenuAccount" data-bs-toggle="dropdown" aria-expanded="false" role="button">
                                    {{ $category->name }}
                                    @if( $category->children->count())
                                    <i class="bi bi-chevron-down arrow ms-auto ms-md-2"></i>
                                    @endif
                                </a>
                                @if( $category->children->count())
                                @foreach( $category->children as $category)
                                <div class="dropdown-menu dropdown-menu-animation dropdown-md border-radius-xl p-3 mt-0 mt-lg-3" aria-labelledby="dropdownMenuAccount">
                                    <div class="d-none d-lg-flex">
                                        <ul class="list-group w-100">
                                            <li class="nav-item list-group-item border-0 p-0">
                                                <a href="{{ optional($category->parent)->link() }}" class="dropdown-item border-radius-md text-dark ps-3 d-flex align-items-center mb-1">
                                                    <span>All {{ optional($category->parent)->name }}</span>
                                                </a>
                                            </li>
                                            <li class="nav-item list-group-item border-0 p-0">
                                                <a href="{{ $category->link() }}" class="dropdown-item border-radius-md text-dark ps-3 d-flex align-items-center mb-1">
                                                    <span> {{ $category->name }}</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                @endforeach
                                @endif
                            </li>
                            @endforeach

                        </ul>


                        @auth
                        <button class="btn btn-outline-success" type="submit">
                            <span>Balance: </span>
                            <wallet-balance />
                        </button>


                        <ul class="navbar-nav  ">

                            <li class="nav-item dropdown dropdown-hover mx-2">
                                <a class="nav-link ps-2 d-flex cursor-pointer align-items-center" id="dropdownMenuDocs" data-bs-toggle="dropdown" aria-expanded="false" role="button">
                                    <i class="fa fa-bars"></i>Menu<i class="bi bi-chevron-down arrow ms-auto ms-md-2"></i>
                                </a>
                                <div class="dropdown-menu dropdown-menu-end dropdown-menu-animation dropdown-md mt-0 mt-lg-3 p-3 border-radius-lg" aria-labelledby="dropdownMenuDocs">
                                    <div class="d-none d-lg-block">
                                        <ul class="list-group">
                                            @foreach($nav as $key => $n)
                                            <li class="nav-item list-group-item border-0 p-0">
                                                <a href="{{ $n['link'] }}" class="dropdown-item py-2 ps-3 border-radius-md"><i class="far fa-sign-out-alt left"></i> {{ $key  }} </a>
                                            </li>
                                            @endforeach


                                            <li class="nav-item list-group-item border-0 p-0">

                                                <a href="#" class="dropdown-item py-2 ps-3 border-radius-md" onclick="event.preventDefault();
                                                    document.getElementById('logout-form').submit();" class="list-group-item list-group-item-action bold text-uppercase p-4"><i class="far fa-sign-out-alt left"></i> Logout
                                                    <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                                                        @csrf
                                                    </form>
                                                </a>
                                            </li>

                                        </ul>
                                    </div>
                                    <div class="row d-lg-none">
                                        <div class="col-md-12 g-0">
                                            <a class="dropdown-item py-2 ps-3 border-radius-md" href="#">
                                                <h6 class="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0"></h6>
                                                <span class="text-sm">All about overview, quick start, license and contents</span>
                                            </a>

                                        </div>
                                    </div>
                                </div>
                            </li>

                        </ul>
                        @endauth

                        @guest
                        <button data-bs-toggle="modal" data-bs-target="#auth-modal" class="btn btn-outline-success">
                            <i class="material-symbols-outlined">login</i>
                            <span>
                                Login
                            </span>
                        </button>
                        @endguest

                    </div>
                </div>
            </nav>
        </header>
        <main class="py-1">
            @yield('content')
            <auth-modal />
        </main>

        <div class="py-3 subscribe  bg-dark">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 text-start">
                        <h4 class="text-white">Gain New Skills, Meet Your Favorite Celeb</h4>
                        <span class="mb-0 text-white">Enter your email and we’ll send you some samples of our favorite classes.</span>
                    </div>
                    <div class="col-lg-5 ms-auto text-end my-auto">
                        <div class="row g-0">
                            <div class="col-lg-8 col-md-4 col-7">
                                <div class="input-group input-group-outline">
                                    <label class="form-label">Your Email</label>
                                    <input class="form-control rounded-0 bg-white" placeholder="Enter your email" type="email">
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-4 col-5 text-start ps-0">
                                <button type="button" class="btn  bg-white rounded-0 bg-gradient-dark mb-0"><i class="bi bi-arrow-right"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <footer class="footer py-5  bg-dark font2">

            <div class="container">
                <div class="footer-middle">
                    <div class="row">

                        @foreach($footer_links as $link)


                        <div class="col-lg-6 col-sm-4">
                            <div class="widget">
                                <h4 class="widget-title text-white">{{ title_case($link->name) }}</h4>
                                @if($link->children->count())
                                <ul class="links text-white list-unstyled">
                                    @foreach($link->children as $link)
                                    <li>
                                        <a class=" text-white" href="{{ $link->link }}">
                                            {{ $link->name }}
                                        </a>
                                    </li>
                                    @endforeach
                                </ul>
                                @endif
                            </div><!-- End .widget -->
                        </div><!-- End .col-lg-2 -->
                        @endforeach


                        <div class="col-lg-6 col-sm-4">
                            <div class="widget">
                                <h4 class="widget-title text-white">Social</h4>

                                <ul class="links list-unstyled">
                                    <li class="mc-mb-4">
                                        <a href="https://twitter.com/masterclass" target="_blank" rel="noopener noreferrer">
                                            <svg width="2em" height="2em" viewBox="0 0 24 24" fill="none" aria-hidden="true" class="mc-icon mc-icon--3 mc-opacity--muted mc-mr-4" role="img">
                                                <path d="M8.654 19c6.793 0 10.51-5.388 10.51-10.052 0-.152 0-.303-.008-.455A7.351 7.351 0 0021 6.66a7.752 7.752 0 01-2.125.558 3.588 3.588 0 001.628-1.956 7.553 7.553 0 01-2.348.854A3.767 3.767 0 0015.46 5c-2.038 0-3.695 1.585-3.695 3.534 0 .276.036.545.094.807-3.069-.145-5.792-1.558-7.614-3.693a3.416 3.416 0 00-.497 1.777c0 1.227.656 2.308 1.642 2.942a3.865 3.865 0 01-1.67-.44v.047c0 1.71 1.274 3.142 2.96 3.466-.31.083-.634.124-.973.124-.237 0-.468-.02-.691-.062.468 1.405 1.837 2.425 3.45 2.453a7.624 7.624 0 01-4.588 1.516c-.296 0-.59-.014-.879-.049A10.856 10.856 0 008.654 19z" fill="currentColor"></path>
                                            </svg>
                                            <span class="mc-text--bare-link">Twitter</span>
                                        </a>
                                    </li>
                                    <li class="mc-mb-4">
                                        <a href="https://www.instagram.com/masterclass" target="_blank" rel="noopener noreferrer">
                                            <svg width="2em" height="2em" viewBox="0 0 24 24" fill="none" aria-hidden="true" class="mc-icon mc-icon--3 mc-opacity--muted mc-mr-4" role="img">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 4c-2.173 0-2.445.01-3.298.048-.852.039-1.433.174-1.942.372a3.921 3.921 0 00-1.417.923c-.445.444-.719.89-.923 1.417-.198.509-.333 1.09-.372 1.942C4.01 9.555 4 9.827 4 12s.01 2.445.048 3.298c.039.852.174 1.433.372 1.942.204.526.478.973.923 1.417.444.445.89.719 1.417.923.509.198 1.09.333 1.942.372C9.555 19.99 9.827 20 12 20s2.445-.01 3.298-.048c.852-.039 1.433-.174 1.942-.372a3.922 3.922 0 001.417-.923c.445-.445.719-.89.923-1.417.198-.509.333-1.09.372-1.942.039-.853.048-1.125.048-3.298s-.01-2.445-.048-3.298c-.039-.852-.174-1.433-.372-1.942a3.922 3.922 0 00-.923-1.417 3.921 3.921 0 00-1.417-.923c-.509-.198-1.09-.333-1.942-.372C14.445 4.01 14.173 4 12 4zm0 1.442c2.136 0 2.389.008 3.232.046.78.036 1.204.166 1.486.276.373.145.64.318.92.598.28.28.453.547.598.92.11.282.24.706.275 1.486.039.843.047 1.096.047 3.232s-.008 2.39-.047 3.233c-.035.78-.165 1.203-.275 1.485-.145.374-.319.64-.599.92-.28.28-.546.453-.92.599-.281.11-.705.24-1.485.275-.843.039-1.096.047-3.232.047-2.137 0-2.39-.008-3.233-.047-.78-.035-1.204-.166-1.486-.275a2.479 2.479 0 01-.92-.599 2.478 2.478 0 01-.598-.92c-.11-.282-.24-.705-.275-1.485-.039-.844-.047-1.097-.047-3.233s.008-2.389.047-3.232c.035-.78.165-1.204.275-1.486.145-.373.318-.64.598-.92.28-.28.547-.453.92-.598.282-.11.706-.24 1.486-.276.843-.038 1.096-.046 3.232-.046z" fill="currentColor"></path>
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M16.27 8.69a.96.96 0 100-1.92.96.96 0 000 1.92zM9.332 12a2.667 2.667 0 105.334 0 2.667 2.667 0 00-5.334 0zm-1.44 0a4.108 4.108 0 118.216 0 4.108 4.108 0 01-8.216 0z" fill="currentColor"></path>
                                            </svg>
                                            <span class="mc-text--bare-link">Instagram</span>
                                        </a>
                                    </li>
                                    <li class="mc-mb-4">
                                        <a href="https://www.facebook.com/masterclassofficial" target="_blank" rel="noopener noreferrer">
                                            <svg width="2em" height="2em" viewBox="0 0 24 24" fill="none" aria-hidden="true" class="mc-icon mc-icon--3 mc-opacity--muted mc-mr-4" role="img">
                                                <path d="M19.117 4H4.877A.883.883 0 004 4.883v14.24a.883.883 0 00.883.877h7.664v-6.187h-2.08V11.39h2.08V9.61c0-2.066 1.263-3.2 3.106-3.2a16.73 16.73 0 011.862.096v2.166h-1.28c-1 0-1.193.48-1.193 1.176v1.542h2.398l-.32 2.423h-2.08V20h4.077a.883.883 0 00.883-.883V4.877A.883.883 0 0019.117 4z" fill="currentColor"></path>
                                            </svg>
                                            <span class="mc-text--bare-link">Facebook</span>
                                        </a>
                                    </li>
                                    <li class="mc-mb-4">
                                        <a href="https://youtube.com/c/masterclass" target="_blank" rel="noopener noreferrer">
                                            <svg width="2em" height="2em" viewBox="0 0 24 24" fill="none" aria-hidden="true" class="mc-icon mc-icon--3 mc-opacity--muted mc-mr-4" role="img">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M19.857 5.489a2.48 2.48 0 011.733 1.767c.41 1.56.41 4.812.41 4.812s0 3.253-.41 4.812a2.48 2.48 0 01-1.733 1.768c-1.53.417-7.66.417-7.66.417s-6.133 0-7.662-.417a2.48 2.48 0 01-1.733-1.768c-.41-1.56-.41-4.812-.41-4.812s0-3.253.41-4.812A2.48 2.48 0 014.535 5.49c1.53-.418 7.661-.418 7.661-.418s6.132 0 7.66.418zm-4.543 6.58l-5.125 2.953V9.115l5.125 2.954z" fill="currentColor"></path>
                                            </svg>
                                            <span class="mc-text--bare-link">YouTube</span>
                                        </a>
                                    </li>
                                    <li class="mc-mb-4">
                                        <a href="https://www.linkedin.com/company/masterclassinc" target="_blank" rel="noopener noreferrer">
                                            <svg width="2em" height="2em" viewBox="0 0 24 24" fill="none" aria-hidden="true" class="mc-icon mc-icon--3 mc-opacity--muted mc-mr-4" role="img">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M18.814 4H5.186C4.542 4 4 4.508 4 5.153v13.695C4 19.49 4.525 20 5.186 20h13.628c.66 0 1.186-.525 1.186-1.152V5.152C20 4.525 19.475 4 18.814 4zM8.767 9.979v7.633h-2.4V9.979h2.4zm-1.2-3.8c.771 0 1.388.61 1.388 1.374 0 .763-.617 1.374-1.388 1.374-.771 0-1.388-.61-1.388-1.374 0-.763.617-1.374 1.388-1.374zm4.929 3.828h-2.287v7.665h2.372V13.89c0-1 .186-1.966 1.423-1.966 1.22 0 1.236 1.136 1.236 2.017v3.714h2.372v-4.189c0-2.068-.44-3.645-2.846-3.645-1.152 0-1.914.644-2.236 1.238h-.034v-1.052z" fill="currentColor"></path>
                                            </svg>
                                            <span class="mc-text--bare-link">LinkedIn</span>
                                        </a>
                                    </li>
                                </ul>


                            </div><!-- End .widget -->
                        </div><!-- End .col-lg-2 -->
                    </div><!-- End .row -->
                </div><!-- End .footer-middle -->

                <div class="footer-bottom text-white d-flex border-top justify-content-center align-items-center ">
                    <p class="footer-copyright py-3 pr-4 mb-0">© {{ config('app.name') }}. {{ date('Y') }}. All Rights Reserved</p>


                </div><!-- End .footer-bottom -->
            </div><!-- End .container -->
        </footer>
    </div>
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>

    <!-- Scripts -->
    <script src="{{ asset('js/app.js') }}" defer></script>


    @yield('page-scripts')
    <script type="text/javascript">
        @yield('inline-scripts')
    </script>
</body>

</html>