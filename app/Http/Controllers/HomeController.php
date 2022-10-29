<?php

namespace App\Http\Controllers;

use App\Models\Banner;
use App\Models\Category;
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
        $sliders = Banner::where('type','slider')->orderBy('sort_order','asc')->get();
        
        $categories = Category::has('services')->featured()->get();
        return view('index', compact('sliders','categories'));
    }
}
