<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Traits\ColumnFillable;


class MasterClass extends Model
{
    use HasFactory, ColumnFillable;

    // public function categories()
    // {
    //     return $this->belongsToMany(Category::class)->withPivot('category_id');
	// }


    /**
     * Get all of the tags for the post.
     */
    public function categories()
    {
        return $this->morphToMany(Category::class, 'categoryable');
    }
}

