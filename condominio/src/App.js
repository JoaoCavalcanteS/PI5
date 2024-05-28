import React from "react";
import './App.css';
import Sidebar from "./components/Sidebar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./paginas/Dashboard";
import AvisosAlertas from "./paginas/AvisosAlertas";
import Blocos from "./paginas/Blocos";
import Casa from "./paginas/Casa";
import Estacionamento from "./paginas/Estacionamento";
import Funcao from "./paginas/Funcao";
import Morador from "./paginas/Morador";
import SalaoDeFestas from "./paginas/SalaoDeFestas";
import Visitas from "./paginas/Visitas";
import Funcionario from "./paginas/Funcionario";
import Condominio from "./paginas/Condominio"
import Login from "./paginas/Login"
import CadastrarProp from "./paginas/CadastrarProp"
import EnderecoProp from "./paginas/EnderecoCondo";
import EnderecoCondo from "./paginas/EnderecoCondo";

const App = () => {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/alerta" element={<AvisosAlertas />} />
          <Route path="/bloco" element={<Blocos />} />
          <Route path="/casa" element={<Casa />} />
          <Route path="/estacionamento" element={<Estacionamento />} />
          <Route path="/funcao" element={<Funcao />} />
          <Route path="/morador" element={<Morador />} />
          <Route path="/salao" element={<SalaoDeFestas />} />
          <Route path="/visita" element={<Visitas />} />
          <Route path="/funcionario" element={<Funcionario />} />
          <Route path="/condominio" element={<Condominio />} />
          <Route path="/enderecoCondo" element={<EnderecoCondo />} />
        </Routes>
      </Sidebar>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/cadastrarProp" element={<CadastrarProp />} />
        </Routes>
    </BrowserRouter >
  );
};

export default App;
