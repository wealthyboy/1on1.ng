<?php

namespace App\Http\Controllers\Admin\Booking;

use App\DataTable\DataTable;
use App\Models\Category;
use App\Models\Celebrity;
use App\Models\Booking;
use App\Models\ShoutOut;
use Illuminate\Http\Request;


class BookedShoutOutsController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $shout_outs = ShoutOut::paginate(30);
        $collections = $this->getColumnNames($shout_outs);

        return view('admin.bookings.shoutouts.index', compact('collections'));
    }

    protected function getColumnNames($collection)
    {
        return [
            'items' => [
                $collection->map(function (ShoutOut $shout_out) {
                    return [
                        "Id" => '#' . $shout_out->id,
                        "Name" =>  optional($shout_out->service)->name,
                        "Recipient Full Name" => optional($shout_out->user)->fullname(),
                        "Price" => '₦' . number_format($shout_out->price),
                        "Type" => $shout_out->type,
                        "Phone" => $shout_out->recipient_phone,
                        'Date Added' => $shout_out->created_at->format('d-m-y'),
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
                'urls' =>  $collection->map(function (ShoutOut $shout_out) {
                    return [
                        "url" => '/admin/bookedshoutouts/' . optional($shout_out)->id,
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
        $master_class = ShoutOut::find($id);
        $master_class = $this->showData($master_class);
        // dd($master_class);
        return view('admin.bookings.master_class.show', compact('master_class'));
    }


    public function showData($shout_out)
    {
        return [
            'customer' => [
                "Full Name" =>  optional($shout_out->user)->fullname(),
                "Phone Number" => $shout_out->user->phone_number,
                "Email" => $shout_out->user->email,
                "Date Joined" => $shout_out->user->created_at->format('d-m-y')

            ],
            'data' => [
                "Id" => '#' . $shout_out->id,
                "Name" => optional($shout_out->service)->name,
                "Recipient's full name" =>  optional($shout_out->user)->fullname(),
                "Recipient's email" =>  $shout_out->recipient_email,
                "Recipient's phone" =>  $shout_out->recipient_phone,
                "type" => $shout_out->type,
                "Event Date" => $shout_out->event_date,
                "Comment" =>  $shout_out->comment,
                "Price" => '₦' . number_format($shout_out->price),
                "Date Added" => $shout_out->created_at->format('d-m-y'),
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
