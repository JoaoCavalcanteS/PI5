import React, { useState } from "react";
import DataTable from "react-data-table-component";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';

const AvisosAlertas = () => {
  const columns = [
    {
      name: 'Id',
      selector: row => row.id,
      sortable: true
    },
    {
      name: 'Id_condominio',
      selector: row => row.Id_condominio,
      sortable: true
    },
    {
      name: 'Morador',
      selector: row => row.Morador,
      sortable: true
    },
    {
      name: 'Titulo',
      selector: row => row.Titulo,
      sortable: true
    },
    {
      name: 'Texto',
      selector: row => row.Texto,
      sortable: true
    },
    {
      name: 'Data',
      selector: row => new Date(row.Data).toLocaleDateString(), // Formatando a data
      sortable: true
    },
    {
      name: 'Aviso',
      selector: row => row.Aviso,
      sortable: true,
      wrap: true // Permitindo que o texto seja quebrado em várias linhas
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
      Id_condominio: "Condomínio Jardim das Flores",
      Morador: "José",
      Titulo: "Aluguel",
      Texto: "Aluguel de churrasqueira",
      Data: "2024-06-01",
      Aviso: "Preciso alugar a churrasqueira para festa",
    },
    {
      id: 2,
      Id_condominio: "Condomínio Terra Nova",
      Morador: "Maria",
      Titulo: "Reserva de Salão de Festas",
      Texto: "Reserva para aniversário",
      Data: "2024-06-15",
      Aviso: "Quero reservar o salão de festas para o aniversário do meu filho",
    },
    {
      id: 3,
      Id_condominio: "Condomínio Bela Vista",
      Morador: "João",
      Titulo: "Manutenção do Elevador",
      Texto: "Elevador está com problema no botão do 4º andar",
      Data: "2024-07-05",
      Aviso: "Por favor, solicitar manutenção urgente no elevador",
    },
    {
      id: 4,
      Id_condominio: "Condomínio Primavera",
      Morador: "Ana",
      Titulo: "Fechamento da Piscina",
      Texto: "Piscina será fechada para limpeza na próxima semana",
      Data: "2024-06-20",
      Aviso: "Avisando sobre o fechamento temporário da piscina",
    },
    {
      id: 5,
      Id_condominio: "Condomínio Verde Vale",
      Morador: "Carlos",
      Titulo: "Reclamação sobre Vazamento",
      Texto: "Vazamento na torneira do banheiro do bloco A",
      Data: "2024-06-10",
      Aviso: "Reportando problema de vazamento para ser resolvido",
    },
    {
      id: 6,
      Id_condominio: "Condomínio Alto Padrão",
      Morador: "Sandra",
      Titulo: "Aviso sobre Assembleia",
      Texto: "Próxima assembleia será realizada dia 25/06",
      Data: "2024-06-15",
      Aviso: "Lembrando aos condôminos sobre a próxima assembleia",
    },
    {
      id: 7,
      Id_condominio: "Condomínio São Marcos",
      Morador: "Paulo",
      Titulo: "Comunicado de Visita",
      Texto: "Recebendo visita de parentes no final de semana",
      Data: "2024-06-30",
      Aviso: "Informando aos vizinhos sobre a visita de parentes",
    },
    {
      id: 8,
      Id_condominio: "Condomínio Sol Nascente",
      Morador: "Fernanda",
      Titulo: "Aviso sobre Atraso no Pagamento",
      Texto: "Atraso no pagamento da taxa condominial",
      Data: "2024-06-05",
      Aviso: "Comunicando a administração sobre o atraso no pagamento",
    },
    {
      id: 9,
      Id_condominio: "Condomínio Sonhos Dourados",
      Morador: "Roberto",
      Titulo: "Sugestão para Melhorias",
      Texto: "Sugestão para instalação de academia no condomínio",
      Data: "2024-06-25",
      Aviso: "Sugerindo a instalação de uma academia no espaço comum",
    },
    {
      id: 10,
      Id_condominio: "Condomínio Vila Feliz",
      Morador: "Mariana",
      Titulo: "Evento de Confraternização",
      Texto: "Organizando evento de confraternização para o próximo mês",
      Data: "2024-07-10",
      Aviso: "Planejando evento para aproximar os moradores do condomínio",
    },
    {
      id: 11,
      Id_condominio: "Condomínio Mar Azul",
      Morador: "Rafael",
      Titulo: "Alteração de Regras",
      Texto: "Proposta de alteração no regulamento interno",
      Data: "2024-06-20",
      Aviso: "Apresentando proposta de alteração para discussão em assembleia",
    }
  ];

  // Modal de cadastro
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [records, setRecords] = useState(data);

  function handleFilter(event) {
    const newData = data.filter(row => {
      return row.Id_condominio.toLocaleLowerCase().includes(event.target.value.toLocaleLowerCase())
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

  const paginationComponentOptions = {
    rowsPerPageText: 'Filas por página',
    rangeSeparatorText: 'de',
    selectAllRowsItem: true,
    selectAllRowsItemText: 'Todos',
  };

  return (
    <div>
      <h1 style={{ textAlign: 'center' }} >Aviso</h1>
      <Button variant="primary" onClick={handleShow}>
        Cadastrar Alerta
      </Button>
      {/* Modal de abrir o campo de cadastro */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Preencha os dados</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Id Condominio</Form.Label>
              <Form.Control
                type="text"
                placeholder="Condomínio ABC"
                autoFocus
              />
              <Form.Label>Morador</Form.Label>
              <Form.Control
                type="text"
                placeholder="José"
                autoFocus
              />
              <Form.Label>Título</Form.Label>
              <Form.Control
                type="text"
                placeholder="Aluguel de churrasqueira"
                autoFocus
              />
              <Form.Label>Texto</Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Aluguel de churrasqueira para aniversário..."
                name="texto"
                autoFocus
              />
              <Form.Label>Data</Form.Label>
              <Form.Control
                type="date"
                placeholder="01/06/2024"
                autoFocus
              />
              <Form.Label>Aviso</Form.Label>
              <Form.Control
                type="text"
                placeholder="Aluguel"
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

export default AvisosAlertas;
