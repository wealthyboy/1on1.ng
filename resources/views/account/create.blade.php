@extends('layouts.app')

@section('content')

<section class="my-5">
    <div class="container mt-7">
        <div class="row">
            <div class="col-md-3">
                @include('_partials.nav')
            </div>
            <div class="col-md-5">
                <h2 class="page-title ">Account</h2>
                <account :user="{{ $user }}" />
            </div>
        </div>
    </div>
    </div>
</section>
<!--End Contact Form & Info-->

@endsection