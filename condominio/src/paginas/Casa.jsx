import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Casa = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    senha: '',
    confirmSenha: '',
    morador: false,
    sindico: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica de cadastro aqui
    console.log(formData);
  };

  return (
    <Container className="main_content__2j9lU mt-5">
      <Row className="justify-content-center">
        <Col lg={6} md={8} sm={10}>
          <div className="check-cpf_page_title__y_Oqz mt-3" style={{ fontWeight: 600 }}>
            Vamos lá, você já tem o que é preciso para começar.
          </div>
          <Form onSubmit={handleSubmit} className="mt-5">
            <Form.Group className="mb-2" controlId="formNome">
              <Form.Label>Nome</Form.Label>
              <Form.Control
                type="text"
                placeholder="Digite seu nome"
                name="nome"
                value={formData.nome}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Digite seu email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formSenha">
              <Form.Label>Senha</Form.Label>
              <Form.Control
                type="password"
                placeholder="Digite sua senha"
                name="senha"
                value={formData.senha}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formConfirmSenha">
              <Form.Label>Confirme a Senha</Form.Label>
              <Form.Control
                type="password"
                placeholder="Confirme sua senha"
                name="confirmSenha"
                value={formData.confirmSenha}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formMorador">
              <Form.Check
                type="checkbox"
                label="Sou morador"
                name="morador"
                checked={formData.morador}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formSindico">
              <Form.Check
                type="checkbox"
                label="Sou síndico"
                name="sindico"
                checked={formData.sindico}
                onChange={handleChange}
              />
            </Form.Group>
            <div className="d-grid">
              <div className="text-muted mt-2 mb-4">
                Ao clicar em "Cadastrar" você estará dando o primeiro passo para o sucesso, e também autorizando a Anthil a guardar e processar suas informações pessoais para te oferecer tudo o que você precisa. Então não perca mais tempo, clique em "Cadastrar" e acredite em sua evolução.
              </div>
              <Button type="submit" id="bt_cadastrar" className="btn btn-primary btn-lg">
                Cadastrar
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Casa;
