<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Traits\ColumnFillable;


class MasterClass extends Model
{
    use HasFactory, ColumnFillable;

    /**
     * Get all of the tags for the post.
     */
    public function categories()
    {
        return $this->morphToMany(Category::class, 'categoryable');
    }


    /**
     * Get all of the tags for the post.
     */
    public function tags()
    {
        return $this->morphToMany(Tag::class, 'taggable');
    }



    public function user()
    {
        return $this->belongsTo(User::class);
    }


    public function service()
    {
        return $this->belongsTo(Service::class);
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


    public function getListingData($collection)
    {

        return  $collection->map(function ($master_class) {
            return [
                "Id" => $master_class->id,
                "Class" => '#' . optional($master_class->service)->name,
                "Price" => '₦' . number_format(optional($master_class->service)->price),
                "Date Added" => $master_class->created_at->format('d-m-y')
            ];
        });
    }
}
