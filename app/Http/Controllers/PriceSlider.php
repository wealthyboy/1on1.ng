<?php

namespace App\Widget\Consignments;

use App\Widget\Slider;

class PriceSlider extends Slider
{
  protected $name = 'slider';
  protected $id = 'slider';

  public function minValue($filter, $filteredData)
  {
    return (int)data_get($filter, 'min_value');
  }

  public function maxValue($filter, $filteredData)
  {
    return (int)data_get($filter, 'max_value');
  }

  public function max($filter, $filteredData)
  {
    return (int)data_get($filter, 'max');
  }
}
