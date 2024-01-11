<?php

namespace App\Widget\Consignments;

use App\Models\Store;
use App\Models\StoreCategory;
use App\Widget\CheckBox;
use App\Models\StoreProductType;
use Illuminate\Support\Facades\Cache;

class TypeCheckboxes extends CheckBox
{
  public function options($filter, $filteredData = null)
  {
    $store_id = data_get($filter, 'store_id');
    $store = Store::find($store_id);
    $categories = StoreCategory::getProductTypes($store);
    $typesArray = $categories->map(function ($category) {
      return $category->id;
    })->toArray();

    $types = StoreCategory::whereIn('id', $typesArray)->get();

    return $types->map(function ($type) {
      return [
        'label' => $type->name,
        'value' => $type->id
      ];
    });
  }

  public function id($filter, $filteredData)
  {
    return 'product_type_id';
  }

  public function name($filter, $filteredData)
  {
    return 'product_type_id';
  }
}
