<?php

namespace App\Traits;

use Illuminate\Database\Eloquent\Builder;

trait HasChildren 
{
    
    public function scopeParents(Builder $builder,$order = null, $desc = null){

        if ($order == null){
           return $builder->whereNull('parent_id');
        }
        return $builder->whereNull('parent_id')->orderBy($order,$desc);
    }

    


    public function scopeFeatured(Builder $builder,$order = null, $desc = null){
        if ($order  && $desc) {
            return $builder->where('is_featured', true)->orderBy($order,$desc);
        }
        return $builder->where('is_featured', true);
    }

    public function isParent()
    {
        return $this->parent_id == null ? true : false;
    }

}
