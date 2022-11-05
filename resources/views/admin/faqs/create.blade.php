@extends('admin.layouts.app')

@section('content')
<form id="" action="{{ route($data['meta']['route']['store']) }}" method="post">
    @csrf
    <div class="row">
        <div class="col-md-7">
            <div class="card mt-4" id="password">
                <div class="card-header">
                    <h5>Add {{ $data['meta']['name'] }}</h5>
                </div>
                <div class="card-body pt-0">

                    <div class="row">
                        @foreach($form as $key => $formValues)
                        @if($formValues['type'] == 'input')
                        <div class="col-sm-12 col-12">
                            <div class="input-group input-group-outline">
                                <label class="form-label">{{ $key }}</label>
                                <{{ $formValues['type'] }} type="text" required class="form-control" name="{{ $formValues['name'] }}">
                            </div>
                        </div>
                        @endif
                        @endforeach

                    </div>

                    <div class="row mt-3">
                        <div class="col-sm-12 col-12">
                            <label class="form-label">Description</label>
                            <div class="input-group input-group-outline">
                                <textarea type="text" required class="form-control" id="description" name="description" rows="8"></textarea>
                            </div>
                        </div>


                    </div>

                    <button type="submit" class="btn bg-gradient-dark btn-sm float-end mt-6 mb-0">Save</button>

                </div>
            </div>
        </div>
        <div class="col-md-5">
            @include('admin._partials.categories')
        </div>
    </div>
</form>
@endsection

@section('page-scripts')
<script src="{{ asset('ckeditor/ckeditor.js') }}"></script>
<script src="{{ asset('backend/products.js') }}"></script>
@stop
@section('inline-scripts')

@stop