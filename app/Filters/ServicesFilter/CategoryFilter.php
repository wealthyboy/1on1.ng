<?php

namespace App\Filters\ServicesFilter;

use Illuminate\Http\Request;
use Illuminate\Database\Eloquent\Builder;
use App\Filters\AbstractFilter;


class CategoryFilter  extends AbstractFilter
{
    public function filter(Builder $builder,$value) {
        return $builder->whereHas('meta_fields',function(Builder  $builder) use ($value){
            $builder->whereIn('slug',$value);
        });
    }  
}
