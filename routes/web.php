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
    Route::get('/agendamentos/create', [AgendamentoController::class, 'create'])->name('agendamentos.create');
    Route::get('/agendamentos', [AgendamentoController::class, 'index'])->name('agendamentos.index');
    Route::get('/', [AgendamentoController::class, 'index'])->name('agendamentos.index');
    Route::post('/agendamentos', [AgendamentoController::class, 'store'])->name('agendamentos.store');
    Route::get('/agendamentos/{agendamentoId}/edit', [AgendamentoController::class, 'edit'])->name('agendamentos.edit');
    Route::put('/agendamentos/{agendamentoId}', [AgendamentoController::class, 'update'])->name('agendamentos.update');
    Route::delete('/agendamentos/{agendamentoId}', [AgendamentoController::class, 'destroy'])->name('agendamentos.destroy');

    //Medicos
    Route::get('/medicos/create', [MedicoController::class, 'create'])->name('medicos.create');
    Route::get('/medicos', [MedicoController::class, 'index'])->name('medicos.index');
    Route::post('/medicos', [MedicoController::class, 'store'])->name('medicos.store');
    Route::get('/medicos/{medicoId}/edit', [MedicoController::class, 'edit'])->name('medicos.edit');
    Route::put('/medicos/{medicoId}', [MedicoController::class, 'update'])->name('medicos.update');
    Route::delete('/medicos/{medicoId}', [MedicoController::class, 'destroy'])->name('medicos.destroy');

    //Pacientes
    Route::get('/pacientes/create', [PacienteController::class, 'create'])->name('pacientes.create');
    Route::get('/pacientes', [PacienteController::class, 'index'])->name('pacientes.index');
    Route::post('/pacientes', [PacienteController::class, 'store'])->name('pacientes.store');
    Route::get('/pacientes/{pacienteId}/edit', [PacienteController::class, 'edit'])->name('pacientes.edit');
    Route::put('/pacientes/{pacienteId}', [PacienteController::class, 'update'])->name('pacientes.update');
    Route::delete('/pacientes/{pacienteId}', [PacienteController::class, 'destroy'])->name('pacientes.destroy');

    //Usuarios
    //CRUD foi implementado automaticamente pelo Breeze. Está na pasta Controllers/Auth
});

require __DIR__ . '/auth.php';
