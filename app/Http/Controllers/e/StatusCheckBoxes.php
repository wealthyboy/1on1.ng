<?php

namespace App\Widget\Consignments;

use App\Widget\Radio;

class StatusCheckBoxes extends Radio
{
  public function options($filter, $filteredData = null)
  {
    return [
      [
        'label' => 'All',
        'value' => ''
      ],
      [
        'label' => 'Active',
        'value' => 'active'
      ],
      [
        'label' => 'Draft',
        'value' => 'draft'
      ],
      [
        'label' => 'Archive',
        'value' => 'archive'
      ]
    ];
  }

  public function value($filter, $filteredData)
  {
    if ($value = data_get($filter, $this->id($filter, $filteredData))) return $value;
    return '';
  }

  public function name($filter, $filteredData)
  {
    return 'status';
  }

  public function id($filter, $filteredData)
  {
    return 'status';
  }
}
