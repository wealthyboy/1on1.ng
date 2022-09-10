<div class="card mt-4">
   <div class="card-header p-3 pt-2">
      <div class="icon icon-lg icon-shape bg-gradient-dark shadow text-center border-radius-xl mt-n4 me-3 float-start">
         <i class="material-symbols-outlined">list</i>
      </div>
      <h6 class="mb-0">Categories</h6>
   </div>
   <div class="material-datatables">
      <div class="categories fw-bold  text-sm text-danger px-4 "></div>
      <div class="well well-sm pb-5" style="height: 250px; background-color: #fff; color: black; overflow: auto;">
         @foreach($categories as $category)
         <div class="parent">
            <div class="form-check ">
               <label  class="custom-control-label" for="{{ $category->name }}-{{ $category->id }}">
               <input id="{{ $category->name }}-{{ $category->id }}"  class="form-check-input category_parent" {{ isset($collections) ?  App\Http\Helper::check($collections, $category->id)  : ''}} value="{{ $category->id }}" type="checkbox" name="category_id[]">
               <span role="button">{{ $category->name }}</span> 
               <a href="{{ route('category.edit',['category'=>$category->id]) }}">
               <i class="fa fa-pencil"></i> Edit</a>
               </label>
            </div>
            @include('includes.children',['obj'=>$category,'space'=>'&nbsp;&nbsp;','model' => 'category','url' => 'category','name' => 'category_id','route' => 'category'])
         </div>
         @endforeach  
      </div>
   </div>
</div>