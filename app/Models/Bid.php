<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Bid extends Model
{
    use HasFactory;


    public function service()
    {
        return $this->belongsTo(Service::class);
    }


    public static function getCurrentBid(Service $service)
    {
        $data = [];
        $data['current_bid'] = null !== $service->bids ? $service->bids()->orderBy('id', 'desc')->sum('price') + $service->bid_start_price : $service->bid_start_price;
        $data['number_of_bids'] = self::numsize($service->bids->count());
        return $data;
    }

    public static function numsize($size, $round = 2)
    {
        $unit = ['', 'K', 'M', 'G', 'T'];
        return round($size / pow(1000, ($i = floor(log($size, 1000)))), $round) . $unit[$i];
    }
}
