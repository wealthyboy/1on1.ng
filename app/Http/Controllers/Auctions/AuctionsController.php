<?php

namespace App\Http\Controllers\Auctions;

use App\Http\Controllers\Controller;
use App\Http\Resources\AuctionCollection;
use App\Models\Auction;
use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Database\Eloquent\Builder;



class AuctionsController extends Controller
{

    public function __construct()
    {
        $this->middleware('auth', ['except' => [
            'index'
        ]]);
    }


    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request, Category $category)
    {
        // broadcast(new Test());

        $categories = Category::with('parent')->orderBy('name', 'asc')->get();

        $auctions = Auction::whereHas('categories', function (Builder  $builder) use ($category) {
            $builder->where('categories.name', $category->name);
        })->whereDate('end_date', ">=", now())
            ->latest()->paginate(30);

        $auctions->load('celebrity');


        if ($request->ajax()) {
            return new AuctionCollection($auctions);
        }

        return view('products.index', compact('categories', 'category'));
    }



    /**
     * Display the specified resource.
     *
     * @param  int  $id  
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request, Auction $auction)
    {
        $a = '10 : 52 AM';
        $x = preg_replace('/\s*:\s*/', ':', $a);

        // dd(date("H:i", strtotime($x)));

        // if (\Carbon\Carbon::parse('2022-11-23 11:30:00')->gt(\Carbon\Carbon::now())) {
        //     dd(true);
        //     //Time has not passed
        // } else {
        //     //Time has  passed
        // }

        // dd(auth()->user());


        $auction->load('celebrity');

        $categories = Category::with('parent')->orderBy('name', 'asc')->get();
        $user = $request->user();
        return view('products.auction', compact('categories', 'user', 'auction'));
    }
}
