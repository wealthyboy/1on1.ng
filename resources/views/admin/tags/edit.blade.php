@extends('admin.layouts.app')

@section('content')
<form id="" action="{{ route($data['meta']['route']['update'][0], ['tag'=>$tag->id]) }}" method="post">
    @method('PATCH') 
    @csrf
    <div class="row">
        <div class="col-md-7">
            <div class="card mt-4" id="password">
                <div class="card-header">
                    <h5>Edit {{ $data['meta']['name'] }}</h5>
                </div>
                <div class="card-body pt-0">
                    
                    <div class="row">
                        <div class="col-sm-7 col-12">
                            <div class="input-group input-group-outline">
                                <label class="form-label">Name</label>
                                <input type="text" value="{{ $tag->name }}" required class="form-control"  name="name">
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-sm-8 col-12 my-4">
                            @include('admin._partials.is_featured', ['model' =>  $tag])
                        </div>
                     </div>
                
                    <button type="submit" class="btn bg-gradient-dark btn-sm float-end mt-6 mb-0">Save</button>
                </div>
            </div>
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