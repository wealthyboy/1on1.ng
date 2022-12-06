<?php

namespace App\Http\Controllers\MasterClass;

use App\DataTable\Table;
use App\Http\Controllers\Controller;
use App\Models\MasterClass;
use App\Utils\AccountSettingsNav;
use Illuminate\Http\Request;

class MasterClassController extends Table
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
        return view('master_class.index', compact('nav',));
    }


    public function builder()
    {
        return MasterClass::query();
    }


    public function unique()
    {
        return [
            'show'  => true,
            'right' => false,
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
        //
    }
}
