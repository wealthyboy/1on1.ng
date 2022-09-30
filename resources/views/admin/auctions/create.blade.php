@extends('admin.layouts.app')


@section('content')
@include('admin.errors.errors')

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
                    <div class="col-sm-7 col-12">
                        <div class="input-group input-group-outline">
                            <label class="form-label">Name</label>
                            <input type="text" value="{{ old('name') }}"  required class="form-control"  name="name">
                        </div>
                    </div>
                    <div class="col-sm-5 col-12">
                        <div class="input-group input-group-outline">
                            <label class="form-label mt-4 ms-0"> </label>
                            <select required class="form-control" name="celebrity_id" id="">
                            <option  value="">--Celebrity--</option>
                            @foreach($celebrities as $celebrity)
                            @if ( null !== old('celebrity_id')) &&  old('celebrity_id') == $celebrity->id) 
                              <option  value="{{ $celebrity->id }}"  selected>{{ $celebrity->name }}</option>
                            @else
                              <option  value="{{ $celebrity->id }}">{{ $celebrity->name }}</option>
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
                            <input required  value="{{ old('bid_start_price') }}"  name="bid_start_price" class="form-control " type="number" >
                        </div>
                    </div>
                    <div class="col-sm-6 col-12 mt-3">
                        <div class="input-group input-group-outline">
                            <label class="form-label">Auction Bid End Price</label>
                            <input name="one_time_price" value="{{ old('one_time_price') }}"  class="form-control " type="number">
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-12 col-12 mt-3">
                        <div class="input-group input-group-outline">
                            <label class="form-label">Event Date & Time</label>
                            <input name="event_date"  value="{{ old('event_date') }}"   class="form-control datetimepicker" type="text" data-input>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-6 col-12 mt-3">
                        <div class="input-group input-group-outline">
                            <label class="form-label">Auction Start  Date & Time</label>
                            <input required name="start_date"  value="{{ old('start_date') }}"  class="form-control datetimepicker" type="text" data-input>
                        </div>
                    </div>
                    <div class="col-sm-6 col-12 mt-3">
                        <div class="input-group input-group-outline">
                            <label class="form-label">End  Date & Time</label>
                            <input required name="end_date"  value="{{ old('end_date') }}"  class="form-control datetimepicker" type="text" data-input>
                        </div>
                    </div>
                </div>
                <div class="row mt-3">
                    <div class="col-sm-12 col-12">
                        <label class="form-label">Description</label>
                        <div class="input-group input-group-outline">
                            <textarea type="text" required class="form-control" id="description" name="description" rows="8">{{ old('description') }}</textarea>
                        </div>
                    </div>
                </div>
                <div class="row my-3">
                    <div class="col-sm-12">
                        <div class="row">
                            <div   class="col-md-12 col-sm-6 col-xs-6">
                            <div id="j-drop" class=" j-drop">
                                <input accept="image/*"  required  onchange="getFile(this,'images[]')" class="upload_input" multiple="true"  data-msg="Upload  your image" type="file"  name="pimages"  />
                                <div   class=" upload-text"> 
                                    <a   class="" href="#">
                                    <img class="" src="/images/utils/upload_icon.png">
                                    <b>Click on anywhere to upload image</b> 
                                    </a>
                                </div>
                                <div id="j-details"  class="j-details">
                                   
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








