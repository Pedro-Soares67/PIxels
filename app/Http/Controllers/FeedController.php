<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class FeedController extends Controller
{
    public function index()
    {
        return view('feed.home');
    }
    public function reel()
    {
        return view('feed.reels');
    }
}
