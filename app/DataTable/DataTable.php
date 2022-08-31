<?php

namespace App\DataTable;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Exception;
use Illuminate\Support\Facades\Schema;
use Illuminate\Http\Resources\Json\ResourceCollection;
use Illuminate\Database\Eloquent\Builder;




abstract class DataTable extends Controller
{
    
    protected $allowCreation;  

    protected $allowDeletion;

    protected $collection;  

    protected $useJson = false;  

    protected $builder;  
    
    protected $indexRoute = null;    


    abstract public function builder();
    
    public function __construct() 
    {

        $builder = $this->builder();

        if (!$builder instanceof Builder) {
           throw new Exception("Entity builder not instance of Builder");
        }

        $this->builder = $builder;
    }


    public function index() 
    {   
        // $response = [
        //     'meta' => $this->getRecords($request),
        //     'data' => [
        //          'table' => $this->builder->getModel()->getTable(),
        //          'displayable' => array_values($this->getDisplayableColumns()),
        //          'updatable' => array_values($this->getUpdatableColumns()),
        //          'custom_columns' => $this->getCustomColumnNames(),
        //          'records' => $this->getRecords($request)->items(),
        //          'allow' => [
        //              'creation' => $this->allowCreation,
        //              'deletion' => $this->allowDeletion
        //          ]
        //      ]
        // ];

        // if (!$this->useJson) {
        //     return view($this->indexRoute, compact('response'));
        // }

        // return response()->json($response);

    }


    public function all(Request $request) 
    {   
        $response = [
            'data' => $this->getRecords($request),
            'meta' => [
                 'table' => $this->builder->getModel()->getTable(),
                 'displayable' => array_values($this->getDisplayableColumns()),
                 'updatable' => array_values($this->getUpdatableColumns()),
                 'custom_columns' => $this->getCustomColumnNames(),
                 'records' => $this->getRecords($request)->items(),
                 'allow' => [
                     'creation' => $this->allowCreation,
                     'deletion' => $this->allowDeletion
                 ]
             ]
        ];

        return $response;
    }

    protected function collectionSearch(ResourceCollection $collection, Request $request)
    {
        $queryParts = $this->resolveQueryParts($request->operator, $request->value);
        return $collection->where($request->column, $queryParts['operator'], $queryParts['value']);
    }


    public function getDisplayableColumns() 
    {   
        return array_diff($this->getDatabaseColumnNames(), $this->builder->getModel()->getHidden());
    }


    protected function getDatabaseColumnNames() 
    {
        return Schema::getColumnListing($this->builder->getModel()->getTable());
    }

    protected function getCustomColumnNames() 
    {
       return [];
    }


    public function getUpdatableColumns() 
    {
        return $this->getDisplayableColumns();
    }

    public function update(Request $request, $id) 
    {
        return $this->builder()->find($id)->update($request->only($this->getUpdatableColumns()));
    }

    protected function getRecords(Request $request)
    {
        $builder = $this->builder;
       // $collection = $this->collection;
        if ($this->hasSearchQuery($request)) {
             $builder = $this->buildSearch($builder, $request);
           // $collection = $this->collectionSearch($collection, $request);
        }
        try {
            return $builder->orderBy('id', 'asc')->select($this->getDisplayableColumns())->paginate(20);
           //return $collection->orderBy('id', 'asc')->select($this->getDisplayableColumns())->paginate($request->limit);
        } catch (QueryException $e) {
            return [];
        }
    }

    protected function hasSearchQuery(Request $request)
    {
        return count(array_filter($request->only(['column', 'operator', 'value']))) === 3;
    }

    protected function buildSearch(Builder $builder, Request $request)
    {
        $queryParts = $this->resolveQueryParts($request->operator, $request->value);
        return $this->builder()->where($request->column, $queryParts['operator'], $queryParts['value']);
    }

    protected function resolveQueryParts($operator, $value){
    
        return Arr::get([
            'equals' => [
                'operator' => '=',
                'value' => $value
            ]
        ], $operator);
    }

}
