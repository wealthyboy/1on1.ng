<?php

namespace App\Http\Controllers\WebHook;

use App\Http\Controllers\Controller;
use App\Models\ShoutOut;
use Illuminate\Support\Facades\Log;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

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

            // Log::info($request->all());
            Log::info($request->data['metadata']['custom_fields']['form']);

            $input =  $request->data['metadata']['custom_fields']['form'];

            if ($input['service_type'] == 'shout-out') {

                $shout_out = new ShoutOut;
                $shout_out->recipient_first_name = $input['sender_last_name'];
                $shout_out->recipient_last_name = $input['sender_last_name'];
                $shout_out->recipient_email = $input['recipient_email'];
                $shout_out->recipient_phone = $input['recipient_phone'];
                $shout_out->service_id = $input['service_id'];
                $shout_out->user_id = $input['user_id'];
                $shout_out->type = $input['type'];
                $shout_out->comment = $input['comment'];
                $shout_out->event_date = $input['date'];
                $shout_out->save();
                Log::info($shout_out);

                //Mail::to();
            }


            if ($input['service_type'] == 'master-class') {
                $shout_out = new ShoutOut;
                $shout_out->first_name = $input['first_name'];
                $shout_out->last_name = $input['last_name'];
                $shout_out->email = $input['email'];
                $shout_out->phone = $input['phone_number'];
                $shout_out->service_id = $input['service_id'];
                $shout_out->uuid = str_random(6);
                $shout_out->user_id = $input['user_id'];
                $shout_out->save();

                //Mail::to();
            }
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
