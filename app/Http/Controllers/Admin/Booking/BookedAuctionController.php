<?php

namespace App\Http\Controllers\Admin\Booking;

use App\Http\Controllers\Controller;
use App\Models\Auction;
use Illuminate\Http\Request;

class BookedAuctionController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */

    public $link = 'bookedshoutouts';


    public function builder()
    {
        return Auction::query();
    }


    public function index()
    {
        $collections = $this->getColumnListings();
        return view('admin.bookings.auctions.index', compact('collections'));
    }


    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $auction = $this->showData($id);
        return view('admin.bookings.auctions.show', compact('auction'));
    }


    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
