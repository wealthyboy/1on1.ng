<?php

namespace Database\Seeders;

use App\Models\Bid;
use App\Models\Service;
use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call([
            BidsClassSeeder::class,
            WalletSeeder::class,
        ]);
    }
}
