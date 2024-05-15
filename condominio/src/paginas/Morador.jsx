import React, { useState } from "react";
import DataTable from "react-data-table-component";

const Morador = () => {
  const columns = [
    {
      name: 'Id',
      selector: row => row.id,
    },
    {
      name: 'Nome',
      selector: row => row.nome,
    },
    {
      name: 'Email',
      selector: row => row.email,
    },
    {
      name: 'Senha',
      selector: row => row.senha,
    },
    {
      name: 'Data de Nascimento',
      selector: row => row.dataNascimento,
    },
    {
      name: 'Casa',
      selector: row => row.casa,
    },
    {
      name: 'Possui Estacionamneto',
      selector: row => row.estacionamento,
    },
    {
      name: 'Vaga',
      selector: row => row.vaga,
    },


  ];

  const data = [
    {
      id: 1,
      nome: 'josé',
      email: 'jose@gmail.com',
      senha: '12345',
      dataNascimento: '10-1-2000',
      casa: 'Apartamento 16',
      estacionamento: 'Sim',
      vaga: '154'
    },
    {
      id: 2,
      nome: 'romario',
      email: 'romario@gmail.com',
      senha: '12345',
      dataNascimento: '10-1-2010',
      casa: 'Apartamento 161',
      estacionamento: 'Sim',
      vaga: '155'
    },
  ]
  return (
    <div>
      <DataTable
        columns={columns}
        data={data}
      />
    </div>
  );

};

export default Morador;
