import React, { useState } from "react";
import DataTable from "react-data-table-component";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';

//tabela feita desse
//https://react-data-table-component.netlify.app/?path=/story/columns-omit-dynamically--omit-dynamically

const Morador = () => {

  const columns = [
    {
      name: 'Id',
      selector: row => row.id,
      sortable: true
    },
    {
      name: 'Nome',
      selector: row => row.nome,
      sortable: true
    },
    {
      name: 'Email',
      selector: row => row.email,
      sortable: true
    },
    {
      name: 'Senha',
      selector: row => row.senha,
      sortable: true
    },
    {
      name: 'Data de Nascimento',
      selector: row => row.dataNascimento,
      sortable: true
    },
    {
      name: 'Casa',
      selector: row => row.casa,
      sortable: true
    },
    {
      name: 'Possui Estacionamneto',
      selector: row => row.estacionamento,
      sortable: true
    },
    {
      name: 'Vaga',
      selector: row => row.vaga,
      sortable: true
    },
    {
      name: 'Ações',
      cell: row => (
        <div>
          <Button variant="primary" onClick={() => handleEdit(row)}>Editar</Button>{' '}
          <Button variant="danger" onClick={() => handleDelete(row.id)}>Excluir</Button>
        </div>
      )
    }

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
    {
      id: 3,
      nome: "Ana",
      email: "ana@example.com",
      senha: "p@ssw0rd",
      dataNascimento: "05-12-1995",
      casa: "Casa 22B",
      estacionamento: "Sim",
      vaga: "A32"
    },
    {
      id: 4,
      nome: 'luciana',
      email: 'luciana@gmail.com',
      senha: 'lulu789',
      dataNascimento: '02-03-1980',
      casa: 'Casa 11',
      estacionamento: 'Sim',
      vaga: 'C18'
    },
    {
      id: 5,
      nome: 'pedro',
      email: 'pedro@example.com',
      senha: 'pedro123',
      dataNascimento: '08-12-1992',
      casa: 'Casa 32',
      estacionamento: 'Sim',
      vaga: 'D67'
    },
    {
      id: 6,
      nome: 'romario',
      email: 'romario@gmail.com',
      senha: '12345',
      dataNascimento: '10-1-2010',
      casa: 'Apartamento 161',
      estacionamento: 'Sim',
      vaga: '155'
    },
    {
      id: 7,
      nome: "Ana",
      email: "ana@example.com",
      senha: "p@ssw0rd",
      dataNascimento: "05-12-1995",
      casa: "Casa 22B",
      estacionamento: "Sim",
      vaga: "A32"
    },
    {
      id: 8,
      nome: 'luciana',
      email: 'luciana@gmail.com',
      senha: 'lulu789',
      dataNascimento: '02-03-1980',
      casa: 'Casa 11',
      estacionamento: 'Sim',
      vaga: 'C18'
    },
    {
      id: 9,
      nome: 'pedro',
      email: 'pedro@example.com',
      senha: 'pedro123',
      dataNascimento: '08-12-1992',
      casa: 'Casa 32',
      estacionamento: 'Sim',
      vaga: 'D67'
    },
    {
      id: 10,
      nome: 'luciana',
      email: 'luciana@gmail.com',
      senha: 'lulu789',
      dataNascimento: '02-03-1980',
      casa: 'Casa 11',
      estacionamento: 'Sim',
      vaga: 'C18'
    },
    {
      id: 11,
      nome: 'pedro',
      email: 'pedro@example.com',
      senha: 'pedro123',
      dataNascimento: '08-12-1992',
      casa: 'Casa 32',
      estacionamento: 'Sim',
      vaga: 'D67'
    }
  ]
  const [records, setRecords] = useState(data);
  function handleFilter(event) {
    const newData = data.filter(row => {
      return row.nome.toLocaleLowerCase().includes(event.target.value.toLocaleLowerCase())

    })
    setRecords(newData)
  }
  function handleEdit(row) {
    // Lógica para editar o registro
    console.log("Editando", row);
  }
  function handleDelete(id) {
    // Lógica para excluir o registro
    console.log("Excluindo", id);
  }
  function handleNovoMorador() {
    // Lógica para adicionar um novo morador
    console.log("Cadastrar novo morador");
  }
  // Modal de cadastro
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const paginationComponentOptions = {
    rowsPerPageText: 'Filas por página',
    rangeSeparatorText: 'de',
    selectAllRowsItem: true,
    selectAllRowsItemText: 'Todos',
  };

  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Cadastrar Morador
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Preencha os dados</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Nome</Form.Label>
              <Form.Control
                type="text"
                placeholder="josé"
                autoFocus
              />
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="jose@example.com"
                autoFocus
              />
              <Form.Label>Senha</Form.Label>
              <Form.Control
                type="password"
                placeholder="jose123"
                autoFocus
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Cadastrar
          </Button>
        </Modal.Footer>
      </Modal> {' '}

      <input type="text" placeholder="Pesquisar..." onChange={handleFilter} />
      <div className="mt-1">
        <DataTable
          columns={columns}
          data={records}
          selectableRows
          fixedHeader
          pagination
          paginationComponentOptions={paginationComponentOptions}
        />
      </div>
    </div>
  );

};

export default Morador;
