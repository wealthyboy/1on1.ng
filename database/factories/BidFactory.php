<?php

namespace Database\Factories;

use App\Models\Service;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

class BidFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'service_id' => Service::where('type', 'auction')->first()->id,
            'price' => rand(10000, 30000),
            'user_id' => User::all()->random()->id
        ];
    }
}
