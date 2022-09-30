<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Traits\HasChildren;


class Category extends Model
{
    use HasFactory, HasChildren;


    /**
     * Get all of the posts that are assigned this tag.
     */
    public function auctions()
    {
        return $this->morphedByMany(Auction::class, 'categoryable');
    }
 
    /**
     * Get all of the videos that are assigned this tag.
     */
    public function shout_outs()
    {
        return $this->morphedByMany(ShoutOut::class, 'categoryable');
    }


    /**
     * Get all of the videos that are assigned this tag.
     */
    public function master_clasess()
    {
        return $this->morphedByMany(MasterClass::class, 'categoryable');
    }




	protected $fillable = ['name','description','slug','parent_id','sort_order','allow'];
	

    public function children()
    {
        return $this->hasMany(Category::class,'parent_id','id')->orderBy('sort_order','asc');
    }

    public function images()
    {
        return $this->morphOne(Image::class, 'imageable');
    }

    public function products()
    {
        return $this->belongsToMany(Product::class)->where('allow',true);
    }


    public function scopeParents($query,$order = null, $desc = null){

        if ($order == null){
           return $query->whereNull('parent_id');
        }
        return $query->whereNull('parent_id')->orderBy($order,$desc);
    }
}
