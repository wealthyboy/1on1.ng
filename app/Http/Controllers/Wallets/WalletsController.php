<?php

namespace App\Http\Controllers\Wallets;

use App\Http\Controllers\Controller;
use App\Models\Wallet;
use App\Models\WalletBalance;


use App\Utils\AccountSettingsNav;
use Illuminate\Http\Request;
use App\Events\NewBid;

class WalletsController extends Controller
{

    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $nav = (new AccountSettingsNav())->nav();
        $pagination = auth()->user()->wallets()->paginate(4);
        $collections = $this->getColumnNames($pagination);
        $columns = $this->getGetCustomColumnNames();
        return view('wallet.index', compact('nav', 'collections', 'columns', 'pagination'));
    }


    public function b()
    {
        broadcast(new NewBid(auth()->user()));

        return auth()->user();
    }

    public function walletBalnce()
    {
        $balance  = auth()->user()->wallet_balance;
        return response()->json([
            'balance' => $balance
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

        $user = $request->user();
        $input = $request->all();
        $wallet = new Wallet;
        $wallet->amount = $input['amount'];
        $wallet->user_id = $user->id;
        $wallet->status = 'Added';
        $wallet->save();

        $balance = WalletBalance::where('user_id', $user->id)->first();

        if (null !== $balance) {
            $balance->amount = $balance->balance +  $input['amount'];
            $balance->save();
        } else {
            $balance = new WalletBalance;
            $balance->amount = $input['amount'];
            $balance->user_id = $user->id;
            $balance->save();
        }
        return response($balance, 200);
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
            "Ref Id",
            "amount",
            "date_added",
        ];
    }

    protected function getColumnNames($collection)
    {
        return [
            'items' => [
                $collection->map(function (Wallet $wallet) {
                    return [
                        "Ref Id" => '#' . optional($wallet)->id,
                        "amount" => '₦' . optional($wallet)->amount,
                        "date_added" => $wallet->created_at->format('d-m-y')
                    ];
                })
            ],
            'meta' => [
                'show' => false
            ]
        ];
    }
}
