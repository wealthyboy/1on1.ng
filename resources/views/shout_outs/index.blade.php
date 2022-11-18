@extends('layouts.app')

@section('content')

<section class="my-5">
    @include('_partials.mobile_nav')
    <div class="container">
        <div class="row">
            @include('_partials.nav')
            <div class="col-md-9">
                <h2 class="page-title ">Shout Outs</h2>
                <general-table />
            </div>
        </div>
    </div>
</section>
<!--End Contact Form & Info-->

@endsection