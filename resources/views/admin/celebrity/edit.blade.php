@extends('admin.layouts.app')

@section('content')

<div class="row">
    <div class="col-md-6">
        <div class="card mt-4" id="password">
            <div class="card-header">
                <h5>Edit </h5>
            </div>

            <div class="card-body pt-0">
            <form action="{{ route('celebrities.update',['celebrity'=>$celebrity->id])  }}" class="" method="post" data-method="POST" enctype="multipart/form-data" id="form-celebrity">
                    @method('PATCH') 
                    @csrf
                    <div class="input-group input-group-outline">
                        <label class="form-label">Full Name</label>
                        <input 
                            type="text" 
                            class="form-control"                                     
                            name="name"
                            value="{{ $celebrity->name }}"
                            required
                        >
                    </div>

                    <div class="row mt-3">
                        <div class="col-sm-12 col-12">
                            <label class="form-label">Description</label>
                            <div class="input-group input-group-outline">
                                <textarea type="text" required class="form-control" name="description" rows="8">{{ $celebrity->description }}</textarea>
                            </div>
                        </div>
                    </div>

                    <div class="row d-flex justify-content-center my-3">
                        <div class="col-md-6">

                            <div id="m_image"  class="uploadloaded_image text-center mb-3">
                                <div role="button" class="upload-text {{ $celebrity->image !== null  ?  'hide' : '' }}">
                                    <a class="activate-file" >
                                        <img src="/images/utils/upload_icon.png">
                                        <b>Add Image </b> 
                                    </a>
                                </div>
                                <div id="remove_image" class="remove_image {{ $celebrity->image !== null  ?  '' : 'hide' }}">
                                    <a class="delete_image" data-id="{{ $celebrity->id }}" href="#">Remove</a> 
                                </div>

                                <input accept="image/*"  class="upload_input" data-msg="Upload  your image" type="file" id="file_upload_input" name="category_image"  />
                                <input type="hidden"  class="file_upload_input  stored_image" value="{{ $celebrity->image }}" name="image">
                                @if ( $celebrity->image )
                                    <img id="stored_image" role="button" class="img-thumnail" src="{{ $celebrity->image }}" alt="">
                                @endif
                                
                            </div>
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





