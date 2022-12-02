<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Traits\HasChildren;


class Category extends Model
{
    use HasFactory, HasChildren;

    protected $fillable = ['name', 'description', 'slug', 'parent_id', 'sort_order', 'allow'];

    public $appends = [
        'url'
    ];


    /**
     * Get all of the posts that are assigned this tag.
     */
    public function services()
    {
        return $this->morphedByMany(Service::class, 'categoryable');
    }


    /**
     * Get all of the posts that are assigned this tag.
     */
    public function auctions()
    {
        return $this->morphedByMany(Auction::class, 'categoryable');
    }


    /**
     * Get all of the posts that are assigned this tag.
     */
    public function faqs()
    {
        return $this->morphedByMany(Faq::class, 'categoryable');
    }

    /**
     * Get all of the videos that are assigned this tag.
     */
    public function shout_outs()
    {
        return $this->morphedByMany(ShoutOut::class, 'categoryable')->where('type', 'shout_out');;
    }


    /**
     * Get all of the videos that are assigned this tag.
     */
    public function master_clasess()
    {
        return $this->morphedByMany(MasterClass::class, 'categoryable')->where('type', 'master_class');;;
    }


    public function children()
    {
        return $this->hasMany(Category::class, 'parent_id', 'id')->orderBy('sort_order', 'asc');
    }

    public function images()
    {
        return $this->morphOne(Image::class, 'imageable');
    }

    public function products()
    {
        return $this->belongsToMany(Product::class)->where('allow', true);
    }


    public function parent()
    {
        return $this->belongsTo(Category::class, 'parent_id');
    }


    public function getRouteKeyName()
    {
        return 'slug';
    }


    public function link()
    {
        if ($this->type == 'auction') {
            return '/auctions/' . $this->slug;
        }

        return '/categories/' . $this->slug;
    }

    public function getUrlAttribute()
    {
        return $this->link();
    }
}
