<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\MedicoController;
use App\Http\Controllers\AgendamentoController;
use App\Http\Controllers\PacienteController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;


/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    //Agendamentos
    Route::get('/novo-agendamento', [AgendamentoController::class, 'create'])->name('agendamentos.create');
    Route::post('/agendamentos', [AgendamentoController::class, 'store'])->name('agendamentos.store');
    Route::get('/', [AgendamentoController::class, 'index'])->name('agendamentos.index');

    //Medicos
    Route::get('/medicos/novo-medico', [MedicoController::class, 'create'])->name('medicos.create');
    Route::post('/medicos', [MedicoController::class, 'store'])->name('medicos.store');
    Route::get('/medicos', [MedicoController::class, 'index'])->name('medicos.index');
    //Pacientes
    Route::get('/pacientes/novo-paciente', [PacienteController::class, 'create'])->name('pacientes.create');
    Route::post('/pacientes', [PacienteController::class, 'store'])->name('pacientes.store');
    Route::get('/pacientes', [PacienteController::class, 'index'])->name('pacientes.index');
});

require __DIR__ . '/auth.php';
