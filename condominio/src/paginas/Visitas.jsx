import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import 'bootstrap/dist/css/bootstrap.min.css';

const Visitas = () => {
  const [records, setRecords] = useState([]);
  const [showCadastrar, setShowCadastrar] = useState(false);
  const [showAlterar, setShowAlterar] = useState(false);

  const [newVisita, setNewVisita] = useState({
    id: '', 
    idCondominio: 0,
    moradorId: 0,
    documentoVisita: '',
    nomeVisita:'',
    dataVisita: '',
    motivo:'',
    telefone:''
  });
  const [editVisita, setEditVisita] = useState({
    id: '', 
    idCondominio: 0,
    moradorId: 0,
    documentoVisita: '',
    nomeVisita:'',
    dataVisita: '',
    motivo:'',
    telefone:''
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
    buscarVisitas();
  }, []);

  const buscarVisitas = () => {
    fetch("http://localhost:8080/visitas/buscarVisitas")
      .then(response => response.json())
      .then(data => setRecords(data))
      .catch(error => console.error('Erro ao buscar visitas:', error));
  };

  const handleFilter = (event) => {
    const newData = records.filter(row => {
      return row.nome.toLowerCase().includes(event.target.value.toLowerCase());
    });
    setRecords(newData);
  }

  const handleNovoBloco = () => {
    setShowCadastrar(true);
  }

  const handleEdit = (row) => {
    setEditVisita(row);
    setShowAlterar(true);
  }


  const handleClose = () => {
    setShowCadastrar(false);
    setNewVisita({
      id: '', 
      idCondominio: 0,
      moradorId: 0,
      documentoVisita: '',
      nomeVisita:'',
      dataVisita: '',
      motivo:'',
      telefone:''
    });
    setAlertMessage('');
  }

  const handleCloseAlterar = () => {
    setShowAlterar(false);
    setNewVisita({
      id: '', 
      idCondominio: 0,
      moradorId: 0,
      documentoVisita: '',
      nomeVisita:'',
      dataVisita: '',
      motivo:'',
      telefone:''
    });
    setAlertMessage('');
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewVisita(prevState => ({
      ...prevState,
      [name]: value
    }));
  }


  const handleChangeEdit = (e) => {
    const { name, value } = e.target;
    setEditVisita(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  

  const salvar = () => {
    fetch(`http://localhost:8080/visitas/salvar?isAlterar=false`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newVisita)
    })
      .then(response => {
        if (response.ok) {
          setAlertVariant('success');
          setAlertMessage('Visitante cadastrado com sucesso!');
          buscarVisitas();
          setShowCadastrar(false); // Fechar modal após o cadastro
        } else {
          setAlertVariant('danger');
          setAlertMessage('Erro ao cadastrar visitante. Por favor, tente novamente.');
          setShowCadastrar(false); // Fechar modal após o erro
          console.error('Erro ao salvar o visitante. Status:', response.status);
        }
      })
      .catch(error => {
        setAlertVariant('danger');
        setAlertMessage('Erro ao cadastrar visitante. Por favor, tente novamente.');
        console.error('Erro ao salvar o visitante:', error);
        setShowCadastrar(false); // Fechar modal após o erro
      });
  }

  const alterar = () => {
    fetch(`http://localhost:8080/visitas/salvar?isAlterar=true`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(editVisita)
    })
      .then(response => {
        if (response.ok) {
          setAlertVariant('success');
          setAlertMessage('Visitante alterado com sucesso!');
          buscarVisitas();
          setShowAlterar(false); // Fechar modal após o cadastro
        } else {
          setAlertVariant('danger');
          setAlertMessage('Erro ao alterar visitante. Por favor, tente novamente.');
          setShowAlterar(false); // Fechar modal após o erro
          console.error('Erro ao alterar o visitante. Status:', response.status);
        }
      })
      .catch(error => {
        setAlertVariant('danger');
        setAlertMessage('Erro ao alterar visitante. Por favor, tente novamente.');
        console.error('Erro ao alterar o visitante:', error);
        setShowAlterar(false); // Fechar modal após o erro
      });
  }

  
 
  const excluir = (id) => {
    
    console.log("Excluindo", id);

    fetch(`http://localhost:8080/Visitas/excluir?id=${id}`, {
    method: 'DELETE'
  })
    .then(response => {
      if (response.ok) {
        setAlertVariant('success');
        setAlertMessage('Visitante excluído com sucesso!');
        setShowAlert(true);
        buscarVisitas(); // Atualizar a lista após a exclusão
      } else {
        setAlertVariant('danger');
        setAlertMessage('Erro ao excluir visitante. Por favor, tente novamente.');
        setShowAlert(true);
      }
    })
    .catch(error => {
      console.error('Erro ao excluir visitante:', error);
      setAlertVariant('danger');
      setAlertMessage('Erro ao excluir visitante. Por favor, tente novamente.');
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
      name: 'CPF do Morador',
      selector: row => row.moradorId,
      sortable: true
    },
    {
      name: 'CPF da visita',
      selector: row => row.documentoVisita,
      sortable: true
    },
    {
      name: 'Nome da visita',
      selector: row => row.nomeVisita,
      sortable: true
    },
    {
      name: 'Data da visita',
      selector: row => row.dataVisita,
      sortable: true
    },
    {
      name: 'Motivo',
      selector: row => row.motivo,
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
  <h1>Visitas</h1>
      <Button variant="primary" onClick={handleNovoBloco}>
        Cadastrar Visita
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
                value={newVisita.idCondominio}
                onChange={handleChange}
                autoFocus 
              />
            </Form.Group>
            <Form.Group controlId="formCpfMorador">
              <Form.Label>CPF do morador</Form.Label>
              <Form.Control 
                as="text"  
                name="cpfMorador"
                value={newVisita.moradorId}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formCpfVisitante">
              <Form.Label>CPF do visitante</Form.Label>
              <Form.Control 
                type="text"  
                name="cpfVisitante"
                value={newVisita.documentoVisita}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formNomeVisitante">
              <Form.Label>NOme do visitante</Form.Label>
              <Form.Control 
                type="text"  
                name="nomeVisitante"
                value={newVisita.nomeVisita}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formDataVisita">
              <Form.Label>Data da visita</Form.Label>
              <Form.Control 
                type="date" 
                name="dataVisita"
                value={newVisita.dataVisita}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formMotivo">
              <Form.Label>Motivo</Form.Label>
              <Form.Control 
                type="area"  
                name="motivo"
                value={newVisita.motivo}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formTelefone">
              <Form.Label>Telefone</Form.Label>
              <Form.Control 
                type="area"  
                name="telefone"
                value={newVisita.telefone}
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
          <Modal.Title>Alterar Visita</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
            <Form.Group controlId="formIdCondominio">
              <Form.Label>Id condomínio</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="1" 
                name="idCondominio"
                value={editVisita.idCondominio}
                onChange={handleChangeEdit}
                autoFocus 
              />
            </Form.Group>
            <Form.Group controlId="formCpfMorador">
              <Form.Label>CPF do morador</Form.Label>
              <Form.Control 
                as="text"  
                name="cpfMorador"
                value={editVisita.moradorId}
                onChange={handleChangeEdit}
              />
            </Form.Group>
            <Form.Group controlId="formCpfVisitante">
              <Form.Label>CPF do visitante</Form.Label>
              <Form.Control 
                type="text"  
                name="cpfVisitante"
                value={editVisita.documentoVisita}
                onChange={handleChangeEdit}
              />
            </Form.Group>
            <Form.Group controlId="formNomeVisitante">
              <Form.Label>Nome do visitante</Form.Label>
              <Form.Control 
                type="text"  
                name="nomeVisitante"
                value={editVisita.nomeVisita}
                onChange={handleChangeEdit}
              />
            </Form.Group>
            <Form.Group controlId="formDataVisita">
              <Form.Label>Data da visita</Form.Label>
              <Form.Control 
                type="date" 
                name="dataVisita"
                value={editVisita.dataVisita}
                onChange={handleChangeEdit}
              />
            </Form.Group>
            <Form.Group controlId="formMotivo">
              <Form.Label>Motivo</Form.Label>
              <Form.Control 
                type="area"  
                name="motivo"
                value={editVisita.motivo}
                onChange={handleChangeEdit}
              />
            </Form.Group>
            <Form.Group controlId="formTelefone">
              <Form.Label>Telefone</Form.Label>
              <Form.Control 
                type="area"  
                name="telefone"
                value={editVisita.telefone}
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
    <h6  style={{marginLeft:'40%'}}>Não há dados disponíveis.</h6>
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

export default Visitas;
