@extends('admin.layouts.app')

@section('content')

@include('admin.errors.errors')

<form id="" action="{{ route($data['meta']['route']['update'][0], ['auction'=>$auction->id]) }}" method="post">
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
                            <input type="text" value="{{ $auction->name }}" required class="form-control"  name="name">
                        </div>
                    </div>
                    <div class="col-sm-5 col-12">
                        <div class="input-group input-group-outline">
                            <label class="form-label mt-4 ms-0"> </label>
                            <select class="form-control" name="celebrity_id" id="">
                            <option  value="">--Celebrity--</option>
                            
                            @foreach($celebrities as $celebrity) 
                                @if( $auction->celebrity_id == $celebrity->id)
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
                            <label class="form-label">Auction Bid Start Price</label>
                            <input value="{{ $auction->bid_start_price }}" name="bid_start_price" class="form-control" type="text" >
                        </div>
                    </div>
                    <div class="col-sm-6 col-12 mt-3">
                        <div class="input-group input-group-outline">
                            <label class="form-label">Auction Bid End Price</label>
                            <input value="{{ $auction->one_time_price }}" name="one_time_price"  class="form-control " type="text">
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-12 col-12 mt-3">
                        <div class="input-group input-group-outline">
                            <label class="form-label">Event Date & Time</label>
                            <input value="{{ $auction->event_date }}" name="event_date"  class="form-control datetimepicker" type="text" data-input>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-6 col-12 mt-3">
                        <div class="input-group input-group-outline">
                            <label class="form-label">Auction Start  Date & Time</label>
                            <input value="{{ $auction->start_date }}" name="start_date"  class="form-control datetimepicker" type="text" data-input>
                        </div>
                    </div>
                    <div class="col-sm-6 col-12 mt-3">
                        <div class="input-group input-group-outline">
                            <label class="form-label">End  Date & Time</label>
                            <input value="{{ $auction->end_date }}" name="end_date"  class="form-control datetimepicker" type="text" data-input>
                        </div>
                    </div>
                </div>
                <div class="row mt-3">
                    <div class="col-sm-12 col-12">
                        <label class="form-label">Description</label>
                        <div class="input-group input-group-outline">
                            <textarea type="text" required class="form-control" id="description" name="description" rows="8">{{ $auction->description }}</textarea>
                        </div>
                    </div>
                </div>
                <div class="row my-3">
                    <div class="col-sm-12">
                        <div class="row">
                            <div   class="col-md-12 col-sm-6 col-xs-6">
                            <div id="j-drop" class="j-activate j-drop">
                                <input accept="image/*"   onchange="getFile(this,'images[]','Image')" class="upload_input" data-msg="Upload  your image" type="file"  name="img"  />
                                <div   class=" upload-text {{ $auction->images->count()  ? 'hide' : ''}}"> 
                                    <a   class="j-activate" href="#">
                                    <img class="" src="/images/utils/upload_icon.png">
                                    <b>Click on anywhere to upload image</b> 
                                    </a>
                                </div>
                                <div id="j-details"  class="j-details">
                                    @if($auction->images->count())
                                        @foreach($auction->images as $image)
                                            <div id="{{ $image->id }}" class="j-complete">
                                                <div class="j-preview">
                                                    <img class="img-thumnail" src="{{ $image->image }}">
                                                    <div id="remove_image" class="remove_image remove-image">
                                                        <a class="remove-image"  data-id="{{ $image->id }}" data-randid="{{ $image->id }}" data-model="Image" data-type="complete"  data-url="{{ $image->image }}" href="#">Remove</a>
                                                    </div>
                                                </div>
                                            </div>
                                        @endforeach
                                    @endif
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button type="submit" class="btn bg-gradient-dark btn-sm float-end mt-6 mb-0">Save</button>
                
            </div>
        </div>
    </div>
    <div class="col-md-5">
        @include('admin._partials.categories', ['collections' => $auction->categories])
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
        url:'/admin/upload/image?folder=category',
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











