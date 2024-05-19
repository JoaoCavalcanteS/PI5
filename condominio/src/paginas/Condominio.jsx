import React, { useState } from "react";
import DataTable from "react-data-table-component";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Col";

const Condominio = () => {
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
            name: 'Logradouro',
            selector: row => row.logradouro,
            sortable: true
        },
        {
            name: 'Bairro',
            selector: row => row.bairro,
            sortable: true
        },
        {
            name: 'Cidade',
            selector: row => row.cidade,
            sortable: true
        },
        {
            name: 'Estado',
            selector: row => row.estado,
            sortable: true
        },
        {
            name: 'Número',
            selector: row => row.numero,
            sortable: true
        },
        {
            name: 'CEP',
            selector: row => row.cep,
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
            nome: "Rua das Flores",
            logradouro: "Rua das Flores",
            bairro: "Centro",
            cidade: "São Paulo",
            estado: "SP",
            numero: 123,
            cep: 154640546
        },
        {
            id: 2,
            nome: "Avenida Brasil",
            logradouro: "Avenida Brasil",
            bairro: "Jardins",
            cidade: "Rio de Janeiro",
            estado: "RJ",
            numero: 456,
            cep: 20202020
        },
        {
            id: 3,
            nome: "Rua Augusta",
            logradouro: "Rua Augusta",
            bairro: "Consolação",
            cidade: "São Paulo",
            estado: "SP",
            numero: 789,
            cep: 30303030
        },
        {
            id: 4,
            nome: "Rua Oscar Freire",
            logradouro: "Rua Oscar Freire",
            bairro: "Jardins",
            cidade: "São Paulo",
            estado: "SP",
            numero: 1011,
            cep: 40404040
        },
        {
            id: 5,
            nome: "Avenida Paulista",
            logradouro: "Avenida Paulista",
            bairro: "Bela Vista",
            cidade: "São Paulo",
            estado: "SP",
            numero: 1213,
            cep: 50505050
        },
        {
            id: 6,
            nome: "Rua 25 de Março",
            logradouro: "Rua 25 de Março",
            bairro: "Centro",
            cidade: "São Paulo",
            estado: "SP",
            numero: 1415,
            cep: 60606060
        },
        {
            id: 7,
            nome: "Avenida Atlântica",
            logradouro: "Avenida Atlântica",
            bairro: "Copacabana",
            cidade: "Rio de Janeiro",
            estado: "RJ",
            numero: 1617,
            cep: 70707070
        },
        {
            id: 8,
            nome: "Rua dos Pinheiros",
            logradouro: "Rua dos Pinheiros",
            bairro: "Pinheiros",
            cidade: "São Paulo",
            estado: "SP",
            numero: 1819,
            cep: 80808080
        },
        {
            id: 9,
            nome: "Avenida Presidente Vargas",
            logradouro: "Avenida Presidente Vargas",
            bairro: "Centro",
            cidade: "Rio de Janeiro",
            estado: "RJ",
            numero: 2122,
            cep: 90909090
        },
        {
            id: 10,
            nome: "Rua Itapura",
            logradouro: "Rua Itapura",
            bairro: "Tatuapé",
            cidade: "São Paulo",
            estado: "SP",
            numero: 2324,
            cep: 10101010
        },
        {
            id: 11,
            nome: "Avenida Brigadeiro Faria Lima",
            logradouro: "Avenida Brigadeiro Faria Lima",
            bairro: "Itaim Bibi",
            cidade: "São Paulo",
            estado: "SP",
            numero: 2526,
            cep: 11111111
        },
        {
            id: 12,
            nome: "Avenida da Praia",
            logradouro: "Avenida da Praia",
            bairro: "Praia Grande",
            cidade: "Praia Grande",
            estado: "SP",
            numero: 2728,
            cep: 12121212
        },
    ];

    const [records, setRecords] = useState(data);
    function handleFilter(event) {
        const newData = data.filter(row => {
            return row.descricao.toLocaleLowerCase().includes(event.target.value.toLocaleLowerCase())
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
    function handleNovoCondominio() {
        // Lógica para adicionar um novo Condominio
        console.log("Cadastrar novo Condominio");
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
            <Button variant="primary" onClick={handleShow}>
                Cadastrar Condomínio
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
                                placeholder="Condomínio ABC"
                                autoFocus
                            />
                            <Form.Label>Logradouro</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Rua Avenida Brasil"
                                autoFocus
                            />
                            <Form.Label>Bairro</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Centro"
                                autoFocus
                            />
                            <Form.Label>Cidade</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Rio de Janeiro"
                                autoFocus
                            />
                            <Form.Label>Estado</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Rio de Janeiro"
                                autoFocus
                            />
                            <Form.Label>Número</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="100"
                                autoFocus
                            />
                            <Form.Label>CEP</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="5437643"
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

export default Condominio;
