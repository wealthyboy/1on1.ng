<?php

namespace App\Models;

use App\Filters\ServicesFilter\ServicesFilters;
use App\Traits\ColumnFillable;
use App\Traits\ImageFiles;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;


class Service extends Model
{
    use HasFactory, ColumnFillable, ImageFiles;

    public $appends = [
        'image_to_show',
        'days_left',
        'hours_left',
        'date',
        'start_time',
        'end_time',
        'currency',
        'service_date',
        'url'
    ];

    public $casts = [
        'start_date' => 'datetime',
        'end_date' => 'datetime',
        'event_date' => 'datetime'
    ];

    /**
     * Get all of the tags for the post.
     */
    public function categories()
    {
        return $this->morphToMany(Category::class, 'categoryable');
    }


    public function images()
    {
        return $this->morphMany(Image::class, 'imageable');
    }


    public function shout_out_types()
    {
        return $this->hasMany(ShoutOutType::class);
    }


    public function celebrity()
    {
        return $this->belongsTo(Celebrity::class);
    }


    /**
     * Get all of the tags for the post.
     */
    public function tags()
    {
        return $this->morphToMany(Tag::class, 'taggable');
    }

    public function scopeFilter(Builder $builder, $request)
    {
        return (new ServicesFilters($request))->filter($builder);
    }

    public function getRouteKeyName()
    {
        return 'slug';
    }

    public function getUrlAttribute()
    {
        return '/services/' . optional($this->categories->first())->slug .'/'. $this->slug;
    }

    public function getDateAttribute()
    {
        if (null !== $this->start_date && null !== $this->end_date) {
            return $this->start_date->format('Y-m-d');
        }
    }


    public function getStartTimeAttribute()
    {
        if (null !== $this->start_date && null !== $this->end_date) {
            return $this->start_date->format('H:i');
        }
    }


    public function getCurrencyAttribute()
    {
        return '₦';
    }


    public function getServiceDateAttribute()
    {
        if (null !== $this->event_date) {
            return $this->event_date->format('Y-m-d');
        }
    }

    public function getEndTimeAttribute()
    {
        if (null !== $this->start_date && null !== $this->end_date) {
            return $this->end_date->format('H:i');
        }
    }



    public function getHoursLeftAttribute()
    {
        if (null !== $this->start_date && null !== $this->end_date) {
            if ($this->start_date->isToday()) {
                $today = Carbon::parse(Carbon::parse()->format('H:i:s'));
                $hours = $today->diffInHours($this->end_date->format('H:i:s'));
                return $hours;
            }
        }

        return null;
    }


    public function getDaysLeftAttribute()
    {
        // Same day event
        if (null !== $this->start_date && null !== $this->end_date) {
            if ($this->start_date->format('Y-m-d') == $this->end_date->format('Y-m-d')) {
                return null;
            } else {
                return  $this->start_date->diffInDays($this->end_date);
            }
        }

        return null;
    }
}
