<?php

namespace App\Http\Controllers;

use App\Models\Agendamento;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AgendamentoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Inertia::render('Agendamentos/Index', ['agendamentos' => Agendamento::latest()->get()]);
    }

    public function create()
    {
        return Inertia::render('Agendamentos/NovoAgendamento', []);
    }

    public function store(Request $request)
    {
        $request->validate([
            'pacienteId' => 'required',
            'medicoId' => 'required',
            'data' => 'required',
            'hora' => 'required',
            'endereco' => 'required',
            'filialNome' => 'required',
        ]);


        $agendamento = new Agendamento;
        $agendamento->medico_id = $request->input('medicoId');
        $agendamento->paciente_id = $request->input('pacienteId');
        $agendamento->data = $request->input('data');
        $agendamento->hora = $request->input('hora');
        $agendamento->endereco = $request->input('endereco');
        $agendamento->filial_nome = $request->input('filialNome');
        $agendamento->save();

        return Inertia::render('Agendamentos/Index', []);
    }
}
