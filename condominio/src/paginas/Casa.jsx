import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router-dom";
import LogoutButton from '../components/LogoutButton';  // Importando o botão de logout

const Casa = () => {
  const [records, setRecords] = useState([]);
  const [showCadastrar, setShowCadastrar] = useState(false);
  const [showAlterar, setShowAlterar] = useState(false);
  const [blocos, setBlocos] = useState([]);
  const [moradores, setMoradores] = useState([]);

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

  const [newCasa, setNewCasa] = useState({
    condominioId,
    numeroCasa: '',
    bloco: '',
    vazia: '',
    moradorId: '',
    aluguel: '',
    telefone: ''
  });

  const [editCasa, setEditCasa] = useState({
    id: '',
    condominioId,
    numeroCasa: '',
    bloco: '',
    vazia: '',
    moradorId: '',
    aluguel: '',
    telefone: ''
  });

  const [alertMessage, setAlertMessage] = useState('');
  const [alertVariant, setAlertVariant] = useState('success');
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:8080/blocos/listarBlocos?condominioId=${condominioId}`)
      .then(response => response.json())
      .then(data => setBlocos(data))
      .catch(error => console.error('Error fetching blocos:', error));
  }, [condominioId]);

  useEffect(() => {
    fetch(`http://localhost:8080/morador/moradores?condominioId=${condominioId}`)
      .then(response => response.json())
      .then(data => setMoradores(data))
      .catch(error => console.error('Error fetching Moradores:', error));
  }, [condominioId]);

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
    fetch(`http://localhost:8080/casa/casas?condominioId=${condominioId}`)
      .then(response => response.json())
      .then(data => setRecords(data))
      .catch(error => console.error('Erro ao buscar casas:', error));
  };

  function handleFilter(event) {
    const newData = records.filter(row => {
      return row.numeroCasa.toLocaleLowerCase().includes(event.target.value.toLocaleLowerCase());
    });
    setRecords(newData);
  }

  const handleNovaCasa = () => {
    setShowCadastrar(true);
  }

  const handleEdit = (row) => {
    setEditCasa(row);
    setShowAlterar(true);
  }

  const handleClose = () => {
    setShowCadastrar(false);
    setNewCasa({
      condominioId,
      numeroCasa: '',
      bloco: '',
      vazia: '',
      moradorId: '',
      aluguel: '',
      telefone: ''
    });
    setAlertMessage('');
  }

  const handleCloseAlterar = () => {
    setShowAlterar(false);
    setEditCasa({
      id: '',
      condominioId,
      numeroCasa: '',
      bloco: '',
      vazia: '',
      moradorId: '',
      aluguel: '',
      telefone: ''
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
          console.error('Erro ao salvar a casa. Status:', response.status);
        }
      })
      .catch(error => {
        setAlertVariant('danger');
        setAlertMessage('Erro ao cadastrar casa. Por favor, tente novamente.');
        console.error('Erro ao salvar a casa:', error);
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
          console.error('Erro ao alterar a casa. Status:', response.status);
        }
      })
      .catch(error => {
        setAlertVariant('danger');
        setAlertMessage('Erro ao alterar casa. Por favor, tente novamente.');
        console.error('Erro ao alterar a casa:', error);
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
      name: 'Vazia',
      selector: row => row.vazia,
      sortable: true
    },
    {
      name: 'Morador',
      selector: row => row.moradorId,
      sortable: true,
      cell: row => {
        const morador = moradores.find(m => m.id === row.moradorId);
        return morador ? morador.nome : 'Desconhecido';
      }
    },
    {
      name: 'Aluguel',
      selector: row => row.aluguel,
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
      ),
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
    }
  ];

  return (
    <div className="App">
      <header className="App-header">
        <h1>Casas</h1>
      </header>
      <LogoutButton />
      {showAlert && (
        <Alert variant={alertVariant} onClose={() => setShowAlert(false)} dismissible>
          {alertMessage}
        </Alert>
      )}
      <div>
        <input type="text" onChange={handleFilter} placeholder="Filtrar por Número da Casa" />
        <Button variant="success" onClick={handleNovaCasa}>Nova Casa</Button>
        <DataTable
          columns={columns}
          data={records}
          pagination
          paginationComponentOptions={paginationComponentOptions}
          highlightOnHover
          pointerOnHover
          selectableRowsHighlight
        />
      </div>

      {/* Modal para cadastrar nova casa */}
      <Modal show={showCadastrar} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Cadastrar Nova Casa</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="numeroCasa">
              <Form.Label>Número da Casa</Form.Label>
              <Form.Control type="text" name="numeroCasa" value={newCasa.numeroCasa} onChange={handleChange} />
            </Form.Group>
            <Form.Group controlId="bloco">
              <Form.Label>Bloco</Form.Label>
              <Form.Control as="select" name="bloco" value={newCasa.bloco} onChange={handleChange}>
                <option value="">Selecione o Bloco</option>
                {blocos.map(bloco => (
                  <option key={bloco.id} value={bloco.nome}>{bloco.nome}</option>
                ))}
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="vazia">
              <Form.Label>Vazia</Form.Label>
              <Form.Control as="select" name="vazia" value={newCasa.vazia} onChange={handleChange}>
                <option value="">Selecione</option>
                <option value="Sim">Sim</option>
                <option value="Não">Não</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="moradorId">
              <Form.Label>Morador</Form.Label>
              <Form.Control as="select" name="moradorId" value={newCasa.moradorId} onChange={handleChange}>
                <option value="">Selecione o Morador</option>
                {moradores.map(morador => (
                  <option key={morador.id} value={morador.id}>{morador.nome}</option>
                ))}
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="aluguel">
              <Form.Label>Aluguel</Form.Label>
              <Form.Control type="text" name="aluguel" value={newCasa.aluguel} onChange={handleChange} />
            </Form.Group>
            <Form.Group controlId="telefone">
              <Form.Label>Telefone</Form.Label>
              <Form.Control type="text" name="telefone" value={newCasa.telefone} onChange={handleChange} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Cancelar</Button>
          <Button variant="primary" onClick={salvar}>Salvar</Button>
        </Modal.Footer>
      </Modal>

      {/* Modal para editar casa */}
      <Modal show={showAlterar} onHide={handleCloseAlterar}>
        <Modal.Header closeButton>
          <Modal.Title>Alterar Casa</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="numeroCasa">
              <Form.Label>Número da Casa</Form.Label>
              <Form.Control type="text" name="numeroCasa" value={editCasa.numeroCasa} onChange={handleChangeEdit} />
            </Form.Group>
            <Form.Group controlId="bloco">
              <Form.Label>Bloco</Form.Label>
              <Form.Control as="select" name="bloco" value={editCasa.bloco} onChange={handleChangeEdit}>
                <option value="">Selecione o Bloco</option>
                {blocos.map(bloco => (
                  <option key={bloco.id} value={bloco.nome}>{bloco.nome}</option>
                ))}
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="vazia">
              <Form.Label>Vazia</Form.Label>
              <Form.Control as="select" name="vazia" value={editCasa.vazia} onChange={handleChangeEdit}>
                <option value="">Selecione</option>
                <option value="Sim">Sim</option>
                <option value="Não">Não</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="moradorId">
              <Form.Label>Morador</Form.Label>
              <Form.Control as="select" name="moradorId" value={editCasa.moradorId} onChange={handleChangeEdit}>
                <option value="">Selecione o Morador</option>
                {moradores.map(morador => (
                  <option key={morador.id} value={morador.id}>{morador.nome}</option>
                ))}
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="aluguel">
              <Form.Label>Aluguel</Form.Label>
              <Form.Control type="text" name="aluguel" value={editCasa.aluguel} onChange={handleChangeEdit} />
            </Form.Group>
            <Form.Group controlId="telefone">
              <Form.Label>Telefone</Form.Label>
              <Form.Control type="text" name="telefone" value={editCasa.telefone} onChange={handleChangeEdit} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseAlterar}>Cancelar</Button>
          <Button variant="primary" onClick={alterar}>Salvar</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Casa;
