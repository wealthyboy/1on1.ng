@extends('admin.layouts.app')
@section('content')
<div class="row">
    <div class="col-md-12">
        @include('admin._partials.customers', ['users' => $shout_out['customer']])
    </div>
</div>
<div class="row mt-3">
    <div class="col-md-12">
        @include('admin._partials.show', ['models' => $shout_out['data'], 'name' => 'Class'])
    </div>
</div>
@endsection
@section('inline-scripts')
@stop