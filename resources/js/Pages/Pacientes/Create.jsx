import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";
import { useForm, Head } from "@inertiajs/inertia-react";
import { Link } from "@inertiajs/inertia-react";

export default function Create(props) {
    const { data, setData, post, processing, reset, errors } = useForm({
        nome: "",
        email: "",
        telefone: "",
        endereco: "",
    });

    const submit = (e) => {
        e.preventDefault();
        post(route("pacientes.store"), {
            onSuccess: () => route("pacientes.index"),
        });
    };

    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={
                <div className="flex justify-between items center">
                    <h2 className="font-black font-sans text-2xl text-gray-800 leading-tight flex items-center">
                        Cadastrar novo paciente
                    </h2>
                </div>
            }
        >
            <Head title="Agendar consulta" />

            <div className="py-6 z-0">
                <div className="bg-white shadow-sm sm:rounded-lg">
                    <div className="mx-auto p-4 sm:p-6 lg:p-8">
                        <div className="bg-yellow-200 h-14 mb-5 flex items-center p-4">
                            <p>
                                Os campos marcados com
                                <span className="text-red-500"> * </span> são de
                                preenchimento obrigatório.
                            </p>
                        </div>
                        <form onSubmit={submit}>
                            <div className="mb-6">
                                <div className="grid grid-flow-col auto-cols gap-4 mb-6">
                                    <div>
                                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                            Nome do(a) paciente(a){" "}
                                            <span className="text-red-500">
                                                {" "}
                                                *{" "}
                                            </span>
                                        </label>
                                        <input
                                            type="text"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            required
                                            onChange={(event) =>
                                                setData(
                                                    "nome",
                                                    event.target.value
                                                )
                                            }
                                        />
                                    </div>
                                    <div>
                                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                            E-mail
                                        </label>
                                        <input
                                            type="email"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            required
                                            onChange={(event) =>
                                                setData(
                                                    "email",
                                                    event.target.value
                                                )
                                            }
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-flow-col auto-cols gap-4">
                                    <div>
                                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                            Telefone
                                        </label>
                                        <input
                                            type="tel"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            required
                                            onChange={(event) =>
                                                setData(
                                                    "telefone",
                                                    event.target.value
                                                )
                                            }
                                        />
                                    </div>
                                    <div>
                                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                            Endereço
                                        </label>
                                        <input
                                            type="text"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            required
                                            onChange={(event) =>
                                                setData(
                                                    "endereco",
                                                    event.target.value
                                                )
                                            }
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="flex w-auto gap-3">
                                <Link
                                    href={route("pacientes.index")}
                                    className="flex items-center gap-1 text-white bg-red-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        className="w-4 h-4"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    Cancelar
                                </Link>
                                <button
                                    type="submit"
                                    className="flex items-center  gap-1 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        className="w-4 h-4"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
                                            clipRule="evenodd"
                                        />
                                    </svg>

                                    <span>Cadastrar</span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
