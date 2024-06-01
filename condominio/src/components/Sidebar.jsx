import React, { useState } from "react";
import { FaBars, FaParking, FaTh } from "react-icons/fa";
import { FaHouse, FaPeoplePulling, FaPeopleRoof } from "react-icons/fa6";
import { IoIosAlert } from "react-icons/io";
import { LuPartyPopper } from "react-icons/lu";
import { GrUserManager } from "react-icons/gr";
import { SiHiveBlockchain } from "react-icons/si";
import { NavLink, useLocation } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BsFillHousesFill } from "react-icons/bs";
import { TbPackages } from "react-icons/tb";
import { RiFunctionAddFill } from "react-icons/ri";
import logo from "../images/logo.svg";

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const location = useLocation();

  //Páginas para não aparecer a sidebar
  const shouldRenderSidebar = location.pathname !== "/home"
    && location.pathname !== "/login";

  const menuItems = [
    {
      label: "Gestão",
      items: [
        { path: "/", name: "Dashboard", icon: <FaTh /> },
        { path: "/alerta", name: "Alertas", icon: <IoIosAlert /> },
        { path: "/bloco", name: "Bloco", icon: <SiHiveBlockchain /> },
        { path: "/casa", name: "Casas", icon: <FaHouse /> },
        { path: "/estacionamento", name: "Estacionamento", icon: <FaParking /> },
        { path: "/morador", name: "Morador", icon: <FaPeopleRoof /> },
        { path: "/areaDeLazer", name: "Salão", icon: <LuPartyPopper /> },
      ],
    },
    {
      label: "Dados",
      items: [
        { path: "/visita", name: "Visitas", icon: <FaPeoplePulling /> },
        { path: "/funcionario", name: "Funcionário", icon: <GrUserManager /> },
        { path: "/condominio", name: "Condomínio", icon: <BsFillHousesFill /> },
        { path: "/entregas", name: "Entrega", icon: <TbPackages /> },
        { path: "/funcao", name: "Função", icon: <RiFunctionAddFill /> },
      ],
    },
  ];

  return (
    <div className="d-flex">
      {shouldRenderSidebar && (
        <div style={{ width: isOpen ? "200px" : "50px" }} className="sidebar">
          <div className="top_section">
            {isOpen && (
              <img
                src={logo}
                alt="Logo"
                style={{ display: isOpen ? "block" : "none", width: "50px", height: "auto" }} // Ajuste o tamanho conforme necessário
              />
            )}
            <div style={{ marginLeft: isOpen ? "50px" : "0px" }} className="bars">
              <FaBars onClick={toggle} />
            </div>
          </div>
          {menuItems.map((section, index) => (
            <div key={index}>
              {isOpen && <div className="section-label">{section.label}</div>}
              {section.items.map((item, itemIndex) => (
                <NavLink to={item.path} key={itemIndex} className="link" activeClassName="active">
                  <div className="icon">{item.icon}</div>
                  <div style={{ display: isOpen ? "block" : "none" }} className="link_text">{item.name}</div>
                </NavLink>
              ))}
            </div>
          ))}
        </div>
      )}
      <main>{children}</main>
    </div>
  );
};

export default Sidebar;

