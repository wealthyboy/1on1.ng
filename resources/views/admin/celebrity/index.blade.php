@extends('admin.layouts.app')
@section('content')
<div class="row">
   @include('admin._partials.table', ['models' => $celebrities])
</div>
@endsection
@section('inline-scripts')
@stop