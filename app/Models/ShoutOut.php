<?php

namespace App\Models;

use App\Traits\ColumnFillable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ShoutOut extends Model
{
    use HasFactory, ColumnFillable;

    /**
     * Get all of the tags for the post.
     */
    public function categories()
    {
        return $this->morphToMany(Category::class, 'categoryable');
    }


    public function service()
    {
        return $this->belongsTo(Service::class);
    }

    public static function getShowData(ShoutOut $shout_out)
    {
        return [
            "Id" => '#' . $shout_out->id,
            "Name" => optional($shout_out->service)->name,
            "Recipient's full name" =>  optional($shout_out->user)->fullname(),
            "Recipient's email" =>  $shout_out->recipient_email,
            "Recipient's phone" =>  $shout_out->recipient_phone,
            "Type" => $shout_out->type,
            "Event Date" => $shout_out->event_date,
            "Comment" => $shout_out->comment,
            "Price" => '₦' . number_format($shout_out->price),
            "Date Added" => $shout_out->created_at->format('d-m-y'),
        ];
    }


    public function getListingData($collection)
    {
        return  $collection->map(function ($shout_out) {
            return [
                "Id" => '#' . $shout_out->id,
                "Name" => optional($shout_out->service)->name,
                "Recipient's full name" =>  optional($shout_out->user)->fullname(),
                "Recipient's email" =>  $shout_out->recipient_email,
                "Recipient's phone" =>  $shout_out->recipient_phone,
                "Type" => $shout_out->type,
                "Event Date" => $shout_out->event_date,
                "Comment" =>  $shout_out->comment,
                "Price" => '₦' . number_format($shout_out->price),
                "Date Added" => $shout_out->created_at->format('d-m-y'),
            ];
        });
    }




    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
