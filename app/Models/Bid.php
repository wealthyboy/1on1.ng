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


    public function auction()
    {
        return $this->belongsTo(Auction::class);
    }


    public static function getCurrentBid(Auction $auction, User $user)
    {
        $data = [];
        $data['current_bid'] = null !== $auction->bids ? $auction->bids()->orderBy('id', 'desc')->sum('price') + $auction->bid_start_price : $auction->bid_start_price;
        $data['number_of_bids'] = self::numsize($auction->bids->count());
        $data['bidder'] = $user->id;
        $data['auction_id'] = $auction->id;

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

    public function getListingData($collection)
    {
        return  $collection->map(function ($bid) {
            return [
                "Auction" =>  optional($bid->auction)->name,
                "Price" => '₦' . $bid->price,
                "Date Added" => $bid->created_at->format('d-m-y')
            ];
        });
    }



    public static function getShowData(MasterClass $master_class)
    {
        return [
            "Id" => '#' . $master_class->id,
            "Class" =>  optional($master_class->service)->name,
            "Price" => '₦' . number_format(optional($master_class->service)->price),
            "Uuid" =>  $master_class->uuid,
            "Date Added" => $master_class->created_at->format('d-m-y')
        ];
    }
}
