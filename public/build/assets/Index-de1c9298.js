import{a,j as e,L as i,H as s}from"./app-e488d326.js";import{A as n}from"./AuthenticatedLayout-38745a65.js";import r from"./PacientesTable-ba33c236.js";import"./ApplicationLogo-e9609194.js";import"./transition-9d8f5c34.js";import"./index-e33d80b3.js";function f(t){return a(n,{auth:t.auth,errors:t.errors,header:a("div",{className:"flex justify-between items center",children:[e("h2",{className:"font-black font-sans text-2xl text-gray-800 leading-tight flex items-center",children:"Pacientes"}),e(i,{href:"/pacientes/create",className:"btn-indigo",children:"+ Novo paciente"})]}),children:[e(s,{title:"Pacientes"}),e("div",{className:"py-6",children:e("div",{className:"bg-white overflow-hidden rounded-lg",children:e(r,{pacientes:t.pacientes})})})]})}export{f as default};