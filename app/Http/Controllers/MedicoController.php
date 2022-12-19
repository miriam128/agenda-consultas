<?php

namespace App\Http\Controllers;


use App\Models\Medico;
use Illuminate\Http\Request;
use Inertia\Inertia;

class MedicoController extends Controller
{
    public function create()
    {
        return Inertia::render('Medicos/Create', []);
    }

    public function index()
    {
        return Inertia::render('Medicos/Index', ['medicos' => Medico::latest()->get()]);
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

        return redirect(route('medicos.index'));
    }

    public function edit(int $medicoId)
    {
        return Inertia::render('Medicos/Edit', ['medico' => Medico::findOrFail($medicoId)], 200);
    }

    public function update(Request $request, int $medicoId)
    {
        $request->validate([
            'nome' => 'required|string|max:60',
            'email' => 'required|string|max:60',
            'telefone' => 'required|string|max:20',
            'endereco' => 'required|string|max:100',
        ]);

        $medico = Medico::findOrFail($medicoId);
        $medico->nome = $request->input('nome');
        $medico->email = $request->input('email');
        $medico->telefone = $request->input('telefone');
        $medico->endereco = $request->input('endereco');
        $medico->save();

        return redirect(route('medico.index'));
    }

    public function destroy(int $medicoId)
    {
        $medico = Medico::findOrFail($medicoId);
        $medico->delete();

        return redirect(route('medicos.index'));
    }
}
