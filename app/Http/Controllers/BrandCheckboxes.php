<?php

namespace App\Widget\Consignments;

use App\Models\Brand;
use App\Widget\CheckBox;

class BrandCheckboxes extends CheckBox
{
  public function options($filter, $filteredData = null)
  {
    $brands = Brand::where('store_id', data_get($filter, 'store_id'))
      ->get();

    return $brands->map(function ($brand) {
      return [
        'label' => $brand->name,
        'value' => $brand->id
      ];
    });
  }

  public function id($filter, $filteredData)
  {
    return 'brand_id';
  }

  public function name($filter, $filteredData)
  {
    return 'brand_id';
  }

  public function selected($filter, $filteredData)
  {
    if ($brand = data_get($filter, 'brand_id')) {
      return $brand;
    }

    return [];
  }
}
