import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router-dom";
import LogoutButton from '../components/LogoutButton';  // Importando o botão de logout

const Blocos = () => {
  const [records, setRecords] = useState([]);
  const [showCadastrar, setShowCadastrar] = useState(false);
  const [showAlterar, setShowAlterar] = useState(false);

  const condominioId = localStorage.getItem('condominioId');
  const token = localStorage.getItem('token');
  const flag = localStorage.getItem('flag');
  const navigate = useNavigate();

  // Verificação de autenticação e autorização
  useEffect(() => {
    if (!token || flag !== '1') {
      navigate('/login');
    }
  }, [token, flag, navigate]);

  const [newBloco, setNewBloco] = useState({
    condominioId, // Use condominioId from localStorage
    descricao: '',
    qtdCasas: '',
    qtdAndares: '',
    divisao: ''
  });
  const [editBloco, setEditBloco] = useState({
    id: '',
    condominioId, // Use condominioId from localStorage
    descricao: '',
    qtdCasas: '',
    qtdAndares: '',
    divisao: ''
  });

  const [alertMessage, setAlertMessage] = useState('');
  const [alertVariant, setAlertVariant] = useState('success');
  const [showAlert, setShowAlert] = useState(false);

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
    buscarBlocos();
  }, []);

  const buscarBlocos = () => {
    fetch(`http://localhost:8080/blocos/listarBlocos?condominioId=${condominioId}`)
      .then(response => response.json())
      .then(data => setRecords(data))
      .catch(error => console.error('Erro ao buscar blocos:', error));
  };

  function handleFilter(event) {
    const newData = records.filter(row => {
      return row.descricao.toLocaleLowerCase().includes(event.target.value.toLocaleLowerCase());
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
      condominioId,
      descricao: '',
      qtdCasas: '',
      qtdAndares: '',
      divisao: ''
    });
    setAlertMessage('');
  }

  const handleCloseAlterar = () => {
    setShowAlterar(false);
    setEditBloco({
      id: '',
      condominioId,
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
      selector: row => row.condominioId,
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
      <LogoutButton /> {/* Botão de logout */}
      {showAlert && (
        <Alert variant={alertVariant} onClose={() => setShowAlert(false)} dismissible>
          {alertMessage}
        </Alert>
      )}
      <Button variant="primary" onClick={handleNovoBloco}>
        Novo Bloco
      </Button>
      <Modal show={showCadastrar} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Cadastro de Bloco</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formcondominioId">
              <Form.Label>Condomínio Id</Form.Label>
              <Form.Control type="text" value={newBloco.condominioId} readOnly />
            </Form.Group>
            <Form.Group controlId="formDescricao">
              <Form.Label>Descrição</Form.Label>
              <Form.Control type="text" name="descricao" value={newBloco.descricao} onChange={handleChange} />
            </Form.Group>
            <Form.Group controlId="formQtdCasas">
              <Form.Label>Quantidade de Casas</Form.Label>
              <Form.Control type="text" name="qtdCasas" value={newBloco.qtdCasas} onChange={handleChange} />
            </Form.Group>
            <Form.Group controlId="formQtdAndares">
              <Form.Label>Quantidade de Andares</Form.Label>
              <Form.Control type="text" name="qtdAndares" value={newBloco.qtdAndares} onChange={handleChange} />
            </Form.Group>
            <Form.Group controlId="formDivisao">
              <Form.Label>Divisão</Form.Label>
              <Form.Control type="text" name="divisao" value={newBloco.divisao} onChange={handleChange} />
            </Form.Group>
            <Button variant="primary" onClick={salvar}>
              Salvar
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
      <Modal show={showAlterar} onHide={handleCloseAlterar}>
        <Modal.Header closeButton>
          <Modal.Title>Altere os dados</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formcondominioId">
              <Form.Label>Condomínio Id</Form.Label>
              <Form.Control type="text" value={editBloco.condominioId} readOnly />
            </Form.Group>
            <Form.Group controlId="formDescricao">
              <Form.Label>Descrição</Form.Label>
              <Form.Control type="text" name="descricao" value={editBloco.descricao} onChange={handleChangeEdit} />
            </Form.Group>
            <Form.Group controlId="formQtdCasas">
              <Form.Label>Quantidade de Casas</Form.Label>
              <Form.Control type="text" name="qtdCasas" value={editBloco.qtdCasas} onChange={handleChangeEdit} />
            </Form.Group>
            <Form.Group controlId="formQtdAndares">
              <Form.Label>Quantidade de Andares</Form.Label>
              <Form.Control type="text" name="qtdAndares" value={editBloco.qtdAndares} onChange={handleChangeEdit} />
            </Form.Group>
            <Form.Group controlId="formDivisao">
              <Form.Label>Divisão</Form.Label>
              <Form.Control type="text" name="divisao" value={editBloco.divisao} onChange={handleChangeEdit} />
            </Form.Group>
            <Button variant="primary" onClick={alterar}>
              Alterar
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
      <div style={{ paddingTop: "10px" }}>
        <Form.Group controlId="formPesquisar">
          <Form.Label>Pesquisar</Form.Label>
          <Form.Control type="text" placeholder="Pesquisar" onChange={handleFilter} />
        </Form.Group>
        <DataTable
          columns={columns}
          data={records}
          pagination
          paginationComponentOptions={paginationComponentOptions}
        />
      </div>
    </div>
  );
}

export default Blocos;
