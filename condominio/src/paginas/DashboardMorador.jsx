import React, { useState } from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import TabMorador from "../components/TabMorador";
import { bottom } from "@popperjs/core";

function DashboardMorador() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <><Navbar className="bg-body-tertiary" style={{ marginBottom: '2%' }}>
        <Container>
          <Navbar.Brand>Central do Morador</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text className='user-logado'>
              Olá, <span>Jorge Miguel</span>
            </Navbar.Text>
            <Navbar.Text className="solicitation">
              <a href='#' onClick={handleShow}>Faça sua solicitação</a>
            </Navbar.Text>


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
                      autoFocus />
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="jose@example.com"
                      autoFocus />

                    <Form.Label>Id Condominio</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="123"
                      autoFocus />

                    <Form.Label>Número da casa</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="418"
                      autoFocus />

                    <Form.Label>Bloco</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="Unidade 1"
                      autoFocus />

                    <Form.Label>Descrição</Form.Label>
                    <Form.Control
                      as="textarea"
                      placeholder="Descreva sua solicitação..."
                      name="descricao" />

                  </Form.Group>
                </Form>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Cancelar
                </Button>
                <Button variant="primary" onClick={handleClose}>
                  Enviar
                </Button>
              </Modal.Footer>
            </Modal> {' '}



            <Navbar.Text className="logout-link">
              <a href="#logout">Logout</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar><TabMorador /></>


    );
}

export default DashboardMorador;
