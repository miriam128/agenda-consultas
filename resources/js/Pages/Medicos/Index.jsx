import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, InertiaLink } from "@inertiajs/inertia-react";
import MedicosTable from "./MedicosTable";
import { Link } from "@inertiajs/inertia-react";

export default function Medicos(props) {
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={
                <div className="flex justify-between items center">
                    <h2 className="font-black font-sans text-2xl text-gray-800 leading-tight flex items-center">
                        Médicos
                    </h2>
                    <Link href="/medicos/create" className="btn-indigo">
                        + Novo Médico
                    </Link>
                </div>
            }
        >
            <Head title="Médicos" />

            <div className="py-6">
                <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                    <MedicosTable medicos={props.medicos} />
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
