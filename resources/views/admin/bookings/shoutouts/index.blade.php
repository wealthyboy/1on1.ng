@extends('admin.layouts.app')
@section('content')
<div class="row">
    @include('admin._partials.t', ['models' => $collections, 'name' => 'Shout Outs'])
</div>
@endsection
@section('inline-scripts')
@stop