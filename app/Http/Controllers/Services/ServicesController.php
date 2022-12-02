<?php

namespace App\Http\Controllers\Services;

use App\Http\Controllers\Controller;
use App\Http\Resources\ServicesCollection;
use App\Models\Category;
use App\Models\Service;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;
use App\Events\Test;
use App\Events\NewBid;
use App\Models\Faq;

// use Illuminate\Database\Eloquent\Builder;



class ServicesController extends Controller
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
        $services = Service::whereHas('categories', function (Builder  $builder) use ($category) {
            $builder->where('categories.name', $category->name);
        })->latest()->paginate(30);
        $services->load('celebrity');
        $faqs = Faq::all();



        if ($request->ajax()) {
            return new ServicesCollection($services);
        }

        return view('products.index', compact('faqs', 'categories', 'category'));
    }


    public function getFilters($category_attributes)
    {

        $filters = [];
        foreach ($category_attributes as $category_attribute) {
            $filters[$category_attribute->attribute->slug] = CategoryFilter::class;
        }
        return $filters;
    }


    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request, Category $category, Service $service)
    {
        $a = '10 : 52 AM';
        $x = preg_replace('/\s*:\s*/', ':', $a);
        // dd(date("H:i", strtotime($x)));

        $categories = Category::with('parent')->orderBy('name', 'asc')->get();


        $faqs = Faq::all();


        $service->load('shout_out_types', 'celebrity', 'schedules');
        //dd($service->bids()->orderBy('id', 'desc')->sum('price'));
        $user = $request->user();
        return view('products.show', compact('categories', 'faqs', 'user', 'service'));
    }
}
