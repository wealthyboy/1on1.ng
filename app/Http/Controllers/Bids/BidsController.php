<?php

namespace App\Http\Controllers\Bids;

use App\DataTable\DataTable;
use App\Http\Controllers\Controller;
use App\Models\Bid;
use App\Utils\AccountSettingsNav;
use Illuminate\Http\Request;

class BidsController extends DataTable
{


    public function __construct()
    {
        $this->middleware('auth');
    }


    public function builder()
    {
        return Bid::query();
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {

        $nav = (new AccountSettingsNav())->nav();
        $pagination = auth()->user()->bids()->paginate(4);
        $collections = $this->getColumnNames($pagination);
        $columns = $this->getGetCustomColumnNames();
        return view('bids.index', compact('nav', 'collections', 'columns', 'pagination'));
    }



    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }


    protected function getGetCustomColumnNames()
    {
        return [
            "id",
            "price",
            "auction",
            "created_at",
        ];
    }

    protected function getColumnNames($collection)
    {
        return [
            'items' => [
                $collection->map(function (Bid $bid) {
                    return [
                        "id" => $bid->id,
                        "price" => $bid->price,
                        "auction" => optional($bid->service)->name,
                        "created_at" => $bid->created_at->format('d-m-y')
                    ];
                })
            ]
        ];
    }
}
