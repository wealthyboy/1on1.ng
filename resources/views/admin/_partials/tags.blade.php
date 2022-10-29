

<div class="card mt-4">
   <div class="card-header p-3 pt-2">
      <div class="icon icon-lg icon-shape bg-gradient-dark shadow text-center border-radius-xl mt-n4 me-3 float-start">
         <i class="material-symbols-outlined">list</i>
      </div>
      <h6 class="mb-0">Tags</h6>
   </div>
   <div class="material-datatables">
      <div class="categories fw-bold  text-sm text-danger px-4 "></div>
      <div class="well well-sm pb-5" style="height: 250px; background-color: #fff; color: black; overflow: auto;">
         @foreach($tags as $tag)
         <div class="parent">
            <div class="form-check ">
               <label  class="custom-control-label" for="{{ $tag->name }}-{{ $tag->id }}">
               <input id="{{ $tag->name }}-{{ $tag->id }}"  class="form-check-input tag_parent" {{ isset($collections) ?  App\Http\Helper::check($collections, $tag->id)  : ''}} value="{{ $tag->id }}" type="checkbox" name="tag_id[]">
               <span role="button">{{ $tag->name }}</span> 
               <a href="{{ route('tags.edit',['tag'=>$tag->id]) }}">
               <i class="fa fa-pencil"></i> Edit</a>
               </label>
            </div>
         </div>
         @endforeach  
      </div>
   </div>
</div>