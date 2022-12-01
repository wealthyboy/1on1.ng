<?php

namespace App\Http\Controllers\Bids;

use App\DataTable\DataTable;
use App\DataTable\Table;
use App\Http\Controllers\Controller;
use App\Models\Bid;
use App\Models\Service;
use App\Events\NewBid;
use App\Models\Auction;
use App\Models\User;
use App\Models\WalletBalance;
use App\Notifications\NewBid as NotificationsNewBid;
use App\Utils\AccountSettingsNav;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Notification;
use Illuminate\Support\Facades\Mail;

class BidsController extends Table
{


    public function __construct()
    {
        $this->middleware('auth');

        parent::__construct();
    }



    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $nav = (new AccountSettingsNav())->nav();
        $collections = $this->getColumnListings();

        if (request()->ajax()) {
            return response()->json([
                'collections' =>  $collections,
            ]);
        }

        return view('bids.index', compact('nav'));
    }


    public function builder()
    {
        return Bid::query();
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
        $bid->auction_id = $request->auction_id;
        $bid->price = $request->amount;
        $bid->save();

        //reduce wallet 
        $input = $request->all();
        WalletBalance::deductAmount($input);
        $auction = Auction::find($request->auction_id);
        $data = Bid::getCurrentBid($auction);
        $users = Bid::where('auction_id', $request->auction_id)->select('user_id')->get()->toArray();
        $users = User::find($users);
        broadcast(new NewBid($data));



        //Send emails
        Notification::send($users, new NotificationsNewBid($auction));

        return response()->json($data);
    }
}
