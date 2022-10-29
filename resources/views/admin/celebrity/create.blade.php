@extends('admin.layouts.app')

@section('content')

@include('admin.errors.errors')


<div class="row">
    <div class="col-md-6">
        <div class="card mt-4" id="password">
            <div class="card-header">
                <h5>Add {{ $data['meta']['name'] }}</h5>
            </div>

            <div class="card-body pt-0">
                <form id="" action="{{ route($data['meta']['route']['store']) }}" method="post">
                    @csrf 

                    @foreach($form as $key => $formValues)
                        @if($formValues['type'] == 'input')
                        <div class="input-group input-group-outline">
                            <label class="form-label">{{ $key }}</label>
                            <{{ $formValues['type'] }} type="text" required class="form-control"  name="{{ $formValues['name'] }}">
                        </div>
                        @endif
                    @endforeach

                    <div class="row mt-3">
                        <div class="col-sm-12 col-12">
                            <label class="form-label">Description</label>
                            <div class="input-group input-group-outline">
                                <textarea type="text" required class="form-control" name="description" rows="8"></textarea>
                            </div>
                        </div>
                    </div>
                    @include('admin._partials.single_image')

                    <div class="row">
                        <div class="col-sm-8 col-12 my-4">
                        @include('admin._partials.is_featured')
                        </div>
                    </div>
                    <button type="submit" class="btn bg-gradient-dark btn-sm float-end mt-6 mb-0">Save</button>
                </form>
            </div>
        </div>
    </div>
</div>


@endsection

@section('page-scripts')
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





