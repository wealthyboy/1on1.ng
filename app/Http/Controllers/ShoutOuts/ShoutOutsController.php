<?php

namespace App\Http\Controllers\ShoutOuts;

use App\Http\Controllers\Controller;
use App\Models\ShoutOut;
use App\Utils\AccountSettingsNav;
use Illuminate\Http\Request;

class ShoutOutsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $nav = (new AccountSettingsNav())->nav();
        $pagination = auth()->user()->shout_outs()->paginate(4);
        $collections = $this->getColumnNames($pagination);
        $columns = $this->getGetCustomColumnNames();

        if (request()->ajax()) {
            return response([
                'collections' => $this->getColumnNames($pagination),
                'pagination' =>  $pagination
            ]);
        }

        return view('shout_outs.index', compact('nav', 'collections', 'columns', 'pagination'));
    }



    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    protected function getGetCustomColumnNames()
    {
        return [
            "id",
            "name",
            "price",
            "full_name",
            "phone",
            "event_date",
            "date_added",
        ];
    }

    protected function getColumnNames($collection)
    {
        return [
            'items' => [
                $collection->map(function (ShoutOut $shout_outs) {
                    return [
                        "id" => $shout_outs->id,
                        "name" => optional($shout_outs->service)->name,
                        "price" => optional($shout_outs)->price,
                        "full_name" => $shout_outs->recipient_first_name . ' ' . $shout_outs->recipient_last_name,
                        "phone" => $shout_outs->recipient_phone,
                        "event_date" => optional($shout_outs->service)->end_date,
                        "date_added" => $shout_outs->created_at->format('d-m-y')
                    ];
                })
            ]
        ];
    }
}
