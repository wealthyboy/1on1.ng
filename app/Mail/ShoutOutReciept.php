<?php

namespace App\Mail;

use App\Models\ShoutOut;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class ShoutOutReciept extends Mailable
{
    use Queueable, SerializesModels;


    public $shout_out;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct(ShoutOut $shout_out)
    {
        $this->shout_out = $shout_out;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->subject('Shout Out Confirmation')->view('emails.receipt.shout_outs.index');
    }
}
