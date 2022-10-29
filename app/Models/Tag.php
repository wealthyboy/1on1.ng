<?php

namespace App\Models;

use App\Traits\ColumnFillable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tag extends Model
{
    use HasFactory, ColumnFillable;

     /**
     * Get all of the videos that are assigned this tag.
     */
    public function services()
    {
        return $this->morphedByMany(Service::class, 'taggable');
    }


}
