import React from "react";

import MUIDataTable from "mui-datatables";

const columns = [
    { name: "id", label: "#", options: { filter: true, sort: true } },
    {
        name: "paciente",
        label: "Paciente",
        options: { filter: true, sort: true },
    },
    {
        name: "medico",
        label: "Médico",
        options: { filter: true, sort: true },
    },
    { name: "data", label: "Data", options: { filter: true, sort: true } },
    { name: "hora", label: "Hora", options: { filter: true, sort: true } },
    {
        name: "filialNome",
        label: "Filial",
        options: { filter: true, sort: true },
    },
    {
        name: "endereco",
        label: "Endereço",
        options: { filter: true, sort: true },
    },
];

const options = {
    filterType: "checkbox",
    textLabels: {
        body: {
            noMatch: "Nenhum registro encontrado",
            toolTip: "Ordenar",
        },
        pagination: {
            rowsPerPage: "Registros por página:",
        },
    },
};

export default function AgendamentosTable(props) {
    const data = props.agendamentos;

    return (
        <>
            <MUIDataTable
                title={""}
                data={data}
                columns={columns}
                options={options}
            />
        </>
    );
}
