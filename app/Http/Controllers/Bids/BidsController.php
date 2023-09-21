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


    public function unique()
    {
        return [
            'show'  => false,
            'right' => false,
        ];
    }


    public function currentBid(Request $request, $auction_id)
    {
        $user = $request->user();
        $auction = Auction::find($auction_id);
        $data = Bid::getCurrentBid($auction, $user);
        return response()->json($data);
    }

    public function store(Request $request)
    {
        try {
            $bid = new Bid;
            $user = $request->user();
            $bid->user_id = $user->id;
            $bid->auction_id = $request->auction_id;
            $bid->price = $request->amount;
            $bid->save();

            //reduce wallet 
            $input = $request->all();
            WalletBalance::deductAmount($input);
            $auction = Auction::find($request->auction_id);
            $data = Bid::getCurrentBid($auction, $user);
            $users = Bid::where('auction_id', $request->auction_id)->where('user_id', '!=',  $user->id)->select('user_id')->get()->toArray();
            $users = User::find($users);
            broadcast(new NewBid($data))->toOthers();

            //Send emails
            $delay = now()->addMinutes(5);
            Notification::send($users, (new NotificationsNewBid($auction))->delay($delay));

            return response()->json($data);
        } catch (\Throwable $th) {
            //throw $th;

        }
    }
}
