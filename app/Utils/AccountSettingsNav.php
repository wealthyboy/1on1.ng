<?php

namespace App\Utils;




class AccountSettingsNav
{

    public $data = array();

    public function nav()
    {
        return $nav =  [
            'Account Settings'  => [
                'icon' => 'fa fa-bars',
                'iconText' => null,
                'link' => '/account/create'
            ],
            'Change Password' => [
                'icon' => 'fa fa-align-center',
                'iconText' => null,
                'link' => '/change/password'
            ],
            'Bids' => [
                'icon' => 'fa fa-money',
                'iconText' => null,
                'link' => '/bids'
            ],
            'Master Classes' => [
                'icon' => 'fa fa-graduation-cap',
                'link' => '/classes',
                'iconText' => null,
            ],
            'Shout Outs' => [
                'icon' => 'material-symbols-outlined',
                'iconText' => 'celebration',
                'link' => '/shoutouts'
            ],
            'Wallet' => [
                'icon' => 'fa fa-google-wallet',
                'iconText' => null,
                'link' => '/wallets'
            ],
        ];

        return array_merge($nav, $this->data);
    }
}
