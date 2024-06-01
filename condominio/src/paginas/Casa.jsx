import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import 'bootstrap/dist/css/bootstrap.min.css';

const Casa = () => {
  const [records, setRecords] = useState([]);
  const [showCadastrar, setShowCadastrar] = useState(false);
  const [showAlterar, setShowAlterar] = useState(false);

  const [newCasa, setNewCasa] = useState({
    idCondominio: '',
    numeroCasa:'',
    bloco:'',
    vazia:'',
    moradorId:'',
    aluguel:'',
    telefone:''

  });
  const [editCasa, setEditCasa] = useState({
    idCondominio: '',
    numeroCasa:'',
    bloco:'',
    vazia:'',
    moradorId:'',
    aluguel:'',
    telefone:''

  });

  const [alertMessage, setAlertMessage] = useState('');
  const [alertVariant, setAlertVariant] = useState('success');
  const [showAlert, setShowAlert] = useState(false);

  const [blocos, setBlocos] = useState([]);

  const [moradores, setMoradores] = useState([]);

  const [casas, setCasas] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/blocos/buscarBlocos")
      .then(response => response.json())
      .then(data => setBlocos(data))
      .catch(error => console.error('Error fetching blocos:', error));
  }, []);

  useEffect(() => {
    fetch("http://localhost:8080/Moradores/buscarMoradores")
      .then(response => response.json())
      .then(data => setMoradores(data))
      .catch(error => console.error('Error fetching Moradores:', error));
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
    buscarCasas();
  }, []);

  const buscarCasas = () => {
    fetch("http://localhost:8080/casa/buscarCasas")
      .then(response => response.json())
      .then(data => setRecords(data))
      .catch(error => console.error('Erro ao buscar casas:', error));
  };

  function handleFilter(event) {
    const newData = records.filter(row => {
      return row.bloco.toLocaleLowerCase().includes(event.target.value.toLocaleLowerCase());
    });
    setRecords(newData);
  }

  const handleNovaCasa= () => {
    setShowCadastrar(true);
  }

  const handleEdit = (row) => {
    setEditCasa(row);
    setShowAlterar(true);
  }


  const handleClose = () => {
    setShowCadastrar(false);
    setNewCasa({
      idCondominio: '',
      numeroCasa:'',
      bloco:'',
      vazia:'',
      moradorId:'',
      aluguel:'',
      telefone:''
    });
    setAlertMessage('');
  }

  const handleCloseAlterar = () => {
    setShowAlterar(false);
    setNewCasa({
      idCondominio: '',
      numeroCasa:'',
      bloco:'',
      vazia:'',
      moradorId:'',
      aluguel:'',
      telefone:''
    });
    setAlertMessage('');
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewCasa(prevState => ({
      ...prevState,
      [name]: value
    }));
  }


  const handleChangeEdit = (e) => {
    const { name, value } = e.target;
    setEditCasa(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  

  const salvar = () => {
    fetch(`http://localhost:8080/casa/salvar?isAlterar=false`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newCasa)
    })
      .then(response => {
        if (response.ok) {
          setAlertVariant('success');
          setAlertMessage('Casa cadastrada com sucesso!');
          buscarCasas();
          setShowCadastrar(false); // Fechar modal após o cadastro
        } else {
          setAlertVariant('danger');
          setAlertMessage('Erro ao cadastrar casa. Por favor, tente novamente.');
          setShowCadastrar(false); // Fechar modal após o erro
          console.error('Erro ao salvar o casa. Status:', response.status);
        }
      })
      .catch(error => {
        setAlertVariant('danger');
        setAlertMessage('Erro ao cadastrar casa. Por favor, tente novamente.');
        console.error('Erro ao salvar casa:', error);
        setShowCadastrar(false); // Fechar modal após o erro
      });
  }

  const alterar = () => {
    fetch(`http://localhost:8080/casa/salvar?isAlterar=true`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(editCasa)
    })
      .then(response => {
        if (response.ok) {
          setAlertVariant('success');
          setAlertMessage('Casa alterada com sucesso!');
          buscarCasas();
          setShowAlterar(false); // Fechar modal após o cadastro
        } else {
          setAlertVariant('danger');
          setAlertMessage('Erro ao alterar casa. Por favor, tente novamente.');
          setShowAlterar(false); // Fechar modal após o erro
          console.error('Erro ao alterar o casa. Status:', response.status);
        }
      })
      .catch(error => {
        setAlertVariant('danger');
        setAlertMessage('Erro ao alterar casa. Por favor, tente novamente.');
        console.error('Erro ao alterar casa:', error);
        setShowAlterar(false); // Fechar modal após o erro
      });
  }

  
 
  const excluir = (id) => {
    
    console.log("Excluindo", id);

    fetch(`http://localhost:8080/casa/excluir?id=${id}`, {
    method: 'DELETE'
  })
    .then(response => {
      if (response.ok) {
        setAlertVariant('success');
        setAlertMessage('Casa excluída com sucesso!');
        setShowAlert(true);
        buscarCasas(); // Atualizar a lista após a exclusão
      } else {
        setAlertVariant('danger');
        setAlertMessage('Erro ao excluir casa. Por favor, tente novamente.');
        setShowAlert(true);
      }
    })
    .catch(error => {
      console.error('Erro ao excluir casa:', error);
      setAlertVariant('danger');
      setAlertMessage('Erro ao excluir casa. Por favor, tente novamente.');
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
      name: 'Número da Casa',
      selector: row => row.numeroCasa,
      sortable: true
    },
    {
      name: 'Bloco',
      selector: row => row.bloco,
      sortable: true
    },
    {
      name: 'Proprietário(a)',
      selector: row => row.proprietario,
      sortable: true
    },
    {
      name: 'Aluguel?',
      selector: row => row.aluguel,
      sortable: true
    },
    
    {
      name: 'Ocupada?',
      selector: row => row.vazia,
      sortable: true
    },
    
    {
      name: 'Telefone',
      selector: row => row.telefone,
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
      <Button variant="primary" onClick={handleNovaCasa}>
        Cadastrar Vaga
      </Button>
      <Modal show={showCadastrar} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Preencha os dados</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="num">
              <Form.Label>Número da Casa</Form.Label>
              <Form.Control 
                type="number" 
                name="num"
                value={newCasa.numeroCasa}
                onChange={handleChange}
                autoFocus 
              />
            </Form.Group>
 
            <Form.Group controlId="formBLoco">
        <Form.Label>Bloco</Form.Label>
        <Form.Control
          as="select"
          name="bloco"
          value={newCasa.bloco}
          onChange={handleChange}
        >
          <option value="">Selecione um bloco</option>
          {blocos.map(bloco => (
            <option key={bloco.descricao} value={bloco.descricao}>
              {bloco.descricao}
            </option>
          ))}
        </Form.Control>
      </Form.Group>
      <Form.Group controlId="formStatus">
        <Form.Label>Vazia?</Form.Label>
        <div>
          <Form.Check
            type="radio"
            label="Não"
            name="status"
            value={0}
            checked={newCasa.ocupado === 0}
            onChange={handleChange}
          />
          <Form.Check
            type="radio"
            label="Sim"
            name="ocupado"
            value={1}
            checked={newCasa.ocupado === 1}
            onChange={handleChange}
          />
        </div>
      </Form.Group>
      <Form.Group controlId="formBLoco">
        <Form.Label>Proprietário</Form.Label>
        <Form.Control
          as="select"
          name="bloco"
          value={newCasa.bloco}
          onChange={handleChange}
        >
          <option value="">Selecione um morador</option>
          {moradores.map(morador => (
            <option key={morador.nome} value={morador.nome}>
              {morador.nome}
            </option>
          ))}
        </Form.Control>
      </Form.Group>
      <Form.Group controlId="tel">
              <Form.Label>Telefone</Form.Label>
              <Form.Control 
                type="text" 
                name="tel"
                value={newCasa.telefone}
                onChange={handleChange}
                autoFocus 
              />
            </Form.Group>
      <Form.Group controlId="formaluguel">
        <Form.Label>Aluguel?</Form.Label>
        <div>
          <Form.Check
            type="radio"
            label="Não"
            name="aluguel"
            value={0}
            checked={newCasa.aluguel === 0}
            onChange={handleChange}
          />
          <Form.Check
            type="radio"
            label="Sim"
            name="aluguel"
            value={1}
            checked={newCasa.aluguel === 1}
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
        <Form.Group controlId="num">
              <Form.Label>Número da Casa</Form.Label>
              <Form.Control 
                type="number" 
                name="num"
                value={editCasa.numeroCasa}
                onChange={handleChangeEdit}
                autoFocus 
              />
            </Form.Group>
 
            <Form.Group controlId="formBLoco">
        <Form.Label>Bloco</Form.Label>
        <Form.Control
          as="select"
          name="bloco"
          value={editCasa.bloco}
          onChange={handleChangeEdit}
        >
          <option value="">Selecione um bloco</option>
          {blocos.map(bloco => (
            <option key={bloco.descricao} value={bloco.descricao}>
              {bloco.descricao}
            </option>
          ))}
        </Form.Control>
      </Form.Group>
      <Form.Group controlId="formStatus">
        <Form.Label>Vazia?</Form.Label>
        <div>
          <Form.Check
            type="radio"
            label="Não"
            name="status"
            value={0}
            checked={editCasa.ocupado === 0}
            onChange={handleChangeEdit}
          />
          <Form.Check
            type="radio"
            label="Sim"
            name="ocupado"
            value={1}
            checked={editCasa.ocupado === 1}
            onChange={handleChangeEdit}
          />
        </div>
      </Form.Group>
      <Form.Group controlId="formBLoco">
        <Form.Label>Proprietário</Form.Label>
        <Form.Control
          as="select"
          name="bloco"
          value={editCasa.bloco}
          onChange={handleChangeEdit}
        >
          <option value="">Selecione um morador</option>
          {moradores.map(morador => (
            <option key={morador.nome} value={morador.nome}>
              {morador.nome}
            </option>
          ))}
        </Form.Control>
      </Form.Group>
      <Form.Group controlId="tel">
              <Form.Label>Telefone</Form.Label>
              <Form.Control 
                type="text" 
                name="tel"
                value={editCasa.telefone}
                onChange={handleChangeEdit}
                autoFocus 
              />
            </Form.Group>
      <Form.Group controlId="formaluguel">
        <Form.Label>Aluguel?</Form.Label>
        <div>
          <Form.Check
            type="radio"
            label="Não"
            name="aluguel"
            value={0}
            checked={editCasa.aluguel === 0}
            onChange={handleChangeEdit}
          />
          <Form.Check
            type="radio"
            label="Sim"
            name="aluguel"
            value={1}
            checked={editCasa.aluguel === 1}
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

export default Casa;
