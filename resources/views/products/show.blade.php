@extends('layouts.app')

@section('content')

<nav class="mt-5" style="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb">
  <ol class="breadcrumb border px-5 py-3">
    <li class="breadcrumb-item"><a href="#">Home</a></li>
    <li class="breadcrumb-item active" aria-current="page">Library</li>
  </ol>
</nav>

<section id="main-content" class="py-2">
  <show-products :user="{{ $user }}" :service="{{ $service }}" />
</section>

@include('_partials.faqs')


@stop