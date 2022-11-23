<?php

namespace App\Http\Controllers\Admin\Booking;

use App\DataTable\Table;
use App\Http\Controllers\Controller;
use App\Models\MasterClass;
use Illuminate\Http\Request;

class BookedClassesController extends Table
{

    public $link = 'bookedclasses';


    public function builder()
    {
        return MasterClass::query();
    }

    public function index()
    {
        $collections = $this->getColumnListings();
        return view('admin.bookings.master_class.index', compact('collections'));
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $master_class = $this->showData($id);
        return view('admin.bookings.master_class.show', compact('master_class'));
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
