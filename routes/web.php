<?php

use App\Http\Controllers\FeedController;
use App\Http\Controllers\PerfilController;
use App\Http\Controllers\MensagemController;
use App\Http\Controllers\ExplorarController;

use Illuminate\Support\Facades\Route;

Route::get('/', [FeedController::class, 'index']);
Route::get('/reels', [FeedController::class, 'reel']);
Route::get('/explore', [ExplorarController::class, 'index']);
Route::get('/messages', [MensagemController::class, 'index']);
Route::get('/perfil', [PerfilController::class, 'index']);
