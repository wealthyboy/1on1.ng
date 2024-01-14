<?php

namespace App\Http\Controllers;

use App\Models\Banner;
use App\Models\Category;
use App\Models\Faq;
use App\Models\Service;
use Illuminate\Http\Request;

class HomeController extends Controller
{

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        // broadcast(new \App\Events\NewBid(auth()->user()));
        $sliders = Banner::where('type', 'slider')->orderBy('sort_order', 'asc')->get();
        $faqs = Faq::all();
        $categories = Category::featured()->get();
        $auctions = Category::where('name', 'Auctions')->get();
        $auctions->load('celebrity');
        $shoutouts = Category::where('name', 'Shout-Outs')->get();
        $shoutouts->load('celebrity');

        return view('index', compact('sliders', 'faqs', 'auctions', 'categories', 'shoutouts'));
    }
}
