import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import 'bootstrap/dist/css/bootstrap.min.css';

const Morador = () => {
  const [records, setRecords] = useState([]);
  const [showCadastrar, setShowCadastrar] = useState(false);
  const [showAlterar, setShowAlterar] = useState(false);

  const [newMorador, setNewMorador] = useState({
    id: '',
    condominioId: '',
    email: '',
    nome: '',
    senha: '',
    numeroCasa: '',
    Morador: '',
    flag: 1
  });
  const [editMorador, setEditMorador] = useState({
    id: '',
    condominioId: '',
    email: '',
    nome: '',
    senha: '',
    numeroCasa: '',
    Morador: '',
    flag: 1
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
    buscarMoradores();
  }, []);

  const buscarMoradores = () => {
    fetch("http://localhost:8080/morador/buscarMoradores")
      .then(response => response.json())
      .then(data => setRecords(data))
      .catch(error => console.error('Erro ao buscar Moradores:', error));
  };

  function handleFilter(event) {
    const newData = records.filter(row => {
      return row.descricao.toLocaleLowerCase().includes(event.target.value.toLocaleLowerCase());
    });
    setRecords(newData);
  }

  const handleNovoMorador = () => {
    setShowCadastrar(true);
  }

  const handleEdit = (row) => {
    setEditMorador(row);
    setShowAlterar(true);
  }


  const handleClose = () => {
    setShowCadastrar(false);
    setNewMorador({
      id: '',
      condominioId: '',
      email: '',
      nome: '',
      senha: '',
      numeroCasa: '',
      bloco: '',
      flag: 1
    });
    setAlertMessage('');
  }

  const handleCloseAlterar = () => {
    setShowAlterar(false);
    setNewMorador({
      id: '',
      condominioId: '',
      email: '',
      nome: '',
      senha: '',
      numeroCasa: '',
      bloco: '',
      flag: 1
    });
    setAlertMessage('');
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewMorador(prevState => ({
      ...prevState,
      [name]: value
    }));
  }


  const handleChangeEdit = (e) => {
    const { name, value } = e.target;
    setEditMorador(prevState => ({
      ...prevState,
      [name]: value
    }));
  };



  const salvar = () => {
    fetch(`http://localhost:8080/morador/salvar?isAlterar=false`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newMorador)
    })
      .then(response => {
        if (response.ok) {
          setAlertVariant('success');
          setAlertMessage('Morador cadastrado com sucesso!');
          buscarMoradores();
          setShowCadastrar(false); // Fechar modal após o cadastro
        } else {
          setAlertVariant('danger');
          setAlertMessage('Erro ao cadastrar morador. Por favor, tente novamente.');
          console.error('Erro ao salvar morador. Status:', response.status);
        }
      })
      .catch(error => {
        setAlertVariant('danger');
        setAlertMessage('Erro ao cadastrar morador. Por favor, tente novamente.');
        console.error('Erro ao salvar morador:', error);
        setShowCadastrar(false); // Fechar modal após o erro
      });
  }

  const alterar = () => {
    fetch(`http://localhost:8080/moradores/salvar?isAlterar=true`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(editMorador)
    })
      .then(response => {
        if (response.ok) {
          setAlertVariant('success');
          setAlertMessage('Bloco alterado com sucesso!');
          buscarMoradores();
          setShowAlterar(false); // Fechar modal após o cadastro
        } else {
          setAlertVariant('danger');
          setAlertMessage('Erro ao alterar morador. Por favor, tente novamente.');
          console.error('Erro ao alterar  morador. Status:', response.status);
        }
      })
      .catch(error => {
        setAlertVariant('danger');
        setAlertMessage('Erro ao alterar morador. Por favor, tente novamente.');
        console.error('Erro ao alterar o morador:', error);
      });
  }



  const excluir = (id) => {

    console.log("Excluindo", id);

    fetch(`http://localhost:8080/morador/excluir?id=${id}&condominioId=`, {
      method: 'DELETE'
    })
      .then(response => {
        if (response.ok) {
          setAlertVariant('success');
          setAlertMessage('Bloco excluído com sucesso!');
          setShowAlert(true);
          buscarMoradores(); // Atualizar a lista após a exclusão
        } else {
          setAlertVariant('danger');
          setAlertMessage('Erro ao excluir morador. Por favor, tente novamente.');
          setShowAlert(true);
        }
      })
      .catch(error => {
        console.error('Erro ao excluir morador:', error);
        setAlertVariant('danger');
        setAlertMessage('Erro ao excluir morador. Por favor, tente novamente.');
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
      name: 'CPF/CNPJ',
      selector: row => row.id,
      sortable: true
    },
    {
      name: 'Id Condominio',
      selector: row => row.condominioId,
      sortable: true
    },
    {
      selector: row => row.email,
      sortable: true
    },
    {
      name: 'Senha',
      selector: row => row.senha,
      sortable: true
    },
    {
      name: 'Número da casa',
      selector: row => row.numeroCasa,
      sortable: true
    },
    {
      name: 'Bloco',
      selector: row => row.bloco,
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
      <h1 style={{ textAlign: 'center' }} >Morador</h1>
      <Button variant="primary" onClick={handleNovoMorador}>
        Cadastrar Morador(a)
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
                value={newMorador.idCondominio}
                onChange={handleChange}
                autoFocus
              />
            </Form.Group>
            <Form.Group controlId="formCpf">
              <Form.Label>CPF/CNPJ</Form.Label>
              <Form.Control
                type="text"
                name="cpfCnpj"
                value={newMorador.id}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Label>E-mail</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={newMorador.email}
              />
            </Form.Group>
            <Form.Group controlId="formNome">
              <Form.Label>Nome</Form.Label>
              <Form.Control
                type="text"
                value={newMorador.nome}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formSenha">
              <Form.Label>Senha</Form.Label>
              <Form.Control
                type="password"
                name="senha"
                value={newMorador.senha}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formBLoco">
              <Form.Label>Bloco</Form.Label>
              <Form.Control
                as="select"
                name="bloco"
                value={editMorador.bloco}
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
            <Form.Group controlId="formnumero">
              <Form.Label>Número da casa</Form.Label>
              <Form.Control
                type="number"
                name="numeroCasa"
                value={newMorador.numeroCasa}
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
          <Modal.Title>Alterar Morador</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formIdCondominio">
              <Form.Label>Id condomínio</Form.Label>
              <Form.Control
                type="text"
                placeholder="1"
                name="idCondominio"
                value={editMorador.idCondominio}
                onChange={handleChangeEdit}
                autoFocus
              />
            </Form.Group>
            <Form.Group controlId="formCpf">
              <Form.Label>CPF/CNPJ</Form.Label>
              <Form.Control
                as="text"
                name="cpfCnpj"
                value={editMorador.id}
                onChange={handleChangeEdit}
              />
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Label>E-mail</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={editMorador.email}
              />
            </Form.Group>
            <Form.Group controlId="formNome">
              <Form.Label>Nome</Form.Label>
              <Form.Control
                type="text"
                value={editMorador.nome}
                onChange={handleChangeEdit}
              />
            </Form.Group>
            <Form.Group controlId="formSenha">
              <Form.Label>Senha</Form.Label>
              <Form.Control
                type="password"
                name="senha"
                value={editMorador.senha}
                onChange={handleChangeEdit}
              />
            </Form.Group>
            <Form.Group controlId="formBLoco">
              <Form.Label>Bloco</Form.Label>
              <Form.Control
                as="select"
                name="bloco"
                value={editMorador.bloco}
                onChange={handleChangeEdit}
              >
                <option value="">Selecione um bloco</option>
                <option value="A">Bloco A</option>
                <option value="B">Bloco B</option>
                <option value="C">Bloco C</option>
                {/* Adicione mais opções conforme necessário */}
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="formnumero">
              <Form.Label>Número da casa</Form.Label>
              <Form.Control
                type="number"
                name="numeroCasa"
                value={editMorador.numeroCasa}
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
      <input type="text" style={{ marginLeft: '75%' }} placeholder="Pesquisar..." onChange={handleFilter} />
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

export default Morador;
