<?php

namespace App\Http\Controllers\Admin\Booking;

use App\DataTable\DataTable;
use App\Models\Category;
use App\Models\Celebrity;
use App\Models\Booking;
use Illuminate\Http\Request;


class BookingController extends DataTable
{
    protected $name = 'Bookings';   
    
    public $createRoute = 'admin.bookings.create';

    public $modelName = 'Booking';


    public $allowEdit = true;

    public $storeRoute = 'bookings.store';

    public $indexView  = 'admin.bookings.index';

    public $editView  = 'admin.bookings.edit';

    public $indexRoute = 'bookings.index';

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
        'bookings.edit',
        'booking'
    ];

    public $deleteRoute = [
        'bookings.destroy',
        'booking'
    ];

    public $updateRoute = [
        'bookings.update',
        'booking'
    ];

    

    public $storeRouteRules = [
        'name' => 'required|unique:auctions|max:255',
        'description' => 'required'
    ];

    public $editRouteRules = [
        'name' => 'required|unique:auctions|max:255',
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
        return Booking::query();
    }


    protected function getCustomColumnNames() 
    {
        return [
          "image",
          "name",
          "price",
          "start_date",
          "end_date",
          "created_at",
        ];
    }
}
