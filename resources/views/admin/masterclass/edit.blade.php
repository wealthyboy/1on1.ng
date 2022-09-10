@extends('admin.layouts.app')

@section('content')
<form id="" action="{{ route($data['meta']['route']['update'][0], ['masterclass'=>$masterclass->id]) }}" method="post">
    @method('PATCH') 
    @csrf
    <div class="row">
    <div class="col-md-7">
        <div class="card mt-4" id="password">
            <div class="card-header">
                <h5>Edit</h5>
            </div>
            <div class="card-body pt-0">
                
                <div class="row">
                   <div class="col-sm-7 col-12">
                        <div class="input-group input-group-outline">
                            <label class="form-label">Name</label>
                            <input type="text" value="{{ $masterclass->name }}" required class="form-control"  name="name">
                        </div>
                    </div>

                    <div class="col-sm-5 col-12">
                        <div class="input-group input-group-outline">
                            <label class="form-label mt-4 ms-0"> </label>
                            <select class="form-control" name="celebrity_id" id="">
                            <option  value="">--Celebrity--</option>
                            
                            @foreach($celebrities as $celebrity) 
                                @if( $masterclass->celebrity_id == $celebrity->id)
                                <option value="{{ $celebrity->id }}" selected> {{ $celebrity->name }} </option>
                                @else
                                <option value="{{ $celebrity->id }}"> {{ $celebrity->name }} </option>
                                @endif
                            @endforeach
                            </select>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-sm-12 col-12 mt-3">
                        <div class="input-group input-group-outline">
                            <label class="form-label">Price</label>
                            <input name="price" value="{{ $masterclass->price }}" class="form-control" type="text">
                        </div>
                    </div>
                </div>
                
               
                <div class="row">
                    <div class="col-sm-6 col-12 mt-3">
                        <div class="input-group input-group-outline">
                            <label class="form-label">Start  Date & Time</label>
                            <input value="{{ $masterclass->start_date }}" name="start_date"  class="form-control datetimepicker" type="text" data-input>
                        </div>
                    </div>
                    <div class="col-sm-6 col-12 mt-3">
                        <div class="input-group input-group-outline">
                            <label class="form-label">End  Date & Time</label>
                            <input value="{{ $masterclass->end_date }}" name="end_date"  class="form-control datetimepicker" type="text" data-input>
                        </div>
                    </div>
                </div>
                <div class="row mt-3">
                    <div class="col-sm-12 col-12">
                        <label class="form-label">Description</label>
                        <div class="input-group input-group-outline">
                            <textarea type="text" required class="form-control" id="description" name="description" rows="8">{{ $masterclass->description }}</textarea>
                        </div>
                    </div>
                </div>
                @include('admin._partials.single_image',['model' => $masterclass])

                <button type="submit" class="btn bg-gradient-dark btn-sm float-end mt-6 mb-0">Save</button>
            
            </div>
        </div>
    </div>
    <div class="col-md-5">
        @include('admin._partials.categories', ['collections' => $masterclass->categories])
    </div>
    </div>
</form>
@endsection

@section('page-scripts')
<script src="{{ asset('ckeditor/ckeditor.js') }}"></script>
<script src="{{ asset('backend/products.js') }}"></script>
@stop
@section('inline-scripts')
$(document).ready(function() {
    let activateFileExplorer = 'a.activate-file';
    let delete_image = 'a.delete_image';
    var main_file = $("input#file_upload_input");

    Img.initUploadImage({
        url:'/admin/upload/image?folder=masterclass',
        activator: activateFileExplorer,
        inputFile: main_file,
    });

    Img.deleteImage({
        url:'/admin/category/delete/image',
        activator: delete_image,
        inputFile: main_file,
    });
});
@stop











