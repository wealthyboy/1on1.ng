<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AlterShoutOutsTableAddFirstName extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('shout_outs', function (Blueprint $table) {
            $table->string('sender_first_name')->nullable();
            $table->string('sender_last_name')->nullable();
            $table->string('recipient_first_name')->nullable();
            $table->integer('celebrity_id')->nullable()->change();
            $table->string('recipient_last_name')->nullable();
            $table->string('recipient_email')->nullable();
            $table->string('recipient_phone')->nullable();
            $table->integer('service_id')->nullable();
            $table->date('event_date')->nullable();
            $table->integer('user_id')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('shout_outs', function (Blueprint $table) {
            $table->dropColumn('sender_first_name','sender_last_name','recipient_first_name','recipient_last_name','recipient_email','recipient_phone','service_id','event_date');
        });
    }
}
