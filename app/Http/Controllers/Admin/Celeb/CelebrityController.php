<?php

namespace App\Http\Controllers\Admin\Celeb;

use App\DataTable\DataTable;
use App\Models\Celebrity;
use App\Models\User;
use Illuminate\Http\Request;
use Maatwebsite\Excel\Facades\Excel;
use App\Exports\Export;



class CelebrityController extends DataTable
{   

    protected $name = 'Celebrities';   
    
    public $createRoute = 'admin.celebrity.create';

    public $modelName = 'celebrity';

    public $updateRoute;

    public $allowEdit = true;

    public $storeRoute = 'celebrities.store';

    public $indexView  = 'admin.celebrity.index';

    public $editView  = 'admin.celebrity.edit';

    public $indexRoute = 'celebrities.index';

    public $storeForm = [
        'Full name' => [
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
        'celebrities.edit',
        'celebrity'
    ];

    public $deleteRoute = [
        'celebrities.destroy',
        'celebrity'
    ];

    public $storeRouteRules = [
        'name' => 'required|unique:celebrities|max:255',
        'description' => 'required'
    ];

    public $editRouteRules = [
        'full_name' => 'required|unique:celebrities|max:255',
        'description' => 'required'
    ];

    public function __construct()
    {
    
        parent::__construct();

        $this->routeData  = [
            'data' => $this->all(request()),
            'form' => $this->storeForm
        ];
    }

    public function builder()
    {   
        return Celebrity::query();
    }


    protected function getCustomColumnNames() 
    {
        return [
          "image",
          "name",
          "description",
          "created_at",
        ];
    }

}
