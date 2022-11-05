<?php

namespace App\Http\Controllers\Admin\Faqs;

use App\DataTable\DataTable;
use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\Faq;
use Illuminate\Http\Request;

class FaqsController extends DataTable
{

    protected $name = 'Faqs';

    public $createRoute = 'admin.faqs.create';

    public $modelName = 'faq';

    public $type = null;

    public $allowEdit = true;

    public $storeRoute = 'admin.faqs.store';

    public $indexView = 'admin.faqs.index';

    public $editView = 'admin.faqs.edit';

    public $indexRoute = 'admin.faqs.index';

    public $storeForm = [
        'Title ' => [
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
        'admin.faqs.edit',
        'faq'
    ];

    public $deleteRoute = [
        'admin.faqs.destroy',
        'faq'
    ];

    public $updateRoute = [
        'admin.faqs.update',
        'faq'
    ];

    public $storeRouteRules = [
        'name' => 'required|unique:services|max:255',
        'description' => 'required',
        'category_id' => 'required|array',
    ];

    public function __construct()
    {
        parent::__construct();

        $this->routeData = [
            'data' => $this->all(request()),
            'form' => $this->storeForm,
            'categories' => Category::parents()->get(),
        ];
    }

    public function builder()
    {
        return Faq::query();
    }

    protected function getCustomColumnNames()
    {
        return [
            "name",
            "description",
        ];
    }
}
