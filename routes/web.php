<?php

use App\Livewire\WelcomePage;
use Illuminate\Support\Facades\Route;
use App\Livewire\MyMagichessBoardPage;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', WelcomePage::class)->name("main");
Route::get('/buy/mymagichess/chessboard', MyMagichessBoardPage::class)->name("buy.mymagichess.chessboard");