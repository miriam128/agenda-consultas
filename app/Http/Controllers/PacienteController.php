<?php

namespace App\Http\Controllers;

use App\Models\Paciente;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PacienteController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {

        return Inertia::render('Pacientes/Index', ['pacientes' => Paciente::latest()->get()]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {

        return Inertia::render('Pacientes/NovoPaciente', []);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'nome' => 'required|string|max:60',
            'email' => 'required|string|max:60',
            'telefone' => 'required|string|max:20',
            'endereco' => 'required|string|max:100',
        ]);

        // if (Paciente::where('email', $request->input('email'))->doesntExist()) {
        $paciente = new Paciente;
        $paciente->nome = $request->input('nome');
        $paciente->email = $request->input('email');
        $paciente->telefone = $request->input('telefone');
        $paciente->endereco = $request->input('endereco');
        $paciente->save();

        return Inertia::render('Pacientes/Index', ['paciente' => $paciente], 201);
        // } else {


        // }
    }
}
