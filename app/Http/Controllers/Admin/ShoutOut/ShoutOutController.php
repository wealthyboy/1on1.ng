<?php

namespace App\Http\Controllers\Admin\ShoutOut;

use App\DataTable\DataTable;
use App\Models\Category;
use App\Models\Celebrity;
use App\Models\Service;
use App\Models\ShoutOut;
use Illuminate\Http\Request;

class ShoutOutController extends DataTable
{   
    protected $name = 'shoutouts';  
    
    protected $page_name = 'Shout Outs';   

    public $createRoute = 'admin.shoutouts.create';

    public $modelName = 'ShoutOut';

    public $allowEdit = true;

    public $type = 'shout_out';

    public $storeRoute = 'shoutouts.store';

    public $indexView  = 'admin.shoutouts.index';

    public $editView  = 'admin.shoutouts.edit';

    public $indexRoute = 'shoutouts.index';

    public $storeForm = [
        ' name' => [
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
        'shoutouts.edit',
        'shoutout'
    ];

    public $deleteRoute = [
        'shoutouts.destroy',
        'shoutout'
    ];

    public $updateRoute = [
        'shoutouts.update',
        'shoutout'
    ];


    public $storeRouteRules = [
        'name' => 'required|unique:services|max:255',
        'description' => 'required'
    ];

    public $editRouteRules = [
        'name' => 'required|unique:services|max:255',
        'description' => 'required'
    ];

    public function __construct()
    {
        parent::__construct();

        $this->routeData  = [
            'data' => $this->all(request()),
            'form' => $this->storeForm,
            'celebrities' => Celebrity::all(),
            'categories' => Category::parents()->get()
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
          "created_at",
        ];
    }
}