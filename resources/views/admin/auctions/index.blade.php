@extends('admin.layouts.app')
@section('content')
<div class="row">
   @include('admin._partials.table', ['models' => $auctions])
</div>
@endsection
@section('inline-scripts')
@stop