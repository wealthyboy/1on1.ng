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
        $sliders = Banner::where('type', 'slider')->orderBy('sort_order', 'asc')->get();
        $faqs = Faq::all();
        $categories = Category::featured()->get();
        $auction = Category::where('name', 'Auctions')->first();
        $shoutout = Category::where('name', 'Shout-Outs')->first();
        return view('index', compact('sliders', 'faqs', 'auction', 'categories', 'shoutout'));
    }
}
