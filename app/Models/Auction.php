<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Traits\ColumnFillable;
use App\Traits\ImageFiles;

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
        'ev_date'
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


    public function getTimeAttribute()
    {
        if ($this->end_date->isToday()) {
            return now()->diffInHours($this->end_date);
        }

        return null;
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
