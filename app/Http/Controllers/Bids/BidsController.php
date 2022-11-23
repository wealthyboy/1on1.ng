<?php

namespace App\Http\Controllers\Bids;

use App\DataTable\DataTable;
use App\Http\Controllers\Controller;
use App\Models\Bid;
use App\Models\Service;
use App\Events\NewBid;
use App\Models\Auction;
use App\Models\WalletBalance;
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

        if (request()->ajax()) {
            return response([
                'collections' => $this->getColumnNames($pagination),
                'pagination' =>  $pagination
            ]);
        }

        return view('bids.index', compact('nav', 'collections', 'columns', 'pagination'));
    }


    public function currentBid(Request $request, $auction_id)
    {
        //  broadcast(new NewBid(auth()->user()));
        $auction = Auction::find($auction_id);
        $data = Bid::getCurrentBid($auction);
        return response()->json($data);
    }

    public function store(Request $request)
    {
        $bid = new Bid;
        $bid->user_id = $request->user()->id;
        $bid->auction_id = $request->service_id;
        $bid->price = $request->amount;
        $bid->save();

        //reduce wallet 
        $input = $request->all();
        WalletBalance::deductAmount($input);

        $service = Service::find($request->service_id);
        $data = Bid::getCurrentBid($service);


        broadcast(new NewBid($data));

        //Send emails


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
                        "Price" => '₦' . number_format(optional($bid)->price),
                        "Auction" => optional($bid->service)->name,
                        "Date Added" => $bid->created_at->format('d-m-y')
                    ];
                })
            ],
            'meta' => [
                'show' => false
            ]
        ];
    }
}
