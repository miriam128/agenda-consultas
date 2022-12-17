import React from "react";
import MUIDataTable from "mui-datatables";

const columns = [
    { name: "id", label: "#", options: { filter: true, sort: true } },
    { name: "nome", label: "Nome", options: { filter: true, sort: true } },
    { name: "email", label: "E-mail", options: { filter: true, sort: true } },
    {
        name: "telefone",
        label: "Telefone",
        options: { filter: true, sort: false },
    },
    {
        name: "endereco",
        label: "Endereço",
        options: { filter: true, sort: false },
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
export default function PacientesTable(props) {
    const data = props.pacientes;
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
