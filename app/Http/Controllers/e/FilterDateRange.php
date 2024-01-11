<?php

namespace App\Widget\Consignments;

use Carbon\Carbon;
use App\Widget\DateRange;

class FilterDateRange extends DateRange
{
  public function options($filter, $filteredData)
  {
    return [
      [
        'text' => 'Last 7 Days',
        'value' => 7
      ],
      [
        'text' => 'Last 30 Days',
        'value' => 30
      ],
      [
        'text' => 'Last 60 Days',
        'value' => 60
      ],
      [
        'text' => 'Custom',
        'value' => 'custom'
      ],
    ];
  }

  public function value($filter, $filteredData)
  {
    if ($value = data_get($filter, 'value')) return $value;
    return '';
  }

  public function startDate($filter, $filteredData)
  {
    if ($startDate = data_get($filter, 'start_date')) return $startDate;
    $value = $this->value($filter, $filteredData);

    if (is_numeric($value)) {
      return Carbon::now();
    }

    return '';
  }

  public function endDate($filter, $filteredData)
  {
    if ($startDate = data_get($filter, 'end_date')) return $startDate;
    $value = $this->value($filter, $filteredData);

    if (is_numeric($value)) {
      return Carbon::now()->subDays($value);
    }

    return '';
  }

  public function label($filter, $filteredData)
  {
    return 'Date';
  }

  public function name($filter, $filteredData)
  {
    return 'date';
  }
}
