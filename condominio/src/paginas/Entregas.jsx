import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import 'bootstrap/dist/css/bootstrap.min.css';

const Entregas = () => {
  const [records, setRecords] = useState([]);
  const [showCadastrar, setShowCadastrar] = useState(false);
  const [showAlterar, setShowAlterar] = useState(false);

  const [newEntrega, setNewEntrega] = useState({
    condominioId: '',
    cpfDestinatario: '',
    destinatario: '',
    data: '',
    hora: '', // Adicionei o campo hora aqui
    numeroCasa: '',
    bloco: '',
    recebidoPor: '',
    status: '',
    dataRetirada: '',
    horaRetirada: '',
    retiradoPor: '',
  });
  const [editEntrega, setEditEntrega] = useState({
    id: '',
    condominioId: '',
    cpfDestinatario: '',
    destinatario: '',
    data: '',
    hora: '', // Adicionei o campo hora aqui
    numeroCasa: '',
    bloco: '',
    recebidoPor: '',
    status: '',
    dataRetirada: '',
    horaRetirada: '',
    retiradoPor: '',
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
    buscarEntregas();
  }, []);

  const buscarEntregas = () => {
    fetch("http://localhost:8080/entrega/buscarEntregas")
      .then(response => response.json())
      .then(data => setRecords(data))
      .catch(error => console.error('Erro ao buscar Moradores:', error));
  };

  function handleFilter(event) {
    const newData = records.filter(row => {
      return row.destinatario.toLocaleLowerCase().includes(event.target.value.toLocaleLowerCase());
    });
    setRecords(newData);
  }

  const handleNovoMorador = () => {
    setShowCadastrar(true);
  }

  const handleEdit = (row) => {
    setEditEntrega(row);
    setShowAlterar(true);
  }


  const handleClose = () => {
    setShowCadastrar(false);
    setNewEntrega({
      condominioId: '',
      cpfDestinatario: '',
      destinatario: '',
      data: '',
      hora: '',
      numeroCasa: '',
      bloco: '',
      recebidoPor: '',
      status: '',
      dataRetirada: '',
      horaRetirada: '',
      retiradoPor: '',
    });
    setAlertMessage('');
  }

  const handleCloseAlterar = () => {
    setShowAlterar(false);
    setNewEntrega({
      condominioId: '',
      cpfDestinatario: '',
      destinatario: '',
      data: '',
      hora: '',
      numeroCasa: '',
      bloco: '',
      recebidoPor: '',
      status: '',
      dataRetirada: '',
      horaRetirada: '',
      retiradoPor: '',
    });
    setAlertMessage('');
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewEntrega(prevState => ({
      ...prevState,
      [name]: value
    }));
  }


  const handleChangeEdit = (e) => {
    const { name, value } = e.target;
    setEditEntrega(prevState => ({
      ...prevState,
      [name]: value
    }));
  };



  const salvar = () => {
    fetch(`http://localhost:8080/entrega/salvar?isAlterar=false`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newEntrega)
    })
      .then(response => {
        if (response.ok) {
          setAlertVariant('success');
          setAlertMessage('Entrega cadastrada com sucesso!');
          buscarEntregas();
          setShowCadastrar(false); // Fechar modal após o cadastro
        } else {
          setAlertVariant('danger');
          setAlertMessage('Erro ao cadastrar entrega. Por favor, tente novamente.');
          console.error('Erro ao salvar entrega. Status:', response.status);
        }
      })
      .catch(error => {
        setAlertVariant('danger');
        setAlertMessage('Erro ao cadastrar entrega. Por favor, tente novamente.');
        console.error('Erro ao salvar entrega:', error);
        setShowCadastrar(false); // Fechar modal após o erro
      });
  }

  const alterar = () => {
    fetch(`http://localhost:8080/entrega/salvar?isAlterar=true`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(editEntrega)
    })
      .then(response => {
        if (response.ok) {
          setAlertVariant('success');
          setAlertMessage('Entrega alterada com sucesso!');
          buscarEntregas();
          setShowAlterar(false); // Fechar modal após o cadastro
        } else {
          setAlertVariant('danger');
          setAlertMessage('Erro ao alterar entrega. Por favor, tente novamente.');
          console.error('Erro ao alterar  entrega. Status:', response.status);
        }
      })
      .catch(error => {
        setAlertVariant('danger');
        setAlertMessage('Erro ao alterar entrega. Por favor, tente novamente.');
        console.error('Erro ao alterar o entrega:', error);
      });
  }



  const excluir = (id) => {

    console.log("Excluindo", id);

    fetch(`http://localhost:8080/entrega/excluir?id=${id}`, {
      method: 'DELETE'
    })
      .then(response => {
        if (response.ok) {
          setAlertVariant('success');
          setAlertMessage('Entrega excluída com sucesso!');
          setShowAlert(true);
          buscarEntregas(); // Atualizar a lista após a exclusão
        } else {
          setAlertVariant('danger');
          setAlertMessage('Erro ao excluir entrega. Por favor, tente novamente.');
          setShowAlert(true);
        }
      })
      .catch(error => {


        console.error('Erro ao excluir entrega:', error);
        setAlertVariant('danger');
        setAlertMessage('Erro ao excluir entrega. Por favor, tente novamente.');
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

      name: 'CPF/CNPJ do Destinatário',
      selector: row => row.cpfDestinatario,
      sortable: true
    },
    {
      name: 'Nome do Destinatário',
      selector: row => row.destinatario,
      sortable: true
    },
    {
      name: "Data da entrega",
      selector: row => row.data,
      sortable: true
    },
    {
      name: 'Hora da entrega',
      selector: row => row.hora,
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
      name: 'Recebido por',
      selector: row => row.recebidoPor,
      sortable: true
    },
    {
      name: 'Status',
      selector: row => row.status,
      sortable: true
    },
    {
      name: 'Data Retirada',
      selector: row => row.dataRetirada,
      sortable: true
    },
    {
      name: 'Hora Retirada',
      selector: row => row.horaRetirada,
      sortable: true
    },
    {
      name: 'Retirado Por',
      selector: row => row.retiradoPor,
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
      <h1 style={{ textAlign: 'center' }} >Entrega</h1>
      <Button variant="primary" onClick={handleNovoMorador}>
        Cadastrar Entregas
      </Button>
      <Modal show={showCadastrar} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Preencha os dados</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formIdCondominio">

              <Form.Label>CPF/CNPJ do destinatário</Form.Label>
              <Form.Control
                type="text"
                name="cpf"
                value={newEntrega.cpfDestinatario}
                onChange={handleChange}
                autoFocus
              />
            </Form.Group>
            <Form.Group controlId="formCpf">
              <Form.Label>Nome do destinatário</Form.Label>
              <Form.Control
                type="text"
                name="nome"
                value={newEntrega.destinatario}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Label>Data da entrega</Form.Label>
              <Form.Control
                type="date"
                name="data"
                value={newEntrega.data}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formNome">
              <Form.Label>Horário da entrega</Form.Label>
              <Form.Control
                type="text"
                name="hora"
                value={newEntrega.hora}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formBLoco">
              <Form.Label>Bloco</Form.Label>
              <Form.Control
                as="select"
                name="bloco"
                value={newEntrega.bloco}
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
                value={newEntrega.numeroCasa}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="formnumero">
              <Form.Label>Recebido por</Form.Label>
              <Form.Control
                type="text"
                name="recebidoPor"
                value={newEntrega.recebidoPor}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formStatus">
              <Form.Label>Status</Form.Label>
              <div>
                <Form.Check
                  type="radio"
                  label="Não Retirado"
                  name="status"
                  value={0}
                  checked={newEntrega.status === 0}
                  onChange={handleChange}
                />
                <Form.Check
                  type="radio"
                  label="Em Análise"
                  name="status"
                  value={1}
                  checked={newEntrega.status === 1}
                  onChange={handleChange}
                />
              </div>
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Label>Data da retirada</Form.Label>
              <Form.Control
                type="date"
                name="dataRetirada"
                value={newEntrega.dataRetirada}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formNome">
              <Form.Label>Horário da retirada</Form.Label>
              <Form.Control
                type="text"
                name="horaRetirada"
                value={newEntrega.horaRetirada}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formnumero">
              <Form.Label>Retirado por</Form.Label>
              <Form.Control
                type="text"
                name="retiradoPor"
                value={newEntrega.retiradoPor}
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

      <Modal show={showAlterar} onHide

        ={handleCloseAlterar}>
        <Modal.Header closeButton>
          <Modal.Title>Alterar Morador</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formIdCondominio">

              <Form.Label>CPF/CNPJ do destinatário</Form.Label>
              <Form.Control
                type="text"
                name="cpf"
                value={editEntrega.cpfDestinatario}
                onChange={handleChangeEdit}
                autoFocus
              />
            </Form.Group>
            <Form.Group controlId="formCpf">
              <Form.Label>Nome do destinatário</Form.Label>
              <Form.Control
                type="text"
                name="nome"
                value={editEntrega.destinatario}
                onChange={handleChangeEdit}
              />
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Label>Data da entrega</Form.Label>
              <Form.Control
                type="date"
                name="data"
                value={editEntrega.data}
                onChange={handleChangeEdit}
              />
            </Form.Group>
            <Form.Group controlId="formNome">
              <Form.Label>Horário da entrega</Form.Label>
              <Form.Control
                type="text"
                name="hora"
                value={editEntrega.hora}
                onChange={handleChangeEdit}
              />
            </Form.Group>
            <Form.Group controlId="formBLoco">
              <Form.Label>Bloco</Form.Label>
              <Form.Control
                as="select"
                name="bloco"
                value={editEntrega.bloco}
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
                value={editEntrega.numeroCasa}
                onChange={handleChangeEdit}
              />
            </Form.Group>

            <Form.Group controlId="formnumero">
              <Form.Label>Recebido por</Form.Label>
              <Form.Control
                type="text"
                name="recebidoPor"
                value={editEntrega.recebidoPor}
                onChange={handleChangeEdit}
              />
            </Form.Group>
            <Form.Group controlId="formStatus">
              <Form.Label>Status</Form.Label>
              <div>
                <Form.Check
                  type="radio"
                  label="Não Retirado"
                  name="status"
                  value={0}
                  checked={editEntrega.status === 0}
                  onChange={handleChangeEdit}
                />
                <Form.Check
                  type="radio"
                  label="Em Análise"
                  name="status"
                  value={1}
                  checked={editEntrega.status === 1}
                  onChange={handleChangeEdit}
                />
              </div>
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Label>Data da retirada</Form.Label>
              <Form.Control
                type="date"
                name="dataRetirada"
                value={editEntrega.dataRetirada}
                onChange={handleChangeEdit}
              />
            </Form.Group>
            <Form.Group controlId="formNome">
              <Form.Label>Horário da retirada</Form.Label>
              <Form.Control
                type="text"
                name="horaRetirada"
                value={editEntrega.horaRetirada}
                onChange={handleChangeEdit}
              />
            </Form.Group>
            <Form.Group controlId="formnumero">
              <Form.Label>Retirado por</Form.Label>
              <Form.Control
                type="text"
                name="retiradoPor"
                value={editEntrega.retiradoPor}
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

export default Entregas;