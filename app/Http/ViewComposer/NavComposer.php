<?php

namespace App\Http\ViewComposer;

use  App\User;
use Illuminate\View\View;

use Auth;
use App\Models\Information;
use App\Models\Category;
use App\Models\Setting;
use App\Models\Promo;
use App\Utils\AccountSettingsNav;

class   NavComposer
{


	public function compose(View $view)
	{
		$global_categories = Category::parents()->get();
		$footer_info = Information::parents()->get();
		$global_promo = Promo::first();
		$system_settings = Setting::first();
		$wallet_balance =   optional(auth()->user())->wallet_balance ??  '0.00';
		$nav = (new AccountSettingsNav())->nav();

		$currency = '₦';
		//$news_letter_image = PageBanner::where('page_name','newsletter')->first();
		$view->with([
			'footer_info' => $footer_info,
			'global_categories' => $global_categories,
			'system_settings' => $system_settings,
			'global_promo' => $global_promo,
			'currency' => $currency,
			'wallet_balance' => $wallet_balance,
			'nav' => $nav
		]);
	}
}
