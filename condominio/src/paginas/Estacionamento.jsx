// import React from "react";

// const Estacionamento = () => {
//   return (
//     <div>
      
//     </div>
//   );
// };

// export default Estacionamento;

// Testando por enqaunto 

import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Estacionamento = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isResident, setIsResident] = useState(false);
  const [isSyndic, setIsSyndic] = useState(false);

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleResidentChange = () => setIsResident(!isResident);
  const handleSyndicChange = () => setIsSyndic(!isSyndic);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica de autenticação aqui
    console.log({ email, password, isResident, isSyndic });
  };

  return (
    <Container>
      <Row className="justify-content-md-center mt-5 col-12">
        <Col md={6}>
          <h1 className="text-center">Login</h1>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Digite seu email"
                value={email}
                onChange={handleEmailChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Senha</Form.Label>
              <Form.Control
                type="password"
                placeholder="Digite sua senha"
                value={password}
                onChange={handlePasswordChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCheckbox1">
              <Form.Check
                type="checkbox"
                label="Sou morador"
                checked={isResident}
                onChange={handleResidentChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCheckbox2">
              <Form.Check
                type="checkbox"
                label="Sou síndico"
                checked={isSyndic}
                onChange={handleSyndicChange}
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100">
              Login
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};


export default Estacionamento;

