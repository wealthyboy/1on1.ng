<?php

namespace App\Http\Controllers\Api\NewsLetter;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Newsletter;
use App\Services\Newsletter\Contracts\NewsletterContract;
use App\Services\Newsletter\Exceptions\UserAlreadySubscribedException;


class NewsLetterController extends Controller
{

    public $newsletter;


    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        // $this->newsletter = $newsletter;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Product $product)
    {
        $reviews =  $product->reviews()->orderBy('created_at', 'DESC')->paginate(5);
        return ReviewResourceCollection::collection($reviews);
    }


    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request, NewsLetter $newsletter)
    {
        wewewwe
        $this->validate($request, [
            'email' => 'required|email|unique:news_letters',
        ]);

        $news_letter = new Newsletter;
        $news_letter->email = $request->email;
        $news_letter->save();

        //new Review Notification
        //Sign up to mail chimp

        // try {
        //     $mergeVar = ['FNAME' =>$request->fname ,'LNAME' => $request->lname];
        //     $this->newsletter->subscribe(
        //         config('services.mailchimp.list'),
        //         $request->email, $mergeVar
        //     );
        // } catch (UserAlreadySubscribedException $e) {
        // 	return response()->json(
        //         [
        //             'message' => $e->getMessage()
        //         ],200
        //     );
        // }


        return response()->json(
            [
                'message' => 'Thanks for signing up'
            ],
            200
        );
    }
}
