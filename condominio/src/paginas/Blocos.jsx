import React, { useState } from "react";
import DataTable from "react-data-table-component";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Col";

const Blocos = () => {
  const columns = [
    {
      name: 'Id',
      selector: row => row.id,
      sortable: true
    },
    {
      name: 'Id Condominio',
      selector: row => row.idCondominio,
      sortable: true
    },
    {
      name: 'Descrição',
      selector: row => row.descricao,
      sortable: true
    },
    {
      name: 'Quantas Casas',
      selector: row => row.qtdCasas,
      sortable: true
    },
    {
      name: 'Quantos Andares',
      selector: row => row.qtdAndares,
      sortable: true
    },
    {
      name: 'Divisão',
      selector: row => row.divisao,
      sortable: true
    },
    {
      name: 'Ações',
      cell: row => (
        <div>
          <Button variant="primary" size="sm" onClick={() => handleEdit(row)}>Editar</Button>{' '}
          <Button variant="danger" size="sm" onClick={() => handleDelete(row.id)}>Excluir</Button>
        </div>
      )
    }

  ];
  const data = [

    {
      id: 1,
      idCondominio: 1,
      descricao: "O Bloco A do Condomínio Residencial Sol Nascente é uma torre moderna com apartamentos espaçosos e uma variedade de amenidades para os moradores.",
      qtdCasas: 12,
      qtdAndares: 4,
      divisao: "Primeira divisão"
    },
    {
      id: 2,
      idCondominio: 1,
      descricao: "O Bloco B do Condomínio Residencial Sol Nascente é uma torre contemporânea com unidades residenciais elegantes e áreas de lazer bem projetadas.",
      qtdCasas: 15,
      qtdAndares: 5,
      divisao: "Segunda divisão"
    },
    {
      id: 3,
      idCondominio: 1,
      descricao: "O Bloco C do Condomínio Residencial Sol Nascente é uma torre sofisticada com vistas panorâmicas da cidade e espaços de convivência luxuosos.",
      qtdCasas: 20,
      qtdAndares: 6,
      divisao: "Terceira divisão"
    },
    {
      id: 4,
      idCondominio: 1,
      descricao: "O Bloco D do Condomínio Residencial Sol Nascente oferece uma atmosfera acolhedora com unidades residenciais bem iluminadas e áreas verdes exuberantes.",
      qtdCasas: 18,
      qtdAndares: 7,
      divisao: "Quarta divisão"
    },
    {
      id: 5,
      idCondominio: 1,
      descricao: "O Bloco E do Condomínio Residencial Sol Nascente é uma torre contemporânea com uma variedade de opções de lazer e serviços exclusivos para os moradores.",
      qtdCasas: 22,
      qtdAndares: 8,
      divisao: "Quinta divisão"
    },
    {
      id: 6,
      idCondominio: 1,
      descricao: "O Bloco F do Condomínio Residencial Sol Nascente é uma torre moderna com apartamentos bem distribuídos e uma vista deslumbrante da paisagem urbana.",
      qtdCasas: 16,
      qtdAndares: 9,
      divisao: "Sexta divisão"
    },
    {
      id: 7,
      idCondominio: 1,
      descricao: "O Bloco G do Condomínio Residencial Sol Nascente oferece um estilo de vida exclusivo com áreas de lazer sofisticadas e um ambiente tranquilo e seguro.",
      qtdCasas: 25,
      qtdAndares: 10,
      divisao: "Sétima divisão"
    },
    {
      id: 8,
      idCondominio: 1,
      descricao: "O Bloco H do Condomínio Residencial Sol Nascente é uma torre elegante com unidades residenciais espaçosas e uma infraestrutura completa para os moradores.",
      qtdCasas: 19,
      qtdAndares: 11,
      divisao: "Oitava divisão"
    },
    {
      id: 9,
      idCondominio: 1,
      descricao: "O Bloco I do Condomínio Residencial Sol Nascente oferece uma experiência residencial exclusiva com vistas panorâmicas e instalações de primeira linha.",
      qtdCasas: 21,
      qtdAndares: 12,
      divisao: "Nona divisão"
    },
    {
      id: 10,
      idCondominio: 1,
      descricao: "O Bloco J do Condomínio Residencial Sol Nascente é uma torre contemporânea com um design arrojado e espaços de convivência modernos.",
      qtdCasas: 17,
      qtdAndares: 13,
      divisao: "Décima divisão"
    },
    {
      id: 11,
      idCondominio: 1,
      descricao: "O Bloco K do Condomínio Residencial Sol Nascente oferece uma atmosfera de tranquilidade e requinte, com unidades residenciais bem planejadas e áreas de lazer relaxantes.",
      qtdCasas: 23,
      qtdAndares: 14,
      divisao: "Décima primeira divisão"
    },
  ];

  const [records, setRecords] = useState(data);
  function handleFilter(event) {
    const newData = data.filter(row => {
      return row.descricao.toLocaleLowerCase().includes(event.target.value.toLocaleLowerCase())
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
  function handleNovoBloco() {
    // Lógica para adicionar um novo Bloco
    console.log("Cadastrar novo Bloco");
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
        Cadastrar Bloco
      </Button>
      {/* Modal de abrir o campo de cadastro */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Preencha os dados</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Id condomínio</Form.Label>
              <Form.Control
                type="text"
                placeholder="1"
                autoFocus
              />
              <Form.Label></Form.Label>
              <InputGroup>
                <InputGroup.Text>Descrição</InputGroup.Text>
                <Form.Control as="textarea" aria-label="With textarea" placeholder="O Bloco C do Condomínio..." />
              </InputGroup>
              <Form.Label>Quantas Casas</Form.Label>
              <Form.Control
                type="text"
                placeholder="10"
                autoFocus
              />
              <Form.Label>Quantos Andares</Form.Label>
              <Form.Control
                type="text"
                placeholder="5"
                autoFocus
              />
              <Form.Label>Divisão</Form.Label>
              <Form.Control
                type="text"
                placeholder="Primeira divisão"
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
      {/*Fim do Modal*/}
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
    </div >
  );
};

export default Blocos;
