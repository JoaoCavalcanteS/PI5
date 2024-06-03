import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import 'bootstrap/dist/css/bootstrap.min.css';

const AreaDeLazer = () => {
  const [records, setRecords] = useState([]);
  const [showCadastrar, setShowCadastrar] = useState(false);
  const [showAlterar, setShowAlterar] = useState(false);

  const [newAreaDeLazer, setNewAreaDeLazer] = useState({
    nome: '',
    condominioId: '',
    bloco: '',
    descricao:''
  });
  const [editAreaDeLazer, setEditAreaDeLazer] = useState({
    id: '',
    nome: '',
    condominioId: '',
    bloco: '',
    descricao:''
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
    buscarAreas();
  }, []);

  const buscarAreas = () => {
    fetch("http://localhost:8080/areaDeLazer/buscarAreas")
      .then(response => response.json())
      .then(data => setRecords(data))
      .catch(error => console.error('Erro ao buscar áreas:', error));
  };

  function handleFilter(event) {
    const newData = records.filter(row => {
      return row.nome.toLocaleLowerCase().includes(event.target.value.toLocaleLowerCase());
    });
    setRecords(newData);
  }

  const handleNovaArea = () => {
    setShowCadastrar(true);
  }

  const handleEdit = (row) => {
    setEditAreaDeLazer(row);
    setShowAlterar(true);
  }


  const handleClose = () => {
    setShowCadastrar(false);
    setNewAreaDeLazer({
      nome: '',
      condominioId: '',
      bloco: '',
      descricao:''
    });
    setAlertMessage('');
  }

  const handleCloseAlterar = () => {
    setShowAlterar(false);
    setNewAreaDeLazer({
      nome: '',
      condominioId: '',
      bloco: '',
      descricao:''
    });
    setAlertMessage('');
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewAreaDeLazer(prevState => ({
      ...prevState,
      [name]: value
    }));
  }


  const handleChangeEdit = (e) => {
    const { name, value } = e.target;
    setEditAreaDeLazer(prevState => ({
      ...prevState,
      [name]: value
    }));
  };



  const salvar = () => {
    fetch(`http://localhost:8080/areaDeLazer/salvar?isAlterar=false`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newAreaDeLazer)
    })
      .then(response => {
        if (response.ok) {
          setAlertVariant('success');
          setAlertMessage('Área de lazer cadastrada com sucesso!');
          buscarAreas();
          setShowCadastrar(false); // Fechar modal após o cadastro
        } else {
          setAlertVariant('danger');
          setAlertMessage('Erro ao cadastrar área de lazer. Por favor, tente novamente.');
          console.error('Erro ao salvar área de lazer. Status:', response.status);
        }
      })
      .catch(error => {
        setAlertVariant('danger');
        setAlertMessage('Erro ao cadastrar área de lazer. Por favor, tente novamente.');
        console.error('Erro ao salvar área de lazer:', error);
        setShowCadastrar(false); // Fechar modal após o erro
      });
  }

  const alterar = () => {
    fetch(`http://localhost:8080/areaDeLazer/salvar?isAlterar=true`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(editAreaDeLazer)
    })
      .then(response => {
        if (response.ok) {
          setAlertVariant('success');
          setAlertMessage('Área de lazer alterada com sucesso!');
          buscarAreas();
          setShowAlterar(false); // Fechar modal após o cadastro
        } else {
          setAlertVariant('danger');
          setAlertMessage('Erro ao alterar área de lazer. Por favor, tente novamente.');
          console.error('Erro ao alterar  área de lazer. Status:', response.status);
        }
      })
      .catch(error => {
        setAlertVariant('danger');
        setAlertMessage('Erro ao alterar área de lazer. Por favor, tente novamente.');
        console.error('Erro ao alterar o área de lazer:', error);
      });
  }



  const excluir = (id) => {

    console.log("Excluindo", id);

    fetch(`http://localhost:8080/areaDeLazer/excluir?id=${id}`, {
      method: 'DELETE'
    })
      .then(response => {
        if (response.ok) {
          setAlertVariant('success');
          setAlertMessage('Área de lazer excluída com sucesso!');
          setShowAlert(true);
          buscarAreas(); // Atualizar a lista após a exclusão
        } else {
          setAlertVariant('danger');
          setAlertMessage('Erro ao excluir área de lazer. Por favor, tente novamente.');
          setShowAlert(true);
        }
      })
      .catch(error => {
        console.error('Erro ao excluir área de lazer:', error);
        setAlertVariant('danger');
        setAlertMessage('Erro ao excluir área de lazer. Por favor, tente novamente.');
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
      name: 'Área de Lazer',
      selector: row => row.nome,
      sortable: true
    },
    {
      name: 'Bloco',
      selector: row => row.bloco,
      sortable: true
    },

    {
      name: 'Descrição',
      selector: row => row.descricao,
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
      <h1 style={{ textAlign: 'center' }} >Área de Lazer</h1>
      <Button variant="primary" onClick={handleNovaArea}>
        Cadastrar Morador(a)
      </Button>
      <Modal show={showCadastrar} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Preencha os dados</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formIdCondominio">
              <Form.Label>Área de Lazer</Form.Label>
              <Form.Control
                type="text"
                placeholder="1"
                name="areaDeLazer"
                value={newAreaDeLazer.nome}
                onChange={handleChange}
                autoFocus
              />
            </Form.Group>
            <Form.Group controlId="formBLoco">
              <Form.Label>Bloco</Form.Label>
              <Form.Control
                as="select"
                name="bloco"
                value={newAreaDeLazer.bloco}
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
            <Form.Group controlId="formDesc">
              <Form.Label>Descrição</Form.Label>
              <Form.Control
                type="text"
                name="descrição"
                value={newAreaDeLazer.descricao}
                onChange={handleChange}
                autoFocus
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
          <Modal.Title>Preencha os dados</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formIdCondominio">
              <Form.Label>Área de Lazer</Form.Label>
              <Form.Control
                type="text"
                placeholder="1"
                name="areaDeLazer"
                value={editAreaDeLazer.nome}
                onChange={handleChangeEdit}
                autoFocus
              />
            </Form.Group>
            <Form.Group controlId="formBLoco">
              <Form.Label>Bloco</Form.Label>
              <Form.Control
                as="select"
                name="bloco"
                value={editAreaDeLazer.bloco}
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
            <Form.Group controlId="formDesc">
              <Form.Label>Descrição</Form.Label>
              <Form.Control
                type="text"
                name="descrição"
                value={editAreaDeLazer.descricao}
                onChange={handleChangeEdit}
                autoFocus
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

export default AreaDeLazer;
