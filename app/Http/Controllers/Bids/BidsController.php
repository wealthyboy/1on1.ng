<?php

namespace App\Http\Controllers\Bids;

use App\DataTable\DataTable;
use App\Http\Controllers\Controller;
use App\Models\Bid;
use App\Models\Service;
use App\Events\NewBid;

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


    public function currentBid(Request $request, $service_id)
    {
        //  broadcast(new NewBid(auth()->user()));
        $service = Service::find($service_id);
        $data = Bid::getCurrentBid($service);
        return response()->json($data);
    }

    public function store(Request $request)
    {
        $bid = new Bid;
        $bid->user_id = $request->user_id;
        $bid->service_id = $request->service_id;
        $bid->price = $request->amount;
        $bid->save();
        $service = Service::find($request->service_id);
        $data = Bid::getCurrentBid($service);


        broadcast(new NewBid($data));

        return response()->json($data);
    }


    protected function getGetCustomColumnNames()
    {
        return [
            "Ref id",
            "price",
            "auction",
            "status",
            "created_at",
        ];
    }

    protected function getColumnNames($collection)
    {
        return [
            'items' => [
                $collection->map(function (Bid $bid) {
                    return [
                        "Ref id" => '#' . $bid->id,
                        "price" => '₦' . $bid->price,
                        "auction" => optional($bid->service)->name,
                        "status" => null,
                        "created_at" => $bid->created_at->format('d-m-y')
                    ];
                })
            ],
            'meta' => [
                'show' => true
            ]
        ];
    }
}
