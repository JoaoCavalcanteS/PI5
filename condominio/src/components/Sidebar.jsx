import React, { useState } from "react";
import { FaBars, FaParking, FaTh } from "react-icons/fa";
import { FaHouse, FaPeoplePulling, FaPeopleRoof } from "react-icons/fa6";
import { IoIosAlert } from "react-icons/io";
import { LuPartyPopper } from "react-icons/lu";
import { SiHiveBlockchain } from "react-icons/si";
import { NavLink } from "react-router-dom";

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
    }
  ]
  return (
    <div className="container">
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
