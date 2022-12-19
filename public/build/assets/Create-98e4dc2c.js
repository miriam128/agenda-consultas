import{u as s,a as r,j as e,H as n,L as i}from"./app-e488d326.js";import{A as c}from"./AuthenticatedLayout-38745a65.js";import"./ApplicationLogo-e9609194.js";import"./transition-9d8f5c34.js";function k(l){const{data:u,setData:t,post:d,processing:g,reset:b,errors:m}=s({nome:"",email:"",telefone:"",endereco:""}),o=a=>{a.preventDefault(),d(route("pacientes.store"),{onSuccess:()=>route("pacientes.index")})};return r(c,{auth:l.auth,errors:l.errors,header:e("div",{className:"flex justify-between items center",children:e("h2",{className:"font-black font-sans text-2xl text-gray-800 leading-tight flex items-center",children:"Cadastrar novo paciente"})}),children:[e(n,{title:"Agendar consulta"}),e("div",{className:"py-6 z-0",children:e("div",{className:"bg-white shadow-sm sm:rounded-lg",children:r("div",{className:"mx-auto p-4 sm:p-6 lg:p-8",children:[e("div",{className:"bg-yellow-200 h-14 mb-5 flex items-center p-4",children:r("p",{children:["Os campos marcados com",e("span",{className:"text-red-500",children:" * "})," são de preenchimento obrigatório."]})}),r("form",{onSubmit:o,children:[r("div",{className:"mb-6",children:[r("div",{className:"grid grid-flow-col auto-cols gap-4 mb-6",children:[r("div",{children:[r("label",{className:"block mb-2 text-sm font-medium text-gray-900 dark:text-white",children:["Nome do(a) paciente(a)"," ",r("span",{className:"text-red-500",children:[" ","*"," "]})]}),e("input",{type:"text",className:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",required:!0,onChange:a=>t("nome",a.target.value)})]}),r("div",{children:[e("label",{className:"block mb-2 text-sm font-medium text-gray-900 dark:text-white",children:"E-mail"}),e("input",{type:"email",className:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",required:!0,onChange:a=>t("email",a.target.value)})]})]}),r("div",{className:"grid grid-flow-col auto-cols gap-4",children:[r("div",{children:[e("label",{className:"block mb-2 text-sm font-medium text-gray-900 dark:text-white",children:"Telefone"}),e("input",{type:"tel",className:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",required:!0,onChange:a=>t("telefone",a.target.value)})]}),r("div",{children:[e("label",{className:"block mb-2 text-sm font-medium text-gray-900 dark:text-white",children:"Endereço"}),e("input",{type:"text",className:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",required:!0,onChange:a=>t("endereco",a.target.value)})]})]})]}),r("div",{className:"flex w-auto gap-3",children:[r(i,{href:route("pacientes.index"),className:"flex items-center gap-1 text-white bg-red-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",children:[e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",className:"w-4 h-4",children:e("path",{fillRule:"evenodd",d:"M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z",clipRule:"evenodd"})}),"Cancelar"]}),r("button",{type:"submit",className:"flex items-center  gap-1 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",children:[e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",className:"w-4 h-4",children:e("path",{fillRule:"evenodd",d:"M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z",clipRule:"evenodd"})}),e("span",{children:"Cadastrar"})]})]})]})]})})})]})}export{k as default};