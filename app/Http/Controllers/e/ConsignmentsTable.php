<?php

namespace App\Widget\Consignments;

use App\Helpers\Filter;
use App\Models\Consignment;
use App\Models\Product;
use App\Widget\Consignments\Actions\ConsignmentActions;
use App\Widget\Consignments\FilterForm;
use App\Widget\Table;
use Carbon\Carbon;


class ConsignmentsTable extends Table
{
  public function title($filter)
  {
    return 'Consignments';
  }

  public function query($filter)
  {
    $storeId = data_get($filter, 'store_id');
    return Product::searcher($filter);
  }

  public function fields()
  {
    return [
      [
        'key' => 'image',
        'label' => '',
        'sortable' => false,
      ],

      [
        'key' => 'sku',
        'label' => 'Item #',
        'sortable' => false,
      ],
      [
        'key' => 'title',
        'label' => 'Product Title',
        'sortable' => true,
      ],
      [
        'key' => 'type',
        'label' => 'Type',
        'sortable' => true,
      ],

      [
        'key' => 'date_consigned',
        'label' => 'Date Consigned',
        'sortable' => true,
      ],
      [
        'key' => 'consignment_due_date',
        'label' => 'Consignment Due Date',
        'sortable' => true,
      ],
      [
        'key' => 'vendor',
        'label' => 'Vendor',
        'sortable' => true,
      ],
      [
        'key' => 'days_in_stock',
        'label' => 'Days in Stock',
        'sortable' => true,
      ],
    ];
  }

  public function data($filter)
  {
    $storeId = data_get($filter, 'store_id');
    $query = $this->query($filter)->with('images')->with('store.currency')
      ->where('products.store_id', $storeId)
      ->with('type')
      ->select(['products.*', 'product_variants.price']);
    $sortBy = data_get($filter, 'sort_by', 'products.id');
    $sortDirection = data_get($filter, 'sort_direction', 'desc');
    if ($sortBy === 'id') {
      $sortBy = 'products.id';
    }

    $this->data = $query->orderBy($sortBy, $sortDirection)
      ->paginate(Filter::perPage($filter))
      ->withQueryString();

    return [
      'count' => data_get($this->data, 'perPage'),
      'total' => data_get($this->data, 'total'),
      'numberOfRows' => data_get($this->data, 'numberOfRows'),
      'items' => $this->data->map(function (Product $product) {

        $now = Carbon::now();
        $dateOfPurchase = Carbon::parse($product->created_at);
        $diffInDays = $now->diffInDays($dateOfPurchase);
        $sorted = $product->images->sortBy('rank');
        $images = $sorted->values()->all();

        if (!$product->sku) {
          $product->sku = $product->addSku(true);
        }


        return [
          'id' => [
            'data' => $product->id,
          ],
          'image' => [
            'type' => 'slideshow',
            'data' => $images,
            'class' => 'w-24 block text-xs'
          ],
          'price' => [
            'data' => $product->price,
            'class' => 'w-48 block text-xs',
          ],
          'date_consigned' => [
            'data' => $product->price,
            'class' => 'w-48 block text-xs',
          ],
          'consignment_due_date' => [
            'data' => $product->price,
            'class' => 'w-48 block text-xs',
          ],
          'vendor' => [
            'data' => $product->price,
            'class' => 'w-48 block text-xs',
          ],
          'sku' => [
            'type' => 'link',
            'data' => $product->sku,
            'class' => 'w-36 block text-xs',
            'href' => '/admin/products/' . $product->id,
          ],
          'title' => [
            'type' => 'link',
            'has_tags' => true,
            //'tags' => $channelTags,
            'href' => '/admin/products/' . $product->id,
            'data' => $product->title ?? $product->description,
            'class' => 'w-48'
          ],
          'type' => [
            'data' => optional($product->type)->name,
            'class' => 'text-xs w-36'
          ],
          'status' => [
            'data' => 'Is active'
          ],
          'available' => [
            'data' => $product->total_quantity,
            'class' => 'w-24'
          ],
          'date_purchased' => [
            'data' => Carbon::parse($product->created_at)->format('m-d-Y'),
            'class' => 'text-xs w-36'
          ],
          'shipping_cost' => [
            'data' => '',
            'class' => 'w-36'
          ],
          'days_in_stock' => [
            'data' => $diffInDays,
            'class' => 'w-36 block'
          ],
        ];
      })
    ];
  }

  public function hasCheckBox()
  {
    return true;
  }

  public function hasFooter()
  {
    return false;
  }

  public function filter($filter, $filteredData)
  {
    return FilterForm::class;
  }

  public function isSearchable()
  {
    return true;
  }

  public function actions($filter)
  {
    return [
      (new ConsignmentActions())->render($filter)
    ];
  }
}
