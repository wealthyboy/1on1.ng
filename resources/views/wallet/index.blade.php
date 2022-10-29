@extends('layouts.app')

@section('content')

<section class="my-5">
    <div class="container mt-7">
        <div class="row">
            <div class="col-md-3">
                @include('_partials.nav')
            </div>
            <div class="col-md-9">
                <h2 class="page-title ">Wallet</h2>
                @include('_partials.table')
            </div>
        </div>
    </div>
</section>
<!--End Contact Form & Info-->

@endsection