<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AlterCategoriesTableAddVideoLink extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('master_classes', function (Blueprint $table) {
            $table->boolean('is_featured')->default(false);
            $table->string('preview_link')->nullable(false);
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
            $table->dropColumn('is_featured','preview_link');
        });
    }
}
