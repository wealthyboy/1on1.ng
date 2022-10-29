<?php

namespace App\Filters\ServicesFilter;

use App\Filters\AbstractFilters;
use App\Filters\ServicesFilter\CategoryFilter;


class ServicesFilters extends AbstractFilters
{
    
    protected $filters = [
        'category'=>CategoryFilter::class,
    ];
}
