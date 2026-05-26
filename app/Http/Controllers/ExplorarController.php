<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ExplorarController extends Controller
{
    public function index()
    {
        return view('explorar.explore');
    }
}