<?php

namespace App\Models;

use App\Traits\ColumnFillable;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Schedule extends Model
{
    use HasFactory, ColumnFillable;

    public function scheduleable()
    {
        return $this->morphTo();
    }
}
