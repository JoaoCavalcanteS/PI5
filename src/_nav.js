import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilBell,
  cilCalculator,
  cilCalendar,
  cilChartPie,
  cilCursor,
  cilDescription,
  cilDrop,
  cilFile,
  cilHome,
  cilLockLocked,
  cilNotes,
  cilPaperclip,
  cilPencil,
  cilPeople,
  cilPuzzle,
  cilRunning,
  cilSpeedometer,
  cilStar,
  cilUser,
  cilWarning,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Mural',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: 'GESTÃO',
  },
  // {
  //   component: CNavItem,
  //   name: 'Avisos',
  //   to: '/avisos',
  //   icon: <CIcon icon={cilWarning} customClassName="nav-icon" />,
  // },
  {
    component: CNavItem,
    name: 'Financeiro',
    to: '/financeiro',
    icon: <CIcon icon={cilFile} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Reservas',
    to: '/reserva',
    icon: <CIcon icon={cilCalendar} customClassName="nav-icon" />,
  },
  // {
  //   component: CNavItem,
  //   name: 'Ocorrências',
  //   to: '/ocorrencias',
  //   icon: <CIcon icon={cilBell} customClassName="nav-icon" />,
  // },
  // {
  //   component: CNavItem,
  //   name: 'Achados e Perdidos',
  //   to: '/achados_e_perdidos',
  //   icon: <CIcon icon={cilLockLocked} customClassName="nav-icon" />,
  // },
  {
    component: CNavTitle,
    name: 'DADOS',
  },
  {
    component: CNavItem,
    name: 'Funcionários',
    to: '/funcionario',
    icon: <CIcon icon={cilPeople} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Unidades',
    to: '/unidade',
    icon: <CIcon icon={cilHome} customClassName="nav-icon" />,
  },
  // {
  //   component: CNavItem,
  //   name: 'Áreas Comuns',
  //   to: '/areas_comuns',
  //   icon: <CIcon icon={cilPaperclip} customClassName="nav-icon" />,
  // },
  {
    component: CNavTitle,
    name: 'CONFIGURAÇÕES',
  },
  {
    component: CNavItem,
    name: 'Meu Perfil',
    to: '/meu_perfil',
    icon: <CIcon icon={cilUser} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Sair',
    to: '/logout',
    icon: <CIcon icon={cilRunning} customClassName="nav-icon" />,
  },


]

export default _nav
