@extends('admin.layouts.app')
@section('content')
<div class="row">
    @include('admin._partials.t', ['models' => $collections, 'name' => 'Class'])
</div>
@endsection
@section('inline-scripts')
@stop