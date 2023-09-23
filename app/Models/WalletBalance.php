<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class WalletBalance extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
    ];

    public static function deductAmount($input)
    {

        $wallet = new Wallet();
        $wallet->amount = $input['amount'];
        $wallet->user_id = auth()->user()->id;
        $wallet->status = 'Removed';
        $wallet->save();

        $balance = self::where('user_id', auth()->user()->id)->first();
        $balance->amount =  $balance->amount - $input['amount'];
        $balance->save();

        return $balance;
    }
}
