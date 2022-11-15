<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class MasterClassReceipt extends Mailable
{
    use Queueable, SerializesModels;


    public $master_class;


    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($master_class)
    {
        $this->master_class = $master_class;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->subject('Registeration Confirmation')->view('emails.receipt.master_class.index');
    }
}
