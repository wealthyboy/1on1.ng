@extends('admin.layouts.app')

@section('content')
@include('admin.errors.errors')

<form id="" action="{{ route($data['meta']['route']['store']) }}" method="post">
    @csrf
    <div class="row">
        <div class="col-md-7">
            <div class="card mt-4" id="password">
                <div class="card-header">
                    <h5>Add {{ ucfirst($data['meta']['name']) }}</h5>
                </div>
                <div class="card-body pt-0">

                    <div class="row">
                        <div class="col-sm-7 col-12">
                            <div class="input-group input-group-outline">
                                <label class="form-label">Name</label>
                                <input type="text" autocomplete="off" required class="form-control" name="name">
                            </div>
                        </div>
                        <div class="col-sm-5 col-12">
                            <div class="input-group input-group-outline">
                                <label class="form-label mt-4 ms-0"> </label>
                                <select class="form-control" name="celebrity_id" id="">
                                    <option value="">--Celebrity--</option>
                                    @foreach($celebrities as $celebrity)
                                    <option value="{{ $celebrity->id }}">{{ $celebrity->name }}</option>
                                    @endforeach
                                </select>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-sm-12 col-12 mt-3">
                            <div class="input-group input-group-outline">
                                <label class="form-label">Price</label>
                                <input name="price" autocomplete="off" class="form-control " type="text">
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        @include('admin._partials.type', ['name' => 'master_class'])
                    </div>

                    <div class="row">
                        <div class="col-sm-12 col-12 mt-3">
                            <div class="input-group input-group-outline">
                                <label class="form-label">Preview Link</label>
                                <input name="preview_link" value="" class="form-control" type="text">
                            </div>
                        </div>
                    </div>
                    <div class="row mt-3">
                        <div class="col-sm-12 col-12">
                            <label class="form-label">Description</label>
                            <div class="input-group input-group-outline">
                                <textarea type="text" autocomplete="off" required class="form-control" id="description" name="description" rows="8"></textarea>
                            </div>
                        </div>
                    </div>

                    <div id="large-items" class="row mt-3  schedule">

                        <h6>Schedule</h6>
                        <div class="col-sm-3 col-12">
                            <div class="input-group input-group-outline">
                                <label class="form-label">Start Date</label>
                                <input type="text" name="sch[start_date][]" class="form-control datetimepicker" type="text" data-input>
                            </div>
                        </div>
                        <div class="col-sm-3 col-12">
                            <div class="input-group input-group-outline">
                                <label class="form-label">End Date</label>
                                <input type="text" name="sch[end_date][]" class="form-control datetimepicker" type="text" data-input>
                            </div>
                        </div>
                        <div class="col-sm-3 col-12">
                            <div class="input-group input-group-outline">
                                <label class="form-label">Start time</label>
                                <input type="text" name="sch[start_time][]" class="form-control timepicker" type="text" data-input>
                            </div>
                        </div>
                        <div class="col-sm-3 col-12">
                            <div class="input-group input-group-outline">
                                <label class="form-label">End Time</label>
                                <input type="text" name="sch[end_time][]" class="form-control timepicker" type="text" data-input>
                            </div>
                        </div>
                    </div>



                    <div class="row button-lagos large-items my-3">
                        <div class=" d-flex justify-content-end">
                            <button onclick="addRowShedule();" id="add-more-lagos" type="button" class="btn btn-outline-secondary">+Add more</button>
                        </div>
                    </div>
                    @include('admin._partials.single_image')

                    <div class="row">
                        <div class="col-sm-8 col-12 my-4">
                            @include('admin._partials.is_featured')
                        </div>
                    </div>

                    <button type="submit" class="btn bg-gradient-dark btn-sm float-end mt-6 mb-0">Save</button>
                </div>
            </div>
        </div>
        <div class="col-md-5">
            @include('admin._partials.categories')

            @include('admin._partials.tags')

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
url:'/admin/masterclassegory/delete/image',
activator: delete_image,
inputFile: main_file,
});
});
@stop