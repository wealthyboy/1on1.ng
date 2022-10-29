<?php

namespace App\Http\Controllers\Admin\MasterClass;

use App\DataTable\DataTable;
use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\Celebrity;
use App\Models\MasterClass;
use App\Models\Service;
use App\Models\Tag;
use Illuminate\Http\Request;

class MasterClassController extends DataTable
{
    protected $name = 'masterclass';   
    
    public $createRoute = 'admin.masterclass.create';

    public $modelName = 'MasterClass';

    public $allowEdit = true;

    public $type = 'master_class';


    public $storeRoute = 'masterclass.store';

    public $indexView  = 'admin.masterclass.index';

    public $editView  = 'admin.masterclass.edit';

    public $indexRoute = 'masterclass.index';

    public $storeForm = [
        'Name' => [
            'type' => 'input',
            'clasess' => '',
            'name' => 'full_name'
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
        'masterclass.edit',
        'masterclass'
    ];

    public $deleteRoute = [
        'masterclass.destroy',
        'masterclass'
    ];

    public $storeRouteRules = [
        'name' => 'required|unique:auctions|max:255',
        'description' => 'required'
    ];

    public $editRouteRules = [
        'name' => 'required|unique:auctions|max:255',
        'description' => 'required'
    ];

    public $updateRoute = [
        'masterclass.update',
        'masterclass'
    ];

    public function __construct()
    {
        parent::__construct();

        $this->routeData  = [
            'data' => $this->all(request()),
            'form' => $this->storeForm,
            'celebrities' => Celebrity::all(),
            'categories' => Category::parents()->get(),
            'tags' => Tag::get()
        ];
        
    }

    public function builder()
    {   
        return Service::query();
    }

    protected function getCustomColumnNames() 
    {
        return [
          "image",
          "name",
          "start_date",
          "end_date",
          "price",
        ];
    }
}
