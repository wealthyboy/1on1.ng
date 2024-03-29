@extends('layouts.app')

@section('content')

<div class="container">
    <nav class="mt-6" style="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb">
        <ol class="breadcrumb  px-2 py-3">
            <li class="breadcrumb-item"><a class="text-white" href="#">Home</a></li>
            <li class="breadcrumb-item"><a class="text-white" href="/auctions/auctions">All Auctions</a></li>
            <li class="breadcrumb-item active" aria-current="page">{{$auction->name}}</li>
        </ol>
    </nav>
</div>

<section id="main-content" class="py-2">
    <show-products :bid="{{ collect($bid) }}" :user="{{ $user }}" :service="{{ $auction }}" :auction="true" />
</section>

@include('_partials.faqs')


@stop