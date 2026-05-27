<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PerfilController extends Controller
{
    public function index()
    {
        return view('perfil.profile');
    }
        public function login()
    {
        return view('perfil.login');
    }
        public function sign_up()
    {
        return view('perfil.sign_up');
    }
}