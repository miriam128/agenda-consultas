<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Medico extends Model
{
    use HasFactory;

    protected $fillable = ['nome', 'email', 'telefone', 'endereco'];

    protected $table = 'medico';

    public function agendamentos()
    {
        return $this->hasMany(Agendamento::class, 'medico_id');
    }
}
