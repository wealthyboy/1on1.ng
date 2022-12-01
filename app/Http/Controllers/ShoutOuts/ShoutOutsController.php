<?php

namespace App\Http\Controllers\ShoutOuts;

use App\DataTable\Table;
use App\Http\Controllers\Controller;
use App\Models\ShoutOut;
use App\Utils\AccountSettingsNav;
use Illuminate\Http\Request;

class ShoutOutsController extends Table
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $nav = (new AccountSettingsNav())->nav();
        $collections = $this->getColumnListings();

        if (request()->ajax()) {
            return response()->json([
                'collections' =>  $collections,
            ]);
        }

        return view('shout_outs.index', compact('nav'));
    }


    public function builder()
    {
        return ShoutOut::query();
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
}
