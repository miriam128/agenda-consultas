<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Paciente extends Model
{
    use HasFactory;

    protected $fillable = ['nome', 'email', 'telefone', 'endereco'];

    protected $table = 'paciente';

    public function agendamentos()
    {
        return $this->hasMany(Agendamento::class, 'paciente_id');
    }
}
