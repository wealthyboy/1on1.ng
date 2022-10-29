<?php

namespace App\Http\Controllers\Admin\Auction;
use App\DataTable\DataTable;

use App\Http\Controllers\Controller;
use App\Models\Auction;
use App\Models\Category;
use App\Models\Celebrity;
use App\Models\Service;
use App\Models\Tag;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;


class AuctionsController extends DataTable
{
    
    protected $name = 'Auctions';   
    
    public $createRoute = 'admin.auctions.create';

    public $modelName = 'auction';


    public $type = 'auction';


    public $allowEdit = true;

    public $storeRoute = 'auctions.store';

    public $indexView = 'admin.auctions.index';

    public $editView = 'admin.auctions.edit';

    public $indexRoute = 'auctions.index';

    public $storeForm = [
        'Auction name' => [
            'type' => 'input',
            'clasess' => '',
            'name' => 'name'
        ],
        'Description' => [
            'type' => 'textarea',
            'clasess' => '',
            'name' => 'description'
        ],
        'image' => [
            'type' => 'image',
            'clasess' => '',
            'name' => 'image'
        ]
    ];


    public $editRoute = [
        'auctions.edit',
        'auction'
    ];

    public $deleteRoute = [
        'auctions.destroy',
        'auction'
    ];

    public $updateRoute = [
        'auctions.update',
        'auction'
    ];

    public $storeRouteRules = [
        'name' => 'required|unique:services|max:255',
        'description' => 'required',
        'celebrity_id' => 'required',
        'category_id' => 'required',
    ];

    public function __construct()
    {
        parent::__construct();

        $this->routeData = [
            'data' => $this->all(request()),
            'form' => $this->storeForm,
            'celebrities' => Celebrity::all(),
            'categories' => Category::parents()->get(),
        ];
    }

    public function builder()
    {   
        return Service::query();
    }

    public function editValidationRules($id) 
    {    
        return [
            'name'=>[
                'required',
                    Rule::unique('auctions')->ignore($id)     
            ],
            'celebrity_id' => 'required',
            'description' => 'required',
            'category_id' => 'required',
        ];
    }

    protected function getCustomColumnNames() 
    {
        return [
          "name",
          "event_date",
          "bid_start_price",
          "one_time_price",
          "start_date",
          "end_date",
          "created_at",
        ];
    }
}


