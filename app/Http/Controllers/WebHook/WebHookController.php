<?php

namespace App\Http\Controllers\WebHook;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Log;

use Illuminate\Http\Request;
// use Illuminate\Support\Facades\Log;
// use App\User;
// use App\Order;
// use App\OrderedProduct;
// use App\Cart;
// use App\Currency;
// use App\Shipping;
// use App\ProductVariation;
// use App\Voucher;
// use App\Mail\OrderReceipt;
// use App\Mail\SendGiftCard;

// use App\Jobs\ReviewProduct;

// use App\SystemSetting;
// use Illuminate\Support\Facades\DB;


class WebHookController extends Controller
{

    public  $settings;

    public function __construct()
    {
        //$this->settings =  Setting::first();
    }


    public function payment(Request $request)
    {


        try {
            Log::info($request->all());
        } catch (\Throwable $th) {
            Log::info("Custom error :" . $th);
        }

        return http_response_code(200);
    }

    public function gitHub()
    {
        $output =  shell_exec('sh /home/forge/1on1.ng/deploy.sh');
        return  $output;
    }
}
