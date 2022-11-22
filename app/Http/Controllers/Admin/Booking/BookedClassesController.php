<?php

namespace App\Http\Controllers\Admin\Booking;

use App\Http\Controllers\Controller;
use App\Models\MasterClass;
use Illuminate\Http\Request;

class BookedClassesController extends Controller
{

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $pagination = MasterClass::paginate(2);
        $collections = $this->getColumnNames($pagination);
        return view('admin.bookings.master_class.index', compact('collections', 'pagination'));
    }

    protected function getColumnNames($collection)
    {
        return [
            'items' => [
                $collection->map(function (MasterClass $master_class) {
                    return [
                        "Id" => '#' . $master_class->id,
                        "Class" =>  optional($master_class->service)->name,
                        "Price" => '₦' . number_format($master_class->price),
                        "Date Added" => $master_class->created_at->format('d-m-y')
                    ];
                })
            ],
            'meta' => [
                'show' => true,
                'right' => null,
                'links' => $collection->links(),
                'count' => $collection->count(),
                'total' => $collection->total(),
                'firstItem' => $collection->firstItem(),
                'lastItem' => $collection->lastItem(),
                'numberOfRows' => data_get($collection, 'numberOfRows'),
                'urls' =>  $collection->map(function (MasterClass $master_class) {
                    return [
                        "url" => '/admin/bookedclasses/' . optional($master_class)->id,
                    ];
                })
            ]
        ];
    }


    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $master_class = MasterClass::find($id);
        $master_class = $this->showData($master_class);
        // dd($master_class);
        return view('admin.bookings.master_class.show', compact('master_class'));
    }


    public function showData($master_class)
    {
        return [
            'customer' => [
                "Full Name" =>  optional($master_class->user)->fullname(),
                "Phone Number" => $master_class->user->phone_number,
                "Email" => $master_class->user->email,
                "Date Joined" => $master_class->user->created_at->format('d-m-y')

            ],
            'data' => [
                "Id" => '#' . $master_class->id,
                "Class" =>  optional($master_class->service)->name,
                "Price" => '₦' . number_format($master_class->price),
                "Uuid" => $master_class->uuid,
                "Service" => optional($master_class->service)->name,
                "Date Added" => $master_class->created_at->format('d-m-y')
            ]
        ];
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
