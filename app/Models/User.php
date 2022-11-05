<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Support\Str;


class User extends Authenticatable
{
	use HasApiTokens, HasFactory, Notifiable;

	/**
	 * The attributes that are mass assignable.
	 *
	 * @var array<int, string>
	 */
	protected $fillable = [
		'name',
		'last_name',
		'email',
		'password',
		'type',

	];

	/**
	 * The attributes that should be hidden for serialization.
	 *
	 * @var array<int, string>
	 */
	protected $hidden = [
		'password',
		'remember_token',
	];

	/**
	 * The attributes that should be cast.
	 *
	 * @var array<string, string>
	 */
	protected $casts = [
		'email_verified_at' => 'datetime',
	];


	public function social()
	{
		return $this->hasMany(UserSocial::class);
	}


	public function activities()
	{
		return $this->hasMany(Activity::class);
	}


	public function bids()
	{
		return $this->hasMany(Bid::class);
	}


	public function master_classes()
	{
		return $this->hasMany(MasterClass::class);
	}


	public function shout_outs()
	{
		return $this->hasMany(ShoutOut::class);
	}


	public function wallets()
	{
		return $this->hasMany(Wallet::class);
	}


	public function wallet_balance()
	{
		return $this->hasOne(WalletBalance::class);
	}


	public function hasSocialLinked($service)
	{
		return (bool) $this->social->where('service', $service)->count();
	}


	public function fullname()
	{
		return ucfirst($this->name) . ' ' . ucfirst($this->last_name);
	}


	public function users_permission()
	{
		return $this->hasOne(UserPermission::class);
	}


	public function scopeCustomers(Builder $builder)
	{
		return $builder->where('type', 'subscriber');
	}

	public function scopeAdmin(Builder $builder)
	{
		return $builder->whereNull('type');
	}


	public static function userHasPermission($num)
	{
		$model = \Auth::user();
		return Str::contains(optional(optional($model->users_permission)->permission)->code, $num) ? true : false;
	}


	public static function canTakeAction($num)
	{
		if (!User::userHasPermission($num)) {
			dd('You dont have access,Permission Denied.');
		}
	}


	public function isAdmin()
	{
		return $this->users_permission  !== null ? true : false;
	}

	public static function IsSuperUser()
	{
		$model = \Auth::user();
		return $model->users_permission->permission->name == 'Owner' ? true : false;
	}

	public function activity()
	{
		return $this->hasMany(Activity::class);
	}
}
