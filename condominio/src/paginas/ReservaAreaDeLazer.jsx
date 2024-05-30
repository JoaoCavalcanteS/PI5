import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import 'bootstrap/dist/css/bootstrap.min.css';

const ReservaAreaDeLazer = () => {
  const [records, setRecords] = useState([]);
  const [showCadastrar, setShowCadastrar] = useState(false);
  const [showAlterar, setShowAlterar] = useState(false);

  const [newReserva, setNewReserva] = useState({
    bloco: '',
    condominioId:'',
    data:'',
    area:'',
    horarioInicial:'',
    horarioFinal:'',
    moradorId:'',
    participantes:'',
    status:'',
  });
  const [editReserva, setEditReserva] = useState({
    id:'',
    bloco: '',
    condominioId:'',
    data:'',
    area:'',
    horarioInicial:'',
    horarioFinal:'',
    moradorId:'',
    participantes:'',
    status:'',
  });

  const [alertMessage, setAlertMessage] = useState('');
  const [alertVariant, setAlertVariant] = useState('success');
  const [showAlert, setShowAlert] = useState(false);

  const [areas, setAreas] = useState([]);

  const [blocos, setBlocos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/blocos/buscarBlocos")
      .then(response => response.json())
      .then(data => setBlocos(data))
      .catch(error => console.error('Error fetching blocos:', error));
  }, []);

  useEffect(() => {
    if (alertMessage) {
      setShowAlert(true);
      const timer = setTimeout(() => {
        setShowAlert(false);
        setAlertMessage('');
      }, 3000); 
      return () => clearTimeout(timer);
    }
  }, [alertMessage]);

  useEffect(() => {
    buscarReservas();
  }, []);

  const buscarReservas = () => {
    fetch("http://localhost:8080/reserva/buscarReservas")
      .then(response => response.json())
      .then(data => setRecords(data))
      .catch(error => console.error('Erro ao buscar áreas:', error));
  };

  function handleFilter(event) {
    const newData = records.filter(row => {
      return row.data.toLocaleLowerCase().includes(event.target.value.toLocaleLowerCase());
    });
    setRecords(newData);
  }

  const handleNovaReserva = () => {
    setShowCadastrar(true);
  }

  const handleEdit = (row) => {
    setEditReserva(row);
    setShowAlterar(true);
  }


  const handleClose = () => {
    setShowCadastrar(false);
    setNewReserva({
      bloco: '',
      condominioId:'',
      data:'',
      horarioInicial:'',
      horarioFinal:'',
      moradorId:'',
      participantes:'',
    });
    setAlertMessage('');
  }

  const handleCloseAlterar = () => {
    setShowAlterar(false);
    setNewReserva({
      bloco: '',
      condominioId:'',
      data:'',
      horarioInicial:'',
      horarioFinal:'',
      moradorId:'',
      participantes:'',
    });
    setAlertMessage('');
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewReserva(prevState => ({
      ...prevState,
      [name]: value
    }));
  }


  const handleChangeEdit = (e) => {
    const { name, value } = e.target;
    setNewReserva(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  

  const salvar = () => {
    fetch(`http://localhost:8080/reserva/salvar?isAlterar=false`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newReserva)
    })
      .then(response => {
        if (response.ok) {
          setAlertVariant('success');
          setAlertMessage('Reserva cadastrada com sucesso!');
          buscarReservas();
          setShowCadastrar(false); // Fechar modal após o cadastro
        } else {
          setAlertVariant('danger');
          setAlertMessage('Erro ao cadastrar reserva. Por favor, tente novamente.');
          console.error('Erro ao salvar reserva. Status:', response.status);
        }
      })
      .catch(error => {
        setAlertVariant('danger');
        setAlertMessage('Erro ao cadastrar reserva. Por favor, tente novamente.');
        console.error('Erro ao salvar reserva:', error);
        setShowCadastrar(false); // Fechar modal após o erro
      });
  }

  const alterar = () => {
    fetch(`http://localhost:8080/reserva/salvar?isAlterar=true`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(editReserva)
    })
      .then(response => {
        if (response.ok) {
          setAlertVariant('success');
          setAlertMessage('Reserva alterada com sucesso!');
          buscarReservas();
          setShowAlterar(false); // Fechar modal após o cadastro
        } else {
          setAlertVariant('danger');
          setAlertMessage('Erro ao alterar reserva. Por favor, tente novamente.');
          console.error('Erro ao alterar  reserva. Status:', response.status);
        }
      })
      .catch(error => {
        setAlertVariant('danger');
        setAlertMessage('Erro ao alterar reserva. Por favor, tente novamente.');
        console.error('Erro ao alterar o reserva:', error);
      });
  }

  
 
  const excluir = (id) => {
    
    console.log("Excluindo", id);

    fetch(`http://localhost:8080/reserva/excluir?id=${id}`, {
    method: 'DELETE'
  })
    .then(response => {
      if (response.ok) {
        setAlertVariant('success');
        setAlertMessage('Reserva excluída com sucesso!');
        setShowAlert(true);
        buscarReservas(); // Atualizar a lista após a exclusão
      } else {
        setAlertVariant('danger');
        setAlertMessage('Erro ao excluir reserva. Por favor, tente novamente.');
        setShowAlert(true);
      }
    })
    .catch(error => {
      console.error('Erro ao excluir reserva:', error);
      setAlertVariant('danger');
      setAlertMessage('Erro ao excluir reserva. Por favor, tente novamente.');
      setShowAlert(true);
    })
    .finally(() => {
      setShowCadastrar(false);
    });
  }
  

  

  const paginationComponentOptions = {
    rowsPerPageText: 'Filas por página',
    rangeSeparatorText: 'de',
    selectAllRowsItem: true,
    selectAllRowsItemText: 'Todos',
  };

  const columns = [
    {
      name: 'Código',
      selector: row => row.id,
      sortable: true
    },
    {
      name: 'Id Condominio',
      selector: row => row.condominioId,
      sortable: true
    },
    { 
      
      name:'Bloco',
      selector: row => row.bloco,
      sortable: true
    },
    {
     
      name: 'Data',
      selector: row => row.data,
      sortable: true
    },
    {
      name: 'Horário Inicial',
      selector: row => row.horarioInicial,
      sortable: true
    },
    {
      name: 'Horário Final',
      selector: row => row.horarioFinal,
      sortable: true
    },
    {
      name: 'Solicitante',
      selector: row => row.moradorId,
      sortable: true
    },
    {
      name: 'Quantidade de participantes',
      selector: row => row.participantes,
      sortable: true
    },
    {
      name: 'Status',
      selector: row => row.status,
      sortable: true
    },


    {
      name: 'Ações',
      cell: row => (
        <div>
          <Button variant="primary" size="sm" onClick={() => handleEdit(row)}>Editar</Button>{' '}
          <Button variant="danger" size="sm" onClick={() => excluir(row.id)}>Excluir</Button>
        </div>
      )
    }
  ];


  return (
    
    <div>
    {alertMessage && (
      <Alert variant={alertVariant} onClose={() => setAlertMessage('')} dismissible>
        {alertMessage}
      </Alert>
    )}
  <h1 style={{textAlign:'center'}} >Reservas</h1>
      <Button variant="primary" onClick={handleNovaReserva}>
        Cadastrar Reserva
      </Button>
      <Modal show={showCadastrar} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Preencha os dados</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
          <Form.Group controlId="formBLoco">
        <Form.Label>Bloco</Form.Label>
        <Form.Control
          as="select"
          name="bloco"
          value={newReserva.bloco}
          onChange={handleChangeEdit}
        >
          <option value="">Selecione um bloco</option>
          {blocos.map(bloco => (
            <option key={bloco.id} value={bloco.id}>
              {bloco.descricao}
            </option>
          ))}
        </Form.Control>
      
      </Form.Group>
     
            <Form.Group controlId="formCpf">
              <Form.Label>Data da reserva</Form.Label>
              <Form.Control 
                type="date" 
                name="cpfCnpj"
                value={newReserva.data}
                onChange={handleChange}
              /> 
            </Form.Group>
            <Form.Group controlId="formBLoco">
        <Form.Label>Bloco</Form.Label>
        <Form.Control
          as="select"
          name="bloco"
          value={newReserva.bloco}
          onChange={handleChangeEdit}
        >
          <option value="">Selecione a área</option>
          {blocos.map(bloco => (
            <option key={bloco.id} value={bloco.id}>
              {bloco.descricao}
            </option>
          ))}
        </Form.Control>
      </Form.Group>
            <Form.Group controlId="formInicio">
              <Form.Label>Horário Inicial</Form.Label>
              <Form.Control 
                type="time" 
                value={newReserva.horarioInicial}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formFinal">
              <Form.Label>Horário Final</Form.Label>
              <Form.Control 
                type="time" 
                value={newReserva.horarioFinal}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formNome">
              <Form.Label>Morador</Form.Label>
              <Form.Control 
                type="time" 
                value={newReserva.moradorId}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formNome">
              <Form.Label>Quantidade de Participantes</Form.Label>
              <Form.Control 
                type="number" 
                value={newReserva.participantes}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formStatus">
        <Form.Label>Status</Form.Label>
        <div>
          <Form.Check
            type="radio"
            label="Não Confirmado"
            name="status"
            value={0}
            checked={newReserva.status === 0}
            onChange={handleChange}
          />
          <Form.Check
            type="radio"
            label="Em Análise"
            name="status"
            value={1}
            checked={newReserva.status === 1}
            onChange={handleChange}
          />
          <Form.Check
            type="radio"
            label="Confirmado"
            name="status"
            value={2}
            checked={newReserva.status === 2}
            onChange={handleChange}
          />
        </div>
      </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
<Button variant="secondary" onClick={handleClose}>
Cancelar
</Button>
<Button variant="primary" onClick={salvar}>
Cadastrar
</Button>
</Modal.Footer>
</Modal>

<Modal show={showAlterar} onHide={handleCloseAlterar}>
        <Modal.Header closeButton>
          <Modal.Title>Alterar Morador</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
          <Form.Group controlId="formBLoco">
        <Form.Label>Bloco</Form.Label>
        <Form.Control
          as="select"
          name="bloco"
          value={editReserva.bloco}
          onChange={handleChangeEdit}
        >
          <option value="">Selecione um bloco</option>
          {blocos.map(bloco => (
            <option key={bloco.id} value={bloco.id}>
              {bloco.descricao}
            </option>
          ))}
        </Form.Control>
      
      </Form.Group>
     
            <Form.Group controlId="formCpf">
              <Form.Label>Data da reserva</Form.Label>
              <Form.Control 
                type="date" 
                name="cpfCnpj"
                value={editReserva.data}
                onChange={handleChangeEdit}
              /> 
            </Form.Group>
            <Form.Group controlId="formBLoco">
        <Form.Label>Bloco</Form.Label>
        <Form.Control
          as="select"
          name="bloco"
          value={editReserva.bloco}
          onChange={handleChangeEdit}
        >
          <option value="">Selecione a área</option>
          {blocos.map(bloco => (
            <option key={bloco.id} value={bloco.id}>
              {bloco.descricao}
            </option>
          ))}
        </Form.Control>
      </Form.Group>
            <Form.Group controlId="formInicio">
              <Form.Label>Horário Inicial</Form.Label>
              <Form.Control 
                type="time" 
                value={editReserva.horarioInicial}
                onChange={handleChangeEdit}
              />
            </Form.Group>
            <Form.Group controlId="formFinal">
              <Form.Label>Horário Final</Form.Label>
              <Form.Control 
                type="time" 
                value={editReserva.horarioFinal}
                onChange={handleChangeEdit}
              />
            </Form.Group>
            <Form.Group controlId="formNome">
              <Form.Label>Morador</Form.Label>
              <Form.Control 
                type="text" 
                value={editReserva.moradorId}
                onChange={handleChangeEdit}
              />
            </Form.Group>
            <Form.Group controlId="formNome">
              <Form.Label>Quantidade de Participantes</Form.Label>
              <Form.Control 
                type="number" 
                value={editReserva.participantes}
                onChange={handleChangeEdit}
              />
            </Form.Group>
            <Form.Group controlId="formStatus">
        <Form.Label>Status</Form.Label>
        <div>
          <Form.Check
            type="radio"
            label="Não Confirmado"
            name="status"
            value={0}
            checked={editReserva.status === 0}
            onChange={handleChangeEdit}
          />
          <Form.Check
            type="radio"
            label="Em Análise"
            name="status"
            value={1}
            checked={editReserva.status === 1}
            onChange={handleChangeEdit}
          />
          <Form.Check
            type="radio"
            label="Confirmado"
            name="status"
            value={2}
            checked={editReserva.status === 2}
            onChange={handleChangeEdit}
          />
        </div>
      </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
<Button variant="secondary" onClick={handleCloseAlterar}>
Cancelar
</Button>
<Button variant="primary" onClick={alterar}>
Alterar
</Button>
</Modal.Footer>
</Modal>
<input type="text" style={{marginLeft:'75%'}} placeholder="Pesquisar..." onChange={handleFilter} />
<div className="mt-1">
  {records.length === 0 ? (
    <h6 className="row align-items-center mb-3">Não há dados disponíveis.</h6>
  ) : (
    <DataTable
      columns={columns}
      data={records}
      selectableRows
      fixedHeader
      pagination
      paginationComponentOptions={paginationComponentOptions}
    />
  )}
</div>
</div>
);
};

export default ReservaAreaDeLazer;
