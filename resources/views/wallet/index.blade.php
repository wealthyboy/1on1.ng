@extends('layouts.app')

@section('content')

<section class="mt-7 mb-9">
    <div class="container">
        <div class="d-block d-sm-none">
            @include('_partials.mobile_nav')
        </div>
    </div>
    <div class="container ">
        <div class="row">

            @include('_partials.nav')

            <div class="col-md-9">
                <wallet-table :user="{{ $user }}" />

            </div>
        </div>
    </div>
</section>
<!--End Contact Form & Info-->

@endsection