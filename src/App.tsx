import { createBrowserRouter, RouterProvider } from "react-router";
import { CredentialsPage } from './Pages';
import { Layout } from "./Pages/layout";
import { Register } from "./Componets/Register";
import { DataOfRegisters } from './Componets/DataOfRegisters';
import { DataOfEmployee } from './Componets/DataOfEmployee';
import { SignUpEmployee } from "./Componets/SignUpEmployee";

import './global.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <CredentialsPage />
  },
  {
    path: '/',
    element: <Layout />,
    children: [
      {path: "/Registrar", element: <Register />},
    ]
  },
  {
    path: '/',
    element: <Layout />,
    children:[
      {path: "/Dados-de-registros", element: <DataOfRegisters />},
    ]
  },
  {
    path: '/',
    element: <Layout/>,
    children: [
      {path: "/Dados-dos-funcionarios", element: <DataOfEmployee />},
    ]
  },
  {
    path: '/',
    element: <Layout/>,
    children: [
      {path: "/Cadastrar-novo-funcionario", element: <SignUpEmployee />},
    ]
  }
]);

export function App() {
  return (<RouterProvider router={router} /> 
)}