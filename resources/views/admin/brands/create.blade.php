@extends('admin.layouts.app')

@section('content')

<div class="row">
    <div class="col-md-6">
        <div class="card mt-4" id="password">
            <div class="card-header">
                <h5>Add Brand</h5>
            </div>
            <div class="card-body pt-0">
                <form id="" action="{{ route('brands.store') }}" method="post">
                    @csrf 
                    <div class="input-group input-group-outline">
                        <label class="form-label">Brand Name</label>
                        <input type="text" class="form-control"                                     
                            name="name"
                            >
                    </div>

                    <input 
                           type="hidden" 
                           class="image"                                     
                           name="image"
                           >
                    <div class="row mt-3">
                        <div class="col-12">
                            <label class="form-control mb-0"></label>
                            <div action="/file-upload" class="form-control border dropzone" id="dropzone"></div>
                        </div>
                    </div>
                    <button type="submit" class="btn bg-gradient-dark btn-sm float-end mt-6 mb-0">Save</button>
                </form>
            </div>
        </div>
    </div>
</div>


@endsection

@section('inline-scripts')
Dropzone.autoDiscover = false;
var drop = document.getElementById('dropzone')
let imgs = []

var myDropzone = new Dropzone(drop, {
   url: "/admin/upload/image?folder=brands",
   addRemoveLinks: true,
   acceptedFiles: ".jpeg,.jpg,.png,.JPG,.PNG",
   paramName: 'file',
   maxFiles: 10,
   sending: function(file, xhr, formData) {
     formData.append("_token", "{{ csrf_token() }}");
   },
    success(file, res, formData) {
         imgs.push(res.path)
         console.log(imgs)
     $('.image').val(imgs)
  },
   headers: {
      'X-CSRF-TOKEN': $('meta[name="token"]').attr('content')
   }
});;
@stop





