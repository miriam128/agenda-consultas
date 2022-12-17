import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/inertia-react";
import AgendamentosTable from "./AgendamentosTable";
import { Link } from "@inertiajs/inertia-react";

export default function Agendamentos(props) {
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={
                <div className="flex justify-between items center">
                    <h2 className="font-black font-sans text-2xl text-gray-800 leading-tight flex items-center">
                        Agendamentos
                    </h2>
                    <Link href="/novo-agendamento" className="btn-indigo">
                        Agendar consulta
                    </Link>
                </div>
            }
        >
            <Head title="Agendamentos" />

            <div className="py-6">
                <div className="bg-white overflow-hidden rounded-lg">
                    <AgendamentosTable agendamentos={props.agendamentos} />
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
