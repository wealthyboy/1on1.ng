<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Bid extends Model
{
    use HasFactory;


    public function service()
    {
        return $this->belongsTo(Auction::class);
    }


    public static function getCurrentBid(Auction $auction)
    {
        $data = [];
        $data['current_bid'] = null !== $auction->bids ? $auction->bids()->orderBy('id', 'desc')->sum('price') + $auction->bid_start_price : $service->bid_start_price;
        $data['number_of_bids'] = self::numsize($auction->bids->count());
        return $data;
    }

    public static function numsize($size, $round = 2)
    {
        if ($size) {
            $unit = ['', 'K', 'M', 'G', 'T'];
            return round($size / pow(1000, ($i = floor(log($size, 1000)))), $round) . $unit[$i];
        }

        return 0;
    }
}
