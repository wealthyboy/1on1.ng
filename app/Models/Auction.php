<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Traits\ColumnFillable;
use App\Traits\ImageFiles;

class Auction extends Model
{
    use HasFactory, ColumnFillable, ImageFiles;


    public $appends = [
        'image_to_show',
        'url'
    ];

    public function images()
    {
        return $this->morphMany(Image::class, 'imageable');
    }


    public function link()
    {
        // return '/categories/' . $this->slug;
    }


    public function bids()
    {
        return $this->hasMany(Bid::class);
    }


    public function getUrlAttribute()
    {
        return '/auction/' . $this->slug;
    }


    public function celebrity()
    {
        return $this->belongsTo(Celebrity::class);
    }


    /**
     * Get all of the tags for the post.
     */
    public function categories()
    {
        return $this->morphToMany(Category::class, 'categoryable');
    }

    public function getRouteKeyName()
    {
        return 'slug';
    }
}
