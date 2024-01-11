<?php

namespace App\Widget\Consignments;

use App\Widget\Form;

class FilterForm extends Form
{
    protected $component = 'DateRange';

    public function formGroups($filter, $filteredData)
    {
        return [
            [
                'name' => 'Date',
                'label' => 'date',
                'fields' => (new FilterDateRange())->render($filter, $filteredData)
            ],
            [
                'name' => 'Brand',
                'label' => 'brand',
                'fields' => (new BrandCheckboxes())->render($filter, $filteredData)
            ],
            [
                'name' => 'Type',
                'label' => 'Type',
                'fields' => (new TypeCheckboxes())->render($filter, $filteredData)
            ],

            [
                'name' => 'Status',
                'label' => 'status',
                'fields' => (new StatusCheckBoxes())->render($filter, $filteredData)
            ],
            [
                'name' => 'Price',
                'label' => 'price',
                'fields' => (new PriceSlider())->render($filter, $filteredData)
            ],

        ];
    }

    public function formOptions()
    {
        return [
            'Type',
            'Model',
            //'Location',
            'Agent',
            'Stock',
            'Price Range'
        ];
    }
}
