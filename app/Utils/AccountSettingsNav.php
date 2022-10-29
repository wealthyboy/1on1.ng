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
                'link' => '/account/create'
            ],
            'Change Password' => [
                'icon' => 'fa fa-align-center',
                'link' => '/change/password'
            ],
            'Bids' => [
                'icon' => 'fa fa-money',
                'link' => '/bids'
            ],
            'Master Classes' => [
                'icon' => 'fa fa-graduation-cap',
                'link' => '/classes'
            ],
            'Shout Outs' => [
                'icon' => 'material-symbols-outlined',
                'link' => '/shoutouts'
            ],
            'Wallet' => [
                'icon' => 'fa fa-google-wallet',
                'link' => '/wallets'
            ],
        ];

        return array_merge($nav, $this->data);
    }
}
