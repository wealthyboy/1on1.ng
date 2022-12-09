<?php

namespace App\Http\Controllers\Admin\Auction;

use App\DataTable\DataTable;

use App\Http\Controllers\Controller;
use App\Jobs\CheckForWinnerOfAuction;
use App\Models\Auction;
use App\Models\Category;
use App\Models\Celebrity;
use App\Models\Service;
use App\Models\Image;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;


class AuctionsController extends DataTable
{

    protected $name = 'Auctions';

    public $createRoute = 'admin.auctions.create';

    public $modelName = 'auction';


    public $type = null;


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

        //dd($this->routeData);
    }

    public function builder()
    {
        return Auction::query();
    }

    public function editValidationRules($id)
    {
        return [
            'name' => [
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


    public function store(Request $request)
    {
        $request->validate($this->storeRouteRules);

        $data =  $request->all();
        $data['slug'] = str_slug($data['name']);
        $auction = $this->builder->create($data);
        if (!empty($request->images)) {
            $images =  $request->images;
            $images = array_filter($images);
            foreach ($images as $variation_image) {
                $images = new Image(['image' => $variation_image]);
                $auction->images()->save($images);
            }
        }

        if (!empty($request->category_id)) {
            $auction->categories()->sync($request->category_id);
        }

        dispatch(new CheckForWinnerOfAuction($auction))->delay($auction->end_date);

        return redirect()->route($this->indexRoute);
    }

    public function update(Request $request, $id)
    {

        $request->validate($this->editValidationRules($id));
        $auction = $this->builder->find($id);
        $data =  $request->all();


        $auction->end_date = $request->end_date;

        if ($auction->isDirty('end_date')) {
            CheckForWinnerOfAuction::dispatch($auction);
        }

        $this->builder->find($id)->update($data);
        if (!empty($request->images)) {
            $images =  $request->images;
            $images = array_filter($images);
            foreach ($images as $variation_image) {
                $images = new Image(['image' => $variation_image]);
                $auction->images()->save($images);
            }
        }


        if (!empty($request->category_id)) {
            $auction->categories()->sync($request->category_id);
        }

        if (!empty($request->tag_id)) {
            $auction->tags()->sync($request->tag_id);
        }

        // dd($auction->isDirty('end_date'))




        if ($this->useJson) {
            return;
        } //js
        return redirect()->route($this->indexRoute);
    }
}
