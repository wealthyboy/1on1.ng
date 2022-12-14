<?php

namespace App\DataTable;

use App\Exports\Export;
use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\Celebrity;
use App\Models\Image;
use App\Models\Schedule;
use App\Models\ShoutOutType;
use App\Models\Tag;
use Illuminate\Http\Request;
use Exception;
use Illuminate\Support\Facades\Schema;
use Illuminate\Http\Resources\Json\ResourceCollection;
use Illuminate\Database\Eloquent\Builder;
use Maatwebsite\Excel\Facades\Excel;


abstract class Table extends Controller
{

    public $link;

    abstract public function builder();

    public function __construct()
    {

        $builder = $this->builder();

        if (!$builder instanceof Builder) {
            throw new Exception("Entity builder not instance of Builder");
        }

        $this->builder = $builder;
    }


    protected function getColumnListings()
    {

        $collection =  $this->builder->latest()->paginate(30);

        return [
            'items' => [
                $this->builder->getModel()->getListingData($collection)
            ],
            'meta' => [
                'sub_total'  => false,
                'show'  => false,
                'right' => null,
                'links' => $collection->links(),
                'count' => $collection->count(),
                'firstItem' => $collection->firstItem(),
                'lastItem' => $collection->lastItem(),
                'total' => $collection->total(),
                'per_page' => $collection->perPage(),
                'current_page' => $collection->currentPage(),
                'last_page' => $collection->lastPage(),
                'urls' => $collection->map(function ($obj) {
                    return [
                        "url" => '' . $this->link . '/' . $obj->id,
                    ];
                })
            ],
            'unique' =>  $this->unique()
        ];
    }

    public function unique()
    {
        return [
            'show'  => true,
            'right' => false,
        ];
    }




    public function showData($id)
    {
        $obj =  $this->builder->find($id);
        return [
            'customer' => [
                "Full Name" => optional($obj->user)->fullname(),
                "Phone Number" => optional($obj->user)->phone_number,
                "Email" => optional($obj->user)->email,
                "Date Joined" => optional($obj->user)->created_at->format('d-m-y')
            ],
            'data' => $this->builder->getModel()->getShowData($obj)
        ];
    }
}
