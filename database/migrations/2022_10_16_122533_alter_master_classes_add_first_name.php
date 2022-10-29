<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AlterMasterClassesAddFirstName extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('master_classes', function (Blueprint $table) {
            $table->integer('celebrity_id')->nullable()->change();
            $table->string('first_name')->nullable();
            $table->string('last_name')->nullable();
            $table->string('email')->nullable();
            $table->string('phone')->nullable();
            $table->integer('service_id')->nullable();
            $table->integer('user_id')->nullable();
            $table->string('uuid')->nullable();

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('master_classes', function (Blueprint $table) {
            //
        });
    }
}
