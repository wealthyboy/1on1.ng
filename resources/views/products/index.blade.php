@extends('layouts.app')

@section('content')


<section class="py-5">
    <div class="container">

        <div class="row">
            <div class="col-lg-6">
                <h2 class="mc-text-h2 mc-my-2 d-inline-block">Trending {{ $category->name }}</h2>
                <span>sll</span>
            </div>
        </div>

        <div class="row mt-4">
            <category-items :category="{{ $category }}" :categories="{{ $categories }}" />
        </div>

    </div>
</section>

@stop