@extends('admin.layouts.app')

@section('content')
<form id="" action="{{ route($data['meta']['route']['update'][0], ['shoutout'=>$shoutout->id]) }}" method="post">
    @method('PATCH')
    @csrf
    <div class="row">
        <div class="col-md-7">
            <div class="card mt-4" id="password">
                <div class="card-header">
                    <h5>Add {{ $data['meta']['name'] }}</h5>
                </div>
                <div class="card-body pt-0">

                    <div class="row">
                        <div class="col-sm-7 col-12">
                            <div class="input-group input-group-outline">
                                <label class="form-label">Name</label>
                                <input type="text" value="{{ $shoutout->name }}" required class="form-control" name="name">
                            </div>
                        </div>
                        <div class="col-sm-5 col-12">
                            <div class="input-group input-group-outline">
                                <label class="form-label mt-4 ms-0"> </label>
                                <select class="form-control" name="celebrity_id" id="">
                                    <option value="">--Celebrity--</option>

                                    @foreach($celebrities as $celebrity)
                                    @if( $shoutout->celebrity_id == $celebrity->id)
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
                        <div class="col-sm-6 col-12 mt-3">
                            <div class="input-group input-group-outline">
                                <label class="form-label">Audio Price</label>
                                <input name="audio_shout_out_price" class="form-control " value="{{$shoutout->audio_shout_out_price }}" required type="text">
                            </div>
                        </div>
                        <div class="col-sm-6 col-12 mt-3">
                            <div class="input-group input-group-outline">
                                <label class="form-label">Video Price</label>
                                <input name="video_shout_out_price" class="form-control " value="{{$shoutout->video_shout_out_price }}" required type="text">
                            </div>
                        </div>
                    </div>

                    <div class="row mt-3">
                        <div class="col-sm-12 col-12">
                            <label class="form-label">Description</label>
                            <div class="input-group input-group-outline">
                                <textarea type="text" required class="form-control" id="description" name="description" rows="8">{{ $shoutout->description }}</textarea>
                            </div>
                        </div>
                    </div>
                    @include('admin._partials.single_image', ['model' => $shoutout])

                    <div class="row">
                        <div class="col-sm-8 col-12 my-4">
                            @include('admin._partials.is_featured',['model' => $shoutout])
                        </div>
                    </div>
                    <button type="submit" class="btn bg-gradient-dark btn-sm float-end mt-6 mb-0">Save</button>

                </div>
            </div>
        </div>
        <div class="col-md-5">
            @include('admin._partials.categories', ['collections' => $shoutout->categories])
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
url:'/admin/upload/image?folder=shoutouts',
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