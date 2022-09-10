<?php 
namespace App\Exports;

use Illuminate\Database\Eloquent\Builder;
use Maatwebsite\Excel\Concerns\FromCollection;

class Export implements FromCollection
{   
    public $builder;

    public function __construct(Builder $builder)
    {
        $this->builder = $builder;
    }


    public function collection()
    {
        return $this->builder->get();
    }
}