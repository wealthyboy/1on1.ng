<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Traits\ColumnFillable;
use App\Traits\ImageFiles;
use Carbon\Carbon;

class Auction extends Model
{
    use HasFactory, ColumnFillable, ImageFiles;


    public $casts = [
        'start_date' => 'datetime',
        'end_date' => 'datetime',
        'event_date' => 'datetime',

    ];


    public $appends = [
        'image_to_show',
        'url',
        'days_left',
        'ev_date',
        'time_left',
        'latest_price'
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

    public function getLatestPriceAttribute()
    {
        $price = Bid::where('auction_id', $this->id)->sum('price');

        if ($price) {
            return $price;
        }

        return $this->bid_start_price;
    }

    public function celebrity()
    {
        return $this->belongsTo(Celebrity::class);
    }


    public function getTimeLeftAttribute()
    {
        $time = Carbon::parse('12:00 AM');
        return $time->diffInHours($this->end_date->format('H:i'));
    }


    public function getEvDateAttribute()
    {
        return $this->event_date->format('Y-M-D');
    }


    public function getDaysLeftAttribute()
    {
        return $this->start_date->diffInDays($this->end_date);
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
