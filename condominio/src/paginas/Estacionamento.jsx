import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import 'bootstrap/dist/css/bootstrap.min.css';

const Estacionamento = () => {
  const [records, setRecords] = useState([]);
  const [showCadastrar, setShowCadastrar] = useState(false);
  const [showAlterar, setShowAlterar] = useState(false);

  const [newEstacionamento, setNewEstacionamento] = useState({
    idCondominio: '',
    vaga:'',
    bloco: '',
    numeroCasa:'',
    ocupado:'',
  });
  const [editEstacionamento, setEditEstacionamento] = useState({
      idCondominio: '',
    vaga:'',
    bloco: '',
    numeroCasa:'',
    ocupado:'',
  });

  const [alertMessage, setAlertMessage] = useState('');
  const [alertVariant, setAlertVariant] = useState('success');
  const [showAlert, setShowAlert] = useState(false);

  const [blocos, setBlocos] = useState([]);

  const [casas, setCasas] = useState([]);

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
    buscarEstacionamento();
  }, []);

  const buscarEstacionamento = () => {
    fetch("http://localhost:8080/estacionamento/buscarEstacionamento")
      .then(response => response.json())
      .then(data => setRecords(data))
      .catch(error => console.error('Erro ao buscar vagas do estacionamento:', error));
  };

  function handleFilter(event) {
    const newData = records.filter(row => {
      return row.bloco.toLocaleLowerCase().includes(event.target.value.toLocaleLowerCase());
    });
    setRecords(newData);
  }

  const handleNovoEstacionamento = () => {
    setShowCadastrar(true);
  }

  const handleEdit = (row) => {
    setEditEstacionamento(row);
    setShowAlterar(true);
  }


  const handleClose = () => {
    setShowCadastrar(false);
    setNewEstacionamento({
      idCondominio: '',
    vaga:'',
    bloco: '',
    numeroCasa:'',
    ocupado:'',
    });
    setAlertMessage('');
  }

  const handleCloseAlterar = () => {
    setShowAlterar(false);
    setNewEstacionamento({
      idCondominio: '',
    vaga:'',
    bloco: '',
    numeroCasa:'',
    ocupado:'',
    });
    setAlertMessage('');
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewEstacionamento(prevState => ({
      ...prevState,
      [name]: value
    }));
  }


  const handleChangeEdit = (e) => {
    const { name, value } = e.target;
    setEditEstacionamento(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  

  const salvar = () => {
    fetch(`http://localhost:8080/estacionamento/salvar?isAlterar=false`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newEstacionamento)
    })
      .then(response => {
        if (response.ok) {
          setAlertVariant('success');
          setAlertMessage('Vaga cadastrada com sucesso!');
          buscarEstacionamento();
          setShowCadastrar(false); // Fechar modal após o cadastro
        } else {
          setAlertVariant('danger');
          setAlertMessage('Erro ao cadastrar vaga. Por favor, tente novamente.');
          setShowCadastrar(false); // Fechar modal após o erro
          console.error('Erro ao salvar o vaga. Status:', response.status);
        }
      })
      .catch(error => {
        setAlertVariant('danger');
        setAlertMessage('Erro ao cadastrar vaga. Por favor, tente novamente.');
        console.error('Erro ao salvar vaga:', error);
        setShowCadastrar(false); // Fechar modal após o erro
      });
  }

  const alterar = () => {
    fetch(`http://localhost:8080/estacionamento/salvar?isAlterar=true`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(editEstacionamento)
    })
      .then(response => {
        if (response.ok) {
          setAlertVariant('success');
          setAlertMessage('Vaga alterada com sucesso!');
          buscarEstacionamento();
          setShowAlterar(false); // Fechar modal após o cadastro
        } else {
          setAlertVariant('danger');
          setAlertMessage('Erro ao alterar vaga. Por favor, tente novamente.');
          setShowAlterar(false); // Fechar modal após o erro
          console.error('Erro ao alterar o vaga. Status:', response.status);
        }
      })
      .catch(error => {
        setAlertVariant('danger');
        setAlertMessage('Erro ao alterar vaga. Por favor, tente novamente.');
        console.error('Erro ao alterar vaga:', error);
        setShowAlterar(false); // Fechar modal após o erro
      });
  }

  
 
  const excluir = (id) => {
    
    console.log("Excluindo", id);

    fetch(`http://localhost:8080/estacionamento/excluir?id=${id}`, {
    method: 'DELETE'
  })
    .then(response => {
      if (response.ok) {
        setAlertVariant('success');
        setAlertMessage('Vaga excluída com sucesso!');
        setShowAlert(true);
        buscarEstacionamento(); // Atualizar a lista após a exclusão
      } else {
        setAlertVariant('danger');
        setAlertMessage('Erro ao excluir vaga. Por favor, tente novamente.');
        setShowAlert(true);
      }
    })
    .catch(error => {
      console.error('Erro ao excluir vaga:', error);
      setAlertVariant('danger');
      setAlertMessage('Erro ao excluir vaga. Por favor, tente novamente.');
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
      name: 'Vaga',
      selector: row => row.vaga,
      sortable: true
    },
    {
      name: 'Bloco',
      selector: row => row.bloco,
      sortable: true
    },
    {
      name: 'Número da Casa',
      selector: row => row.numeroCasa,
      sortable: true
    },
    {
      name: 'Status',
      selector: row => row.ocupado,
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

  <h1 style={{textAlign:'center'}} >Estacionamento</h1>
      <Button variant="primary" onClick={handleNovoEstacionamento}>
        Cadastrar Vaga
      </Button>
      <Modal show={showCadastrar} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Preencha os dados</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formVaga">
              <Form.Label>Vaga</Form.Label>
              <Form.Control 
                type="text" 
                name="vaga"
                value={newEstacionamento.vaga}
                onChange={handleChange}
                autoFocus 
              />
            </Form.Group>
            <Form.Group controlId="formBLoco">
        <Form.Label>Bloco</Form.Label>
        <Form.Control
          as="select"
          name="bloco"
          value={newEstacionamento.bloco}
          onChange={handleChange}
        >
          <option value="">Selecione um bloco</option>
          {blocos.map(bloco => (
            <option key={bloco.id} value={bloco.id}>
              {bloco.descricao}
            </option>
          ))}
        </Form.Control>
      </Form.Group>
      <Form.Group controlId="formNCasa">
        <Form.Label>Número da casa</Form.Label>
        <Form.Control
          as="select"
          name="nCasa"
          value={newEstacionamento.numeroCasa}
          onChange={handleChange}
        >
          <option value="">Selecione o número da casa</option>
          {casas.map(casa => (
            <option key={casa.numeroCasa} value={casa.numeroCasa}>
              {casa.numeroCasa}
            </option>
          ))}
        </Form.Control>
      </Form.Group>
      <Form.Group controlId="formStatus">
        <Form.Label>Status</Form.Label>
        <div>
          <Form.Check
            type="radio"
            label="Não ocupado"
            name="status"
            value={0}
            checked={newEstacionamento.ocupado === 0}
            onChange={handleChange}
          />
          <Form.Check
            type="radio"
            label="ocupado"
            name="ocupado"
            value={1}
            checked={newEstacionamento.ocupado === 1}
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
          <Modal.Title>Alterar Vaga</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
            <Form.Group controlId="formVaga">
              <Form.Label>Vaga</Form.Label>
              <Form.Control 
                type="text" 
                name="vaga"
                value={editEstacionamento.vaga}
                onChange={handleChangeEdit}
                autoFocus 
              />
            </Form.Group>
            <Form.Group controlId="formBLoco">
        <Form.Label>Bloco</Form.Label>
        <Form.Control
          as="select"
          name="bloco"
          value={editEstacionamento.bloco}
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
      <Form.Group controlId="formNCasa">
        <Form.Label>Número da casa</Form.Label>
        <Form.Control
          as="select"
          name="nCasa"
          value={editEstacionamento.numeroCasa}
          onChange={handleChangeEdit}
        >
          <option value="">Selecione o número da casa</option>
          {casas.map(casa => (
            <option key={casa.numeroCasa} value={casa.numeroCasa}>
              {casa.numeroCasa}
            </option>
          ))}
        </Form.Control>
      </Form.Group>
      <Form.Group controlId="formStatus">
        <Form.Label>Status</Form.Label>
        <div>
          <Form.Check
            type="radio"
            label="Não ocupado"
            name="status"
            value={0}
            checked={editEstacionamento.ocupado === 0}
            onChange={handleChangeEdit}
          />
          <Form.Check
            type="radio"
            label="ocupado"
            name="ocupado"
            value={1}
            checked={editEstacionamento.ocupado === 1}
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

export default Estacionamento;
