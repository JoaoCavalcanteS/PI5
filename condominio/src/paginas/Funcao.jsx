import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import 'bootstrap/dist/css/bootstrap.min.css';

const Funcao = () => {
  const [records, setRecords] = useState([]);
  const [showCadastrar, setShowCadastrar] = useState(false);
  const [showAlterar, setShowAlterar] = useState(false);

  const [newFuncao, setNewFuncao] = useState({
    descricao: '',
    condominioId: '',
  });
  const [editFuncao, setEditFuncao] = useState({
    id: '',
    descricao: '',
    condominioId: '',
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
    buscarFuncoes();
  }, []);

  const buscarFuncoes = () => {
    fetch("http://localhost:8080/funcao/buscarFuncoes")
      .then(response => response.json())
      .then(data => setRecords(data))
      .catch(error => console.error('Erro ao buscar áreas:', error));
  };

  function handleFilter(event) {
    const newData = records.filter(row => {
      return row.descricao.toLocaleLowerCase().includes(event.target.value.toLocaleLowerCase());
    });
    setRecords(newData);
  }

  const handleNovaArea = () => {
    setShowCadastrar(true);
  }

  const handleEdit = (row) => {
    setEditFuncao(row);
    setShowAlterar(true);
  }


  const handleClose = () => {
    setShowCadastrar(false);
    setNewFuncao({
      descricao: '',
      condominioId: '',
    });
    setAlertMessage('');
  }

  const handleCloseAlterar = () => {
    setShowAlterar(false);
    setNewFuncao({
      descricao: '',
      condominioId: '',
    });
    setAlertMessage('');
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewFuncao(prevState => ({
      ...prevState,
      [name]: value
    }));
  }


  const handleChangeEdit = (e) => {
    const { name, value } = e.target;
    setEditFuncao(prevState => ({
      ...prevState,
      [name]: value
    }));
  };



  const salvar = () => {
    fetch(`http://localhost:8080/funcao/salvar?isAlterar=false`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newFuncao)
    })
      .then(response => {
        if (response.ok) {
          setAlertVariant('success');
          setAlertMessage('Função cadastrada com sucesso!');
          buscarFuncoes();
          setShowCadastrar(false); // Fechar modal após o cadastro
        } else {
          setAlertVariant('danger');
          setAlertMessage('Erro ao cadastrar função. Por favor, tente novamente.');
          console.error('Erro ao salvar função. Status:', response.status);
        }
      })
      .catch(error => {
        setAlertVariant('danger');
        setAlertMessage('Erro ao cadastrar função. Por favor, tente novamente.');
        console.error('Erro ao salvar função:', error);
        setShowCadastrar(false); // Fechar modal após o erro
      });
  }

  const alterar = () => {
    fetch(`http://localhost:8080/funcao/salvar?isAlterar=true`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(editFuncao)
    })
      .then(response => {
        if (response.ok) {
          setAlertVariant('success');
          setAlertMessage('Função alterada com sucesso!');
          buscarFuncoes();
          setShowAlterar(false); // Fechar modal após o cadastro
        } else {
          setAlertVariant('danger');
          setAlertMessage('Erro ao alterar função. Por favor, tente novamente.');
          console.error('Erro ao alterar  função. Status:', response.status);
        }
      })
      .catch(error => {
        setAlertVariant('danger');
        setAlertMessage('Erro ao alterar função. Por favor, tente novamente.');
        console.error('Erro ao alterar o função:', error);
      });
  }



  const excluir = (id) => {

    console.log("Excluindo", id);

    fetch(`http://localhost:8080/funcao/excluir?id=${id}`, {
      method: 'DELETE'
    })
      .then(response => {
        if (response.ok) {
          setAlertVariant('success');
          setAlertMessage('Função excluída com sucesso!');
          setShowAlert(true);
          buscarFuncoes(); // Atualizar a lista após a exclusão
        } else {
          setAlertVariant('danger');
          setAlertMessage('Erro ao excluir função. Por favor, tente novamente.');
          setShowAlert(true);
        }
      })
      .catch(error => {
        console.error('Erro ao excluir função:', error);
        setAlertVariant('danger');
        setAlertMessage('Erro ao excluir função. Por favor, tente novamente.');
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
      name: 'Função',
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
      <h1 style={{ textAlign: 'center' }} >Função</h1>
      <Button variant="primary" onClick={handleNovaArea}>
        Cadastrar Função
      </Button>
      <Modal show={showCadastrar} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Preencha os dados</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formIdCondominio">
              <Form.Label>Função</Form.Label>
              <Form.Control
                type="text"
                placeholder="Sindico"
                name="funcao"
                value={newFuncao.descricao}
                onChange={handleChange}
                autoFocus
              />
              <Form.Label>Condominio Id</Form.Label>
              <Form.Control
                type="text"
                placeholder="123"
                name="condominio_id"
                value={newFuncao.descricao}
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
                value={editFuncao.descricao}
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

export default Funcao;
