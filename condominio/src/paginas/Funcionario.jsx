import React, { useState } from "react";
import DataTable from "react-data-table-component";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Col";

const Funcionario = () => {

    const columns = [
        {
            name: 'Id',
            selector: row => row.id,
            sortable: true
        },
        {
            name: 'Nome',
            selector: row => row.nome,
            sortable: true
        },
        {
            name: 'Email',
            selector: row => row.email,
            sortable: true
        },
        {
            name: 'Senha',
            selector: row => row.senha,
            sortable: true
        },
        {
            name: 'Data de Nascimento',
            selector: row => row.dataNascimento,
            sortable: true
        },
        {
            name: 'Função',
            selector: row => row.funcao,
            sortable: true
        },
        {
            name: 'Id Condominio',
            selector: row => row.idCondominio,
            sortable: true
        },

        {
            name: 'Ações',
            cell: row => (
                <div>
                    <Button variant="primary" size="sm" onClick={() => handleEdit(row)}>Editar</Button>{' '}
                    <Button variant="danger" size="sm" onClick={() => handleDelete(row.id)}>Excluir</Button>
                </div>
            )
        }

    ];

    const data = [

        {
            id: 1,
            nome: 'josé',
            email: 'jose@gmail.com',
            senha: '12345',
            dataNascimento: '10-1-2000',
            funcao: 'Administrador',
            idCondominio: 1
        },
        {
            id: 2,
            nome: 'Maria',
            email: 'maria@gmail.com',
            senha: '54321',
            dataNascimento: '5-5-1995',
            funcao: 'Usuário',
            idCondominio: 2
        },
        {
            id: 3,
            nome: 'João',
            email: 'joao@gmail.com',
            senha: 'abcde',
            dataNascimento: '12-12-1990',
            funcao: 'Administrador',
            idCondominio: 3
        },
        {
            id: 4,
            nome: 'Ana',
            email: 'ana@gmail.com',
            senha: 'edcba',
            dataNascimento: '3-3-1988',
            funcao: 'Usuário',
            idCondominio: 4
        },
        {
            id: 5,
            nome: 'Pedro',
            email: 'pedro@gmail.com',
            senha: 'senha123',
            dataNascimento: '20-7-1975',
            funcao: 'Administrador',
            idCondominio: 5
        },
        {
            id: 6,
            nome: 'Paula',
            email: 'paula@gmail.com',
            senha: 'senha321',
            dataNascimento: '15-9-1982',
            funcao: 'Usuário',
            idCondominio: 6
        },
        {
            id: 7,
            nome: 'Lucas',
            email: 'lucas@gmail.com',
            senha: 'lucas456',
            dataNascimento: '8-6-1997',
            funcao: 'Administrador',
            idCondominio: 7
        },
        {
            id: 8,
            nome: 'Carla',
            email: 'carla@gmail.com',
            senha: 'carla123',
            dataNascimento: '25-4-1986',
            funcao: 'Usuário',
            idCondominio: 8
        },
        {
            id: 9,
            nome: 'Ricardo',
            email: 'ricardo@gmail.com',
            senha: 'senha456',
            dataNascimento: '18-10-1992',
            funcao: 'Administrador',
            idCondominio: 9
        },
        {
            id: 10,
            nome: 'Fernanda',
            email: 'fernanda@gmail.com',
            senha: 'senha789',
            dataNascimento: '9-8-1980',
            funcao: 'Usuário',
            idCondominio: 10
        },
        {
            id: 11,
            nome: 'Gabriel',
            email: 'gabriel@gmail.com',
            senha: 'senhaabc',
            dataNascimento: '14-11-1998',
            funcao: 'Administrador',
            idCondominio: 11
        },
        {
            id: 12,
            nome: 'Mariana',
            email: 'mariana@gmail.com',
            senha: 'mariana123',
            dataNascimento: '30-6-1984',
            funcao: 'Usuário',
            idCondominio: 12
        }



    ];

    const [records, setRecords] = useState(data);
    function handleFilter(event) {
        const newData = data.filter(row => {
            return row.nome.toLocaleLowerCase().includes(event.target.value.toLocaleLowerCase())

        })
        setRecords(newData)
    }
    function handleEdit(row) {
        // Lógica para editar o registro
        console.log("Editando", row);
    }
    function handleDelete(id) {
        // Lógica para excluir o registro
        console.log("Excluindo", id);
    }
    function handleNovoFuncionario() {
        // Lógica para adicionar um novo Funcionario
        console.log("Cadastrar novo Funcionario");
    }
    // Modal de cadastro
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const paginationComponentOptions = {
        rowsPerPageText: 'Filas por página',
        rangeSeparatorText: 'de',
        selectAllRowsItem: true,
        selectAllRowsItemText: 'Todos',
    };

    return (
        <div>
            <h1 style={{ textAlign: 'center' }} >Funcionário</h1>
            <Button variant="primary" onClick={handleShow}>
                Cadastrar Funcionário
            </Button>
            {/* Modal de abrir o campo de cadastro */}
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Preencha os dados</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Nome</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="josé"
                                autoFocus
                            />
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="jose@example.com"
                                autoFocus
                            />
                            <Form.Label>Senha</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="jose123"
                                autoFocus
                            />
                            <Form.Label>Data de Nascimento</Form.Label>
                            <Form.Control
                                type="date"
                                autoFocus
                            />
                            <Form.Label>Função</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Usuário"
                                autoFocus
                            />

                            <Form.Label>Id Condominio</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="123"
                                autoFocus
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancelar
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Cadastrar
                    </Button>
                </Modal.Footer>
            </Modal> {' '}
            {/*Fim do Modal*/}
            <input type="text" placeholder="Pesquisar..." onChange={handleFilter} />
            <div className="mt-1">
                <DataTable
                    columns={columns}
                    data={records}
                    selectableRows
                    fixedHeader
                    pagination
                    paginationComponentOptions={paginationComponentOptions}
                />
            </div>

        </div >
    );
};

export default Funcionario;
