<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::group(['prefix' => 'admin'], function () {

    Route::get('/', 'Admin\HomeCtrl@index')->name('admin_home');
    Route::get('/maintainance/mode', 'Admin\Live\LiveController@index')->name('maintainance');
    Route::get('live', 'Admin\Live\LiveController@activate');
    Route::get('activities', 'Admin\Activity\ActivityController@index');
    Route::get('reports', 'Admin\Account\AccountsController@index');
    Route::get('account/filter', 'Admin\Account\AccountsController@index')->name('filter_sales');
    Route::resource('customers', 'Admin\Customers\CustomersController', ['name' => 'customers']);
    Route::get('orders/invoice/{id}', 'Admin\Orders\OrdersController@invoice')->name('order.invoice');
    Route::get('orders/dispatch/{id}', 'Admin\Orders\OrdersController@dispatchNote')->name('order.dispatch.note');
    Route::resource('location', 'Admin\Location\LocationController', ['names' => 'location']);
    Route::resource('engines', 'Admin\Engines\EnginesController', ['names' => 'engines']);

    Route::resource('permissions', 'Admin\Permission\PermissionsController', ['names' => 'permissions']);
    Route::resource('celebrities', 'Admin\Celeb\CelebrityController', ['names' => 'celebrities']);
    Route::resource('auctions', 'Admin\Auction\AuctionsController', ['names' => 'auctions']);
    Route::resource('masterclass', 'Admin\MasterClass\MasterClassController', ['names' => 'masterclass']);
    Route::resource('shoutouts', 'Admin\ShoutOut\ShoutOutController', ['names' => 'shoutouts']);
    Route::resource('tags', 'Admin\Tags\TagsController', ['names' => 'tags']);
    Route::resource('faqs', 'Admin\Faqs\FaqsController', ['names' => 'admin.faqs']);


    Route::post('upload/image', 'Admin\Image\ImagesController@store');
    Route::post('delete/image', 'Admin\Image\ImagesController@undo');
    Route::post('upload', 'Admin\Uploads\UploadsController@store');
    Route::get('delete/upload', 'Admin\Uploads\UploadsController@destroy');
    Route::resource('users',  'Admin\Users\UsersController', ['names' => 'admin.users']);

    Route::resource('banners', 'Admin\Design\BannersController', ['names' => 'banners']);
    Route::resource('pages', 'Admin\Information\InformationController', ['names' => 'pages']);
    Route::resource('settings', 'Admin\Settings\SettingsController', ['names' => 'settings']);

    Route::resource('shipping', 'Admin\Shipping\ShippingController', ['names' => 'shipping']);
    Route::resource('location', 'Admin\Location\LocationController', ['names' => 'location']);
    Route::resource('attributes', 'Admin\Attributes\AttributesController', ['names' => 'attributes']);
    Route::resource('bookedauctions', 'Admin\Booking\BookedAuctionController', ['name' => 'admin.booked']);
    Route::resource('bookedclasses', 'Admin\Booking\BookedClassesController', ['names' => 'b.classes']);
    Route::resource('bookedshoutouts', 'Admin\Booking\BookedShoutOutsController', ['names' => 'b.shoutouts']);


    Route::resource('payments', 'Admin\Payments\PaymentController', ['name' => 'payments']);
    Route::resource('rates', 'Admin\CurrencyRates\CurrencyRatesController', ['name' => 'rates']);
    Route::resource('vouchers', 'Admin\Vouchers\VouchersController', ['names' => 'vouchers']);
    Route::resource('products', 'Admin\Product\ProductController', ['names' => 'products']);
    Route::resource('category', 'Admin\Category\CategoryController', ['name' => 'category']);
    Route::post('category/delete/image', 'Admin\Category\CategoryController@undo');
    Route::resource('reviews',  'Admin\Reviews\ReviewsController', ['names' => 'reviews']);
    Route::resource('orders', 'Admin\Orders\OrdersController', ['names' => 'admin.orders']);
    Route::resource('brands', 'Admin\Brand\BrandsController', ['names' => 'brands']);
    Route::resource('promos', 'Admin\Promo\PromoController', ['names' => 'promos']);
    Route::get('promo-text/create/{id}', 'Admin\PromoText\PromoTextController@create')->name('create.promo.text');
    Route::get('promo-text/edit/{id}', 'Admin\PromoText\PromoTextController@edit')->name('edit_promo_text');
    Route::post('promo-text/edit/{id}', 'Admin\PromoText\PromoTextController@update');
    Route::post('promo-text/create/{id}', 'Admin\PromoText\PromoTextController@store');
    Route::get('promo-text/delete/{id}', 'Admin\PromoText\PromoTextController@destroy')->name('delete.promo.text');
    Route::resource('discounts', 'Admin\Discounts\DiscountsController', ['names' => 'discounts']);
});


Auth::routes();

Route::get('/mailable', function () {
    $shout_out = App\Models\ShoutOut::find(1);
    return  new App\Mail\Reciept($shout_out);
});

Route::get('/', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
Route::get('/plans', [App\Http\Controllers\Plans\PlansController::class, 'index'])->name('plans');
Route::get('/subscribe', [App\Http\Controllers\Subscribe\SubscribeController::class, 'index'])->name('subscribe');
Route::get('/checkout', [App\Http\Controllers\Checkout\CheckoutController::class, 'index'])->name('checkout');
Route::get('/buy-now-pay-later', [App\Http\Controllers\BuyNowPayLater\BuyNowPayLaterController::class, 'index'])->name('buy');
Route::get('categories/{category}', 'Services\ServicesController@index');
Route::get('auctions/{category}', 'Auctions\AuctionsController@index');

Route::get('auction/{auction}', 'Auctions\AuctionsController@show');


Route::get('services/{category}/{service}',   'Services\ServicesController@show');

Route::resource('account', 'Account\AccountController', ['names' => 'account']);
Route::get('change/password', 'ChangePassword\ChangePasswordController@index');
Route::post('change/password', 'ChangePassword\ChangePasswordController@changePassword');

Route::get('bids', 'Bids\BidsController@index');
Route::post('bids', 'Bids\BidsController@store');

Route::post('newsletter/signup',              'Api\NewsLetter\NewsLetterController@store');


Route::get('bids/{auction_id}', 'Bids\BidsController@currentBid');

Route::resource('shoutouts', 'ShoutOuts\ShoutOutsController', ['names' => 'shout.outs']);
Route::resource('classes', 'MasterClass\MasterClassController', ['names' => 'master.class']);
Route::get('wallet-balance', 'Wallets\WalletsController@walletBalnce');

Route::resource('wallets', 'Wallets\WalletsController', ['names' => 'wallets']);
Route::get('/broadcast', 'Wallets\WalletsController@b');

Route::post('webhook/payment',     'WebHook\WebHookController@payment');
//Route::post('contact/store',        'Contact\ContactController@store');
Route::post('webhook/github',      'WebHook\WebHookController@gitHub');
