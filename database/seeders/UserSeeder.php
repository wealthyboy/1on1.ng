<?php

namespace Database\Seeders;

use App\Models\Bid;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use App\Models\User;



class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        User::factory(1)->create();
    }
}
