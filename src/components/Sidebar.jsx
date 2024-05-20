import React, { useState } from "react";
import { FaBars, FaParking, FaTh } from "react-icons/fa";
import { FaHouse, FaPeoplePulling, FaPeopleRoof } from "react-icons/fa6";
import { IoIosAlert } from "react-icons/io";
import { LuPartyPopper } from "react-icons/lu";
import { GrUserManager } from "react-icons/gr";
import { SiHiveBlockchain } from "react-icons/si";
import { NavLink } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BsFillHousesFill } from "react-icons/bs";

//icons https://react-icons.github.io/react-icons/

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const menuItem = [
    {
      path: "/",
      name: "Dashboard",
      icon: <FaTh />
    },
    {
      path: "/alerta",
      name: "Alertas",
      icon: <IoIosAlert />
    },
    {
      path: "/bloco",
      name: "Bloco",
      icon: <SiHiveBlockchain />
    },
    {
      path: "/casa",
      name: "Casas",
      icon: <FaHouse />
    },
    {
      path: "/estacionamento",
      name: "Estacionamento",
      icon: <FaParking />
    },
    {
      path: "/morador",
      name: "Morador",
      icon: <FaPeopleRoof />
    },
    {
      path: "/salao",
      name: "Salão",
      icon: <LuPartyPopper />
    },
    {
      path: "/visita",
      name: "Visitas",
      icon: <FaPeoplePulling />
    },
    {
      path: "/funcionario",
      name: "Funcionário",
      icon: <GrUserManager />
    },
    {
      path: "/condominio",
      name: "Condomínio",
      icon: <BsFillHousesFill />
    },

  ]
  return (
    <div className="d-flex">
      <div style={{ width: isOpen ? "200px" : "50px" }} className="sidebar">
        <div className="top_section">
          <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">Logo</h1>
          <div style={{ marginLeft: isOpen ? "50px" : "0px" }} className="bars">
            <FaBars onClick={toggle} />
          </div>
        </div>
        {
          menuItem.map((item, index) => (
            <NavLink to={item.path} key={index} className="link" activeclassName="active">
              <div className="icon">{item.icon}</div>
              <div style={{ display: isOpen ? "block" : "none" }} className="link_text">{item.name}</div>
            </NavLink>
          ))
        }
      </div>
      <main>{children}</main>
    </div>
  );
};

export default Sidebar;


// import React, { useState } from "react";
// import { NavLink } from "react-router-dom";

// //https://www.devwares.com/docs/contrast/react/navigation/ Nav retirada desse site

// import {
//   CDBSidebar,
//   CDBSidebarContent,
//   CDBSidebarFooter,
//   CDBSidebarHeader,
//   CDBSidebarMenu,
//   CDBSidebarMenuItem,
// } from 'cdbreact';

// const Sidebar = () => {
//     return (
//       <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}>
//         <CDBSidebar textColor="#fff" backgroundColor="#333">
//           <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
//             <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>
//               Condomínio
//             </a>
//           </CDBSidebarHeader>

//           <CDBSidebarContent className="sidebar-content">
//             <CDBSidebarMenu>
//               <NavLink exact to="/" activeClassName="activeClicked">
//                 <CDBSidebarMenuItem icon="columns">Dashboard</CDBSidebarMenuItem>
//               </NavLink>
//               <NavLink exact to="/alerta" activeClassName="activeClicked">
//                 <CDBSidebarMenuItem icon="table">Alertas</CDBSidebarMenuItem>
//               </NavLink>
//               <NavLink exact to="/bloco" activeClassName="activeClicked">
//                 <CDBSidebarMenuItem icon="user">Bloco</CDBSidebarMenuItem>
//               </NavLink>
//               <NavLink exact to="/casa" activeClassName="activeClicked">
//                 <CDBSidebarMenuItem icon="envelope">Casas</CDBSidebarMenuItem>
//               </NavLink>
//               <NavLink exact to="/estacionamento" activeClassName="activeClicked">
//                 <CDBSidebarMenuItem icon="sticky-note">Estacionamento</CDBSidebarMenuItem>
//               </NavLink>
//               <NavLink exact to="/morador" activeClassName="activeClicked">
//                 <CDBSidebarMenuItem icon="chart-line">Morador</CDBSidebarMenuItem>
//               </NavLink>
//               <NavLink exact to="/salao" activeClassName="activeClicked">
//                 <CDBSidebarMenuItem icon="shopping-bag">Salão</CDBSidebarMenuItem>
//               </NavLink>
//               <NavLink exact to="/visita" activeClassName="activeClicked">
//                 <CDBSidebarMenuItem icon="sticky-note">Visita</CDBSidebarMenuItem>
//               </NavLink>
//             </CDBSidebarMenu>
//           </CDBSidebarContent>

//           <CDBSidebarFooter style={{ textAlign: 'center' }}>
//             <div
//               style={{
//                 padding: '20px 5px',
//               }}
//             >
//               Logout
//             </div>
//           </CDBSidebarFooter>
//         </CDBSidebar>
//       </div>
//     );
//   };


// export default Sidebar;

// const Sidebar = () => {

//   return (
//     <div className="">

//     </div>
//   );
// }
// export default Sidebar;