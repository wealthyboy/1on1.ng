<?php

namespace App\Http\Controllers\Admin\Tags;

use App\DataTable\DataTable;
use App\Models\Tag;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;


class TagsController extends DataTable
{
    protected $name = 'Tags';   
    
    public $createRoute = 'admin.tags.create';

    public $modelName = 'tag';

    public $allowEdit = true;

    public $storeRoute = 'tags.store';

    public $indexView  = 'admin.tags.index';

    public $editView  = 'admin.tags.edit';

    public $indexRoute = 'tags.index';

    public $storeForm = [
        'Tags name' => [
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
        'tags.edit',
        'tag'
    ];

    public $deleteRoute = [
        'tags.destroy',
        'tag'
    ];

    public $updateRoute = [
        'tags.update',
        'tag'
    ];

    public $storeRouteRules = [
        'name' => 'required|unique:tags|max:255',
    ];

    public function __construct()
    {
        parent::__construct();

        $this->routeData  = [
            'data' => $this->all(request()),
            'form' => $this->storeForm,
        ];
    }

    public function builder()
    {   
        return Tag::query();
        
    }

    public function editValidationRules($id) 
    {    
        return [
            'name'=>[
                'required',
                    Rule::unique('tags')->ignore($id)     
            ],
           
        ];
    }

    protected function getCustomColumnNames() 
    {
        return [
          "name",
          "created_at",
        ];
    }
}
