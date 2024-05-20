import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import 'bootstrap/dist/css/bootstrap.min.css';

const Blocos = () => {
  const [records, setRecords] = useState([]);
  const [showCadastrar, setShowCadastrar] = useState(false);
  const [showAlterar, setShowAlterar] = useState(false);

  const [newBloco, setNewBloco] = useState({
    idCondominio: '',
    descricao: '',
    qtdCasas: '',
    qtdAndares: '',
    divisao: ''
  });
  const [editBloco, setEditBloco] = useState({
    id: '',
    idCondominio: '',
    descricao: '',
    qtdCasas: '',
    qtdAndares: '',
    divisao: ''
  });

  const [alertMessage, setAlertMessage] = useState('');
  const [alertVariant, setAlertVariant] = useState('success');
  const [showAlert, setShowAlert] = useState(false);

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
    buscarBlocos();
  }, []);

  const buscarBlocos = () => {
    fetch("http://localhost:8080/blocos/buscarBlocos")
      .then(response => response.json())
      .then(data => setRecords(data))
      .catch(error => console.error('Erro ao buscar blocos:', error));
  };

  const handleFilter = (event) => {
    const newData = records.filter(row => {
      return row.descricao.toLowerCase().includes(event.target.value.toLowerCase());
    });
    setRecords(newData);
  }

  const handleNovoBloco = () => {
    setShowCadastrar(true);
  }

  const handleEdit = (row) => {
    setEditBloco(row);
    setShowAlterar(true);
  }


  const handleClose = () => {
    setShowCadastrar(false);
    setNewBloco({
      idCondominio: '',
      descricao: '',
      qtdCasas: '',
      qtdAndares: '',
      divisao: ''
    });
    setAlertMessage('');
  }

  const handleCloseAlterar = () => {
    setShowAlterar(false);
    setNewBloco({
      idCondominio: '',
      descricao: '',
      qtdCasas: '',
      qtdAndares: '',
      divisao: ''
    });
    setAlertMessage('');
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewBloco(prevState => ({
      ...prevState,
      [name]: value
    }));
  }


  const handleChangeEdit = (e) => {
    const { name, value } = e.target;
    setEditBloco(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  

  const salvar = () => {
    fetch(`http://localhost:8080/blocos/salvar?isAlterar=false`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newBloco)
    })
      .then(response => {
        if (response.ok) {
          setAlertVariant('success');
          setAlertMessage('Bloco cadastrado com sucesso!');
          buscarBlocos();
          setShowCadastrar(false); // Fechar modal após o cadastro
        } else {
          setAlertVariant('danger');
          setAlertMessage('Erro ao cadastrar bloco. Por favor, tente novamente.');
          setShowCadastrar(false); // Fechar modal após o erro
          console.error('Erro ao salvar o bloco. Status:', response.status);
        }
      })
      .catch(error => {
        setAlertVariant('danger');
        setAlertMessage('Erro ao cadastrar bloco. Por favor, tente novamente.');
        console.error('Erro ao salvar o bloco:', error);
        setShowCadastrar(false); // Fechar modal após o erro
      });
  }

  const alterar = () => {
    fetch(`http://localhost:8080/blocos/salvar?isAlterar=true`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(editBloco)
    })
      .then(response => {
        if (response.ok) {
          setAlertVariant('success');
          setAlertMessage('Bloco alterado com sucesso!');
          buscarBlocos();
          setShowAlterar(false); // Fechar modal após o cadastro
        } else {
          setAlertVariant('danger');
          setAlertMessage('Erro ao alterar bloco. Por favor, tente novamente.');
          setShowAlterar(false); // Fechar modal após o erro
          console.error('Erro ao alterar o bloco. Status:', response.status);
        }
      })
      .catch(error => {
        setAlertVariant('danger');
        setAlertMessage('Erro ao alterar bloco. Por favor, tente novamente.');
        console.error('Erro ao alterar o bloco:', error);
        setShowAlterar(false); // Fechar modal após o erro
      });
  }

  
 
  const excluir = (id) => {
    
    console.log("Excluindo", id);

    fetch(`http://localhost:8080/blocos/excluir?id=${id}`, {
    method: 'DELETE'
  })
    .then(response => {
      if (response.ok) {
        setAlertVariant('success');
        setAlertMessage('Bloco excluído com sucesso!');
        setShowAlert(true);
        buscarBlocos(); // Atualizar a lista após a exclusão
      } else {
        setAlertVariant('danger');
        setAlertMessage('Erro ao excluir bloco. Por favor, tente novamente.');
        setShowAlert(true);
      }
    })
    .catch(error => {
      console.error('Erro ao excluir bloco:', error);
      setAlertVariant('danger');
      setAlertMessage('Erro ao excluir bloco. Por favor, tente novamente.');
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
  <h1>Blocos</h1>
      <Button variant="primary" onClick={handleNovoBloco}>
        Cadastrar Bloco
      </Button>
      <Modal show={showCadastrar} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Preencha os dados</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formIdCondominio">
              <Form.Label>Id condomínio</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="1" 
                name="idCondominio"
                value={newBloco.idCondominio}
                onChange={handleChange}
                autoFocus 
              />
            </Form.Group>
            <Form.Group controlId="formDescricao">
              <Form.Label>Descrição</Form.Label>
              <Form.Control 
                as="textarea" 
                placeholder="O Bloco C do Condomínio..." 
                name="descricao"
                value={newBloco.descricao}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formQtdCasas">
              <Form.Label>Quantas Casas</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="10" 
                name="qtdCasas"
                value={newBloco.qtdCasas}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formQtdAndares">
              <Form.Label>Quantos Andares</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="5" 
                name="qtdAndares"
                value={newBloco.qtdAndares}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formDivisao">
              <Form.Label>Divisão</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="Primeira divisão" 
                name="divisao"
                value={newBloco.divisao}
                onChange={handleChange}
              />
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
          <Modal.Title>Alterar bloco</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
          <Form.Group controlId="id">
              <Form.Label>Id </Form.Label>
              <Form.Control 
                type="text" 
                placeholder="1" 
                name="id"
                value={editBloco.id}
                onChange={handleChangeEdit}
                disabled
                autoFocus 
              />
            </Form.Group>
            <Form.Group controlId="formIdCondominio">
              <Form.Label>Id condomínio</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="1" 
                name="idCondominio"
                value={editBloco.idCondominio}
                onChange={handleChangeEdit}
                autoFocus 
              />
            </Form.Group>
            <Form.Group controlId="formDescricao">
              <Form.Label>Descrição</Form.Label>
              <Form.Control 
                as="textarea" 
                placeholder="O Bloco C do Condomínio..." 
                name="descricao"
                value={editBloco.descricao}
                onChange={handleChangeEdit}
              />
            </Form.Group>
            <Form.Group controlId="formQtdCasas">
              <Form.Label>Quantas Casas</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="10" 
                name="qtdCasas"
                value={editBloco.qtdCasas}
                onChange={handleChangeEdit}
              />
            </Form.Group>
            <Form.Group controlId="formQtdAndares">
              <Form.Label>Quantos Andares</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="5" 
                name="qtdAndares"
                value={editBloco.qtdAndares}
                onChange={handleChangeEdit}
              />
            </Form.Group>
            <Form.Group controlId="formDivisao">
              <Form.Label>Divisão</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="Primeira divisão" 
                name="divisao"
                value={editBloco.divisao}
                onChange={handleChangeEdit}
              />
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

export default Blocos;
