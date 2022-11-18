<?php

namespace App\Http\Controllers\MasterClass;

use App\Http\Controllers\Controller;
use App\Models\MasterClass;
use App\Utils\AccountSettingsNav;
use Illuminate\Http\Request;

class MasterClassController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $nav = (new AccountSettingsNav())->nav();
        $pagination = auth()->user()->master_classes()->paginate(4);
        $collections = $this->getColumnNames($pagination);
        $columns = $this->getGetCustomColumnNames();
        if (request()->ajax()) {
            return response([
                'collections' => $this->getColumnNames($pagination),
                'pagination' =>  $pagination
            ]);
        }
        return view('master_class.index', compact('nav', 'collections', 'columns', 'pagination'));
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
            "class",
            "price",
            "start_date",
            "end_date",
            "date_added",
        ];
    }

    protected function getColumnNames($collection)
    {
        return [
            'items' => [
                $collection->map(function (MasterClass $master_class) {
                    return [
                        "id" => $master_class->id,
                        "class" => optional($master_class->service)->name,
                        "price" => optional($master_class->service)->price,
                        "start_date" => optional($master_class->service)->start_date,
                        "end_date" => optional($master_class->service)->end_date,
                        "date_added" => $master_class->created_at->format('d-m-y')
                    ];
                })
            ]
        ];
    }
}
