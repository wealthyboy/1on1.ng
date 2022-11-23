<?php

namespace App\Http\Controllers\Admin\Booking;

use App\DataTable\DataTable;
use App\DataTable\Table;
use App\Models\Category;
use App\Models\Celebrity;
use App\Models\Booking;
use App\Models\ShoutOut;
use Illuminate\Http\Request;


class BookedShoutOutsController extends Table
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */

    public $link = 'bookedshoutouts';


    public function builder()
    {
        return ShoutOut::query();
    }


    public function index()
    {
        $collections = $this->getColumnListings();
        return view('admin.bookings.shoutouts.index', compact('collections'));
    }


    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $shout_out = $this->showData($id);
        return view('admin.bookings.shoutouts.show', compact('shout_out'));
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
