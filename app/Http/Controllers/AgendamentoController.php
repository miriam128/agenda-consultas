<?php

namespace App\Http\Controllers;

use App\Models\Agendamento;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class AgendamentoController extends Controller
{


    public function create()
    {
        $pacientes = DB::table('paciente')->select('id', 'nome')->get();
        $medicos = DB::table('medico')->select('id', 'nome')->get();
        return Inertia::render('Agendamentos/Create', ['pacientes' => $pacientes, 'medicos' => $medicos]);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $agendamentos = Agendamento::join('medico', 'medico.id', '=', 'agendamento.medico_id')
            ->join('paciente', 'paciente.id', '=', 'agendamento.paciente_id')
            ->select(
                'agendamento.id as id',
                'paciente.nome as paciente_nome',
                'medico.nome as medico_nome',
                'agendamento.data as data',
                'agendamento.hora as hora',
                'agendamento.endereco as endereco',
                'agendamento.filial_nome as filial_nome'
            )
            ->latest('agendamento.created_at')
            ->get();



        return Inertia::render('Agendamentos/Index', ['agendamentos' => $agendamentos], 200);
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
        $agendamento->medico_id = (int) $request->input('medicoId');
        $agendamento->paciente_id = (int) $request->input('pacienteId');
        $agendamento->data = $request->input('data');
        $agendamento->hora = $request->input('hora');
        $agendamento->endereco = $request->input('endereco');
        $agendamento->filial_nome = $request->input('filialNome');
        $agendamento->save();

        return redirect(route('agendamentos.index'));
    }

    public function edit(int $agendamentoId)
    {
        $agendamento = Agendamento::join('medico', 'medico.id', '=', 'agendamento.medico_id')
            ->join('paciente', 'paciente.id', '=', 'agendamento.paciente_id')
            ->select(
                'agendamento.id as id',
                'paciente.id as paciente_id',
                'paciente.nome as paciente_nome',
                'medico.id as medico_id',
                'medico.nome as medico_nome',
                'agendamento.data as data',
                'agendamento.hora as hora',
                'agendamento.endereco as endereco',
                'agendamento.filial_nome as filial_nome'
            )
            ->where('agendamento.id', $agendamentoId)
            ->first();

        $pacientes = DB::table('paciente')->select('id', 'nome')->get();
        $medicos = DB::table('medico')->select('id', 'nome')->get();

        return Inertia::render('Agendamentos/Edit', ['agendamento' => $agendamento, 'pacientes' => $pacientes, 'medicos' => $medicos], 200);
    }

    public function update(Request $request, int $agendamentoId)
    {
        $request->validate([
            'pacienteId' => 'required',
            'medicoId' => 'required',
            'data' => 'required',
            'hora' => 'required',
            'endereco' => 'required',
            'filialNome' => 'required',
        ]);

        $agendamento = Agendamento::findOrFail($agendamentoId);
        $agendamento->medico_id = (int) $request->input('medicoId');
        $agendamento->paciente_id = (int) $request->input('pacienteId');
        $agendamento->data = $request->input('data');
        $agendamento->hora = $request->input('hora');
        $agendamento->endereco = $request->input('endereco');
        $agendamento->filial_nome = $request->input('filialNome');
        $agendamento->save();

        return redirect(route('agendamentos.index'));
    }

    public function destroy(int $agendamentoId)
    {
        $agendamento = Agendamento::findOrFail($agendamentoId);
        $agendamento->delete();

        return redirect(route('agendamentos.index'));
    }
}
