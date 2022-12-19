import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, InertiaLink } from "@inertiajs/inertia-react";
import PacientesTable from "./PacientesTable";
import { Link } from "@inertiajs/inertia-react";

export default function Pacientes(props) {
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={
                <div className="flex justify-between items center">
                    <h2 className="font-black font-sans text-2xl text-gray-800 leading-tight flex items-center">
                        Pacientes
                    </h2>
                    <Link href="/pacientes/create" className="btn-indigo">
                        + Novo paciente
                    </Link>
                </div>
            }
        >
            <Head title="Pacientes" />

            <div className="py-6">
                <div className="bg-white overflow-hidden rounded-lg">
                    <PacientesTable pacientes={props.pacientes} />
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
