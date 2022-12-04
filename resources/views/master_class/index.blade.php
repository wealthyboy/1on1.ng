@extends('layouts.app')

@section('content')

<section class="mt-7 mb-9">
    <div class="container">
        <div class="d-block d-sm-none">
            @include('_partials.mobile_nav')
        </div>
    </div>
    <div class="container">
        <div class="row">
            @include('_partials.nav')
            <div class="col-md-9">
                <h2 class="page-title ">Master Class</h2>
                <general-table />
            </div>
        </div>
    </div>
</section>
<!--End Contact Form & Info-->

@endsection