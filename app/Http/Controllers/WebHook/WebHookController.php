<?php

namespace App\Http\Controllers\WebHook;

use App\Http\Controllers\Controller;
use App\Models\ShoutOut;
use App\Models\MasterClass;
use App\Models\Service;

use Illuminate\Support\Facades\Log;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Models\Wallet;
use App\Models\WalletBalance;
use App\Mail\ShoutOutReciept;

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
            // Log::info($request->data['metadata']['custom_fields']['form']);

            $input =  $request->data['metadata']['custom_fields'][0]['form'];

            if ($input['type'] == 'Wallet') {
                $wallet = new Wallet;
                $wallet->amount = $input['amount'];
                $wallet->user_id = $input['customer_id'];
                $wallet->status = 'Added';
                $wallet->save();

                $balance = WalletBalance::where('user_id', $input['customer_id'])->first();

                if (null !== $balance) {
                    $balance->balance = $balance->balance +  $input['amount'];
                    $balance->save();
                } else {
                    $balance = new WalletBalance;
                    $balance->balance = $input['amount'];
                    $balance->user_id = $input['customer_id'];
                    $balance->save();
                }

                Log::info($balance);
            }

            if ($input['service_type'] == 'shout-out') {

                $service = Service::find($input['service_id']);

                $shout_out = new ShoutOut;
                $shout_out->recipient_first_name = $input['recipient_first_name'];
                $shout_out->recipient_last_name = $input['recipient_last_name'];
                $shout_out->recipient_email = $input['recipient_email'];
                $shout_out->recipient_phone = $input['recipient_phone'];
                $shout_out->service_id = $input['service_id'];
                $shout_out->user_id = $input['user_id'];
                $shout_out->price = $input['price'];
                $shout_out->type = $input['type'];
                $shout_out->comment = $input['comment'];
                $shout_out->event_date = $input['date'];
                $shout_out->invoice = "INV-" . date('Y') . "-" . rand(10000, 39999);
                $shout_out->save();
                Log::info($shout_out);

                try {
                    $when = now()->addMinutes(5);
                    Mail::to('jacob.atam@gmail.com')
                        ->send(new ShoutOutReciept($shout_out));
                } catch (\Throwable $th) {
                    Log::info("Mail error :" . $th);
                }
            }


            if ($input['service_type'] == 'master-class') {
                $master_class = new MasterClass;
                $master_class->first_name = $input['first_name'];
                $master_class->last_name = $input['last_name'];
                $master_class->email = $input['email'];
                $master_class->phone = $input['phone_number'];
                $master_class->service_id = $input['service_id'];
                $master_class->uuid = str_random(6);
                $master_class->user_id = $input['user_id'];
                $master_class->invoice = "INV-" . date('Y') . "-" . rand(10000, 39999);
                $master_class->save();
                Log::info($master_class);
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
