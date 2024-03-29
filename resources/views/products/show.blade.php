@extends('layouts.app')

@section('content')

<nav class="mt-6 " style="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb">
    <ol class="breadcrumb  px-5 py-3">
        <li class="breadcrumb-item"><a class="text-white" href=" #">Home</a></li>
        <li class="breadcrumb-item"><a class="text-white" href=" #">{{$all_categories}}</a></li>
        <li class="breadcrumb-item active" aria-current="page">{{$service->name}}</li>
    </ol>
</nav>

<section id="main-content" class="py-2 text-white">
    <show-products :user="{{ $user }}" :service="{{ $service }}" />
</section>

@include('_partials.faqs')


@stop