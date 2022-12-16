import React from "react";
import { Link, Head, InertiaLink } from "@inertiajs/inertia-react";
import logoBelt from "./../../images/BELTSeguros_horiz_roxo.png";

export default function Welcome(props) {
    return (
        <>
            <Head title="Página Inicial" />

            <div className="min-h-screen bg-gray-100">
                <nav className="bg-white border-b border-gray-100">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex justify-between h-16">
                            <Link
                                href="/"
                                className="flex flex-row items-center gap-x-2"
                            >
                                <img src={logoBelt} width={90} height={90} />
                            </Link>

                            <div className="flex items-center">
                                <div className=" relative">
                                    {props.auth.user ? (
                                        <Link
                                            href={route("dashboard")}
                                            className="text-sm text-gray-700 dark:text-gray-500 underline"
                                        >
                                            Dashboard
                                        </Link>
                                    ) : (
                                        <>
                                            <Link
                                                href={route("login")}
                                                className="text-sm text-gray-700 dark:text-gray-500 underline"
                                            >
                                                Login
                                            </Link>

                                            <Link
                                                href={route("register")}
                                                className="ml-4 text-sm text-gray-700 dark:text-gray-500 underline"
                                            >
                                                Cadastrar
                                            </Link>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
                <footer className="absolute bottom-0 w-screen h-10 flex items-center justify-end">
                    <div className="max-w-7xl px-4 sm:px-6 lg:px-8">
                        <p className="text-sm text-gray-700 dark:text-gray-500">
                            Feito por Miriam Amaral
                        </p>
                    </div>
                </footer>
            </div>
        </>
    );
}
