import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'));
const Avisos= React.lazy(() => import('./views/Avisos'));
const Logout= React.lazy(() => import('./views/Logout'));



const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  {path: '/avisos', name: 'Avisos', element: Avisos},
  {path: '/logout', name: 'Logout', element: Logout},
]

export default routes;
