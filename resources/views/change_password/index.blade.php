@extends('layouts.app')

@section('content')

<section class="sec-padding--account mt-7 bg--gray">
    <div class="container">
        <div class="row">
            <div class="col-md-3">
                @include('_partials.nav')
            </div>
            <div class="col-md-5">
                <h2 class="page-title">Change Password</h2>
                <change-password :user="{{ $user }}" />
            </div>
        </div>
    </div>
</section>
<!--End Contact Form & Info-->

@endsection