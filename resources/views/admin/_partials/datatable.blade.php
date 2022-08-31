<table class="table align-items-center mb-0">
    <thead>
    <tr>
        <th class="text">
            <div class="form-check p-0">
                <input class="form-check-input"  onclick="$('input[name*=\'selected[]\']').prop('checked', this.checked)" type="checkbox" id="customCheck5">
            </div>
        </th>
        <th class="text-uppercase text-secondary text-xxs font-weight-bolder ">Image</th>
        <th class="text-uppercase text-secondary text-xxs font-weight-bolder ">Product Name</th>

        <th class="text-uppercase text-secondary text-xxs font-weight-bolder  ps-2">Category</th>
        <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder ">Price</th>
        <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder ">Status</th>
        <th class="text-secondary opacity-7"></th>
    </tr>
    </thead>
    <tbody>
    @foreach($models as $model) 

        <tr>
        <td>
            <div class="form-check  p-3 pb-0">
                <input class="form-check-input" value="{{ $product->id }}" name="selected[]" type="checkbox" id="customCheck5">
            </div>
        </td>
        <td>
            <div class="d-flex">
            
                <figure class="avatar avatar-xl position-relative" itemprop="associatedMedia" itemscope="" itemtype="http://schema.org/ImageObject">
                <a href="{{ $product->image_to_show }}" itemprop="contentUrl" data-size="500x600">
                    <img class="border-radius-lg shadow" src="{{ $product->image_to_show_m }}" alt="Image description">
                </a>
                </figure>
            
            </div>
        </td>

        <td>
            <div class="d-flex  flex-column justify-content-center">
                <h6 class="mb-0 text-xs">{{ $product->name }} </h6>
                <p class="text-xs text-secondary mb-0">0 orders</p>
            </div>
        </td>

        
        <td>
            <p class="text-xs font-weight-bold mb-0">{{ $product->category_name }}</p>
        </td>
        <td class="align-middle text-center text-sm">
            ₦{{ number_format($product->price) }}
        </td>
        <td class="align-middle text-center">
            <span class="badge badge-sm badge-success">Online</span>
        </td>
        <td class="align-middle">
            
            <a href="{{ route('products.edit',['product'=> $product->id])  }} " rel="tooltip" class="" data-original-title="" title="Edit">
            <i class="material-symbols-outlined text-secondary font-weight-normal text-xs"">edit</i> Edit
            </a>
        </td>
        </tr>

    @endforeach

    </tbody>
</table>