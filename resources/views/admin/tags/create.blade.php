@extends('admin.layouts.app')

@section('content')
<form id="" action="{{ route($data['meta']['route']['store']) }}" method="post">
    @csrf
    <div class="row">
    <div class="col-md-7">
        <div class="card mt-4" id="password">
            <div class="card-header border-bottom">
                <h5>Add {{ $data['meta']['name'] }}</h5>
            </div>
            <div class="card-body pt-0 mt-3">
                
                <div class="row">
                    @foreach($form as $key => $formValues)
                    @if($formValues['type'] == 'input')
                    <div class="col-sm-8 col-12">
                        <div class="input-group input-group-outline">
                            <label class="form-label">{{ $key }}</label>
                            <{{ $formValues['type'] }} type="text" required class="form-control"  name="{{ $formValues['name'] }}">
                        </div>
                    </div>
                    @endif
                    @endforeach
                    
                </div>

                <div class="row">
                   <div class="col-sm-8 col-12 my-4">
                      @include('admin._partials.is_featured')
                   </div>
                </div>
               
                <button type="submit" class="btn bg-gradient-dark btn-sm float-end mt-1 mb-0">Save</button>
            </div>
        </div>
    </div>
    <div class="col-md-5">
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
        url:'/admin/upload/image?folder=bookings',
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





