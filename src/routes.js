import React from 'react'

const Login= React.lazy(() => import('./views/Login'));
const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'));
const Avisos= React.lazy(() => import('./views/Avisos'));
const Funcionario= React.lazy(() => import('./views/Funcionario'));
const Financeiro= React.lazy(() => import('./views/Financeiro'));
const Reserva= React.lazy(() => import('./views/Reserva'));
const Unidade= React.lazy(() => import('./views/Unidade'));
const Logout= React.lazy(() => import('./views/Logout'));




const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/login', name: 'Login', element: Login },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  {path: '/avisos', name: 'Avisos', element: Avisos},
  { path: '/funcionario', name: 'Funcionario', element: Funcionario },
  { path: '/financeiro', name: 'Financeiro', element: Financeiro },
  { path: '/reserva', name: 'Reserva', element: Reserva },
  { path: '/unidade', name: 'Unidade', element: Unidade },
  {path: '/logout', name: 'Logout', element: Logout},

]

export default routes;
