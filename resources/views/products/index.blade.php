@extends('layouts.app')

@section('content')


<section class="py-5">
    <div class="container">

        <div class="row mt-5">
            <div class="col-lg-6">
                <h2 class="mc-text-h2 text-white mc-my-2 d-inline-block">Trending {{ $category->name }}</h2>
                <span></span>
            </div>
        </div>

        <category-items :category="{{ $category }}" :categories="{{ $categories }}" />

    </div>
</section>

@stop