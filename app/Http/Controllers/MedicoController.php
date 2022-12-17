<?php

namespace App\Http\Controllers;


use App\Models\Medico;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class MedicoController extends Controller
{

    public function index()
    {
        return Inertia::render('Medicos/Index', ['medicos' => Medico::latest()->get()]);
    }

    public function create()
    {
        return Inertia::render('Medicos/NovoMedico', []);
    }

    public function store(Request $request)
    {
        $request->validate([
            'nome' => 'required|string|max:60',
            'email' => 'required|string|max:60',
            'telefone' => 'required|string|max:20',
            'endereco' => 'required|string|max:100',
        ]);


        $medico = new Medico;
        $medico->nome = $request->input('nome');
        $medico->email = $request->input('email');
        $medico->telefone = $request->input('telefone');
        $medico->endereco = $request->input('endereco');
        $medico->save();

        return Inertia::render('Medicos/Index', []);
    }
}
