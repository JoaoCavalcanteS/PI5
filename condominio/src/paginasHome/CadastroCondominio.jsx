import React, { useState, useEffect } from "react";
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';
import basico from "../images/basico.png";
import premium from "../images/premium.png";

const CadastroCondominio = () => {
  const [condominio, setCondominio] = useState({
    nome: '',
    logradouro: '',
    bairro: '',
    cidade: '',
    estado: '',
    numero: '',
    cep: '',
    proprietario: '',
    plano: '',
    nomeProprietario: '',
    email: '',
    senha: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCondominio(prevState => ({
      ...prevState,
      [name]: value
    }));
  }


  const handleSubmit = (event) => {
    event.preventDefault();
    // Aqui você pode enviar os dados do formulário, incluindo o endereço, para onde precisar
  };

  const handleCEPChange = async (event) => {
    const cep = event.target.value;
    if (cep.length === 8) {
      try {
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const data = await response.json();
        if (!data.erro) {
          setCondominio((prevState) => ({
            ...prevState,
            bairro: data.bairro,
            logradouro: data.logradouro,
            cidade: data.localidade,
            estado: data.uf,
          }));
        }
      } catch (error) {
        console.error('Erro ao buscar o CEP:', error);
      }
    }
  };


  const salvar = () => {
    fetch(`http://localhost:8080/condominio/salvar?isAlterar=false`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(condominio)
    }).then(response => {
      console.log(response)
    });
  }


  function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {props.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Funcionalidades:</h4>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            {props.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-primary" onClick={props.onHide}>Fechar</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  const [modalShowBasic, setModalShowBasic] = useState(false);
  const [modalShowPremium, setModalShowPremium] = useState(false);

  const handlePlanChange = (event) => {
    setCondominio({ ...condominio, plano: event.target.value });
  };

  return (
    <><Container id="contato" className="d-flex justify-content-between align-items-center" style={{ border: '1px solid black', padding: '20px', borderRadius: '30px' }}>
      <div>
        <h1><p>Dê o passo definitivo </p><p>rumo ao futuro do </p>mercado condominial</h1>
      </div>
      <div style={{ width: '600px' }}>
        <Form onSubmit={handleSubmit}>
        <Row className="mb-3">
  <Form.Label><h2>Preencha os dados</h2></Form.Label>
  <Form.Group as={Col} controlId="formGridEmail">
    <Form.Label>Nome do Condomínio</Form.Label>
    <Form.Control name="nome" value={condominio.nome} onChange={handleChange} type="text" />
  </Form.Group>
</Row>
<Row className="mb-3">
  <Form.Group as={Col} controlId="formGridDocument">
    <Form.Label>Documento do Síndico</Form.Label>
    <Form.Control name="proprietario" value={condominio.proprietario} onChange={handleChange} type="text" />
  </Form.Group>
  <Form.Group as={Col} controlId="formGridName">
    <Form.Label>Nome do Síndico</Form.Label>
    <Form.Control name="nomeProprietario" value={condominio.nomeProprietario} onChange={handleChange} type="text" />
  </Form.Group>
</Row>
<Form.Group className="mb-3" controlId="formGridEmail">
  <Form.Label>E-mail</Form.Label>
  <Form.Control name="email" value={condominio.email} onChange={handleChange} type="email" />
</Form.Group>
<Form.Group className="mb-3" controlId="formGridPassword">
  <Form.Label>Senha</Form.Label>
  <Form.Control name="senha" value={condominio.senha} onChange={handleChange} type="password" />
</Form.Group>
<Form.Group className="mb-3" controlId="formGridAddress1">
  <Form.Label>Logradouro</Form.Label>
  <Form.Control name="logradouro" value={condominio.logradouro} onChange={handleChange} type="text" />
</Form.Group>
<Row className="mb-3">
  <Form.Group as={Col} controlId="formGridAddress2">
    <Form.Label>Bairro</Form.Label>
    <Form.Control name="bairro" value={condominio.bairro} onChange={handleChange} type="text" />
  </Form.Group>
  <Form.Group as={Col} controlId="formGridCity">
    <Form.Label>Cidade</Form.Label>
    <Form.Control name="cidade" value={condominio.cidade} onChange={handleChange} placeholder="São Paulo" />
  </Form.Group>
</Row>
<Row className="mb-3">
<Form.Group as={Col} controlId="formGridState">
  <Form.Label>Estado</Form.Label>
  <Form.Control name="estado" value={condominio.estado} onChange={handleChange} as="select">
    <option>Escolha...</option>
    <option value="AC">Acre</option>
    <option value="AL">Alagoas</option>
    <option value="AP">Amapá</option>
    <option value="AM">Amazonas</option>
    <option value="BA">Bahia</option>
    <option value="CE">Ceará</option>
    <option value="DF">Distrito Federal</option>
    <option value="ES">Espírito Santo</option>
    <option value="GO">Goiás</option>
    <option value="MA">Maranhão</option>
    <option value="MT">Mato Grosso</option>
    <option value="MS">Mato Grosso do Sul</option>
    <option value="MG">Minas Gerais</option>
    <option value="PA">Pará</option>
    <option value="PB">Paraíba</option>
    <option value="PR">Paraná</option>
    <option value="PE">Pernambuco</option>
    <option value="PI">Piauí</option>
    <option value="RJ">Rio de Janeiro</option>
    <option value="RN">Rio Grande do Norte</option>
    <option value="RS">Rio Grande do Sul</option>
    <option value="RO">Rondônia</option>
    <option value="RR">Roraima</option>
    <option value="SC">Santa Catarina</option>
    <option value="SP">São Paulo</option>
    <option value="SE">Sergipe</option>
    <option value="TO">Tocantins</option>
  </Form.Control>
</Form.Group>

  <Form.Group as={Col} controlId="formGridNumber">
    <Form.Label>Número</Form.Label>
    <Form.Control name="numero" value={condominio.numero} onChange={handleChange} type="number" />
  </Form.Group>
  <Form.Group as={Col} controlId="formGridCEP">
  <Form.Label>CEP</Form.Label>
  <Form.Control name="cep" value={condominio.cep} onChange={(event) => { handleChange(event); handleCEPChange(event); }}  />
</Form.Group>

</Row>

          <Button variant="outline-primary" onClick={salvar} type="submit">
            Cadastrar
          </Button>
        </Form>
      </div>
      <br />
      <br />
      <br />
      <br />
    </Container><h1 id="planos" style={{ textAlign: 'center' }}>Escolha seu plano</h1><br /><br /><div className="d-flex justify-content-around">
      <Card style={{ width: '26rem' }}>
        <Card.Img variant="top" src={basico} />
        <Card.Body>
          <Card.Title>Plano Básico</Card.Title>
          <Card.Text>
            No plano básico você terá acesso somente a funcionalidades básicas.
          </Card.Text>
          <Row className="mb-3">
          <Button variant="outline-primary" onClick={() => setModalShowBasic(true)}>
            Ver Detalhes
          </Button>
          <Form.Check
            type="radio"
            label="Escolher Plano Básico"
            name="plano"
            value="1"
            checked={condominio.plano === '1'}
            onChange={handlePlanChange}
            style={{ marginTop: '2%' }}
          />
          </Row>
          <div style={{ marginBottom: '10px' }}></div>
          <MyVerticallyCenteredModal
            show={modalShowBasic}
            onHide={() => setModalShowBasic(false)}
            title="Detalhes do Plano Básico"
            features={[
              '• Gestão de Moradores e Unidades:',
              '- Cadastro e gerenciamento de moradores, incluindo informações pessoais, contatos e unidades.',
              '- Cadastro de apartamentos e blocos para uma organização eficiente.',
              '• Agendamento de Espaços Comuns:',
              '- Agendamento e reserva de espaços comuns, como salão de festas, churrasqueira e piscina.',
              '• Controle de Acesso:',
              '- Controle de visitas de pessoas e entregas de mercadorias.'
            ]} />
        </Card.Body>
      </Card>
      <Card style={{ width: '26rem' }}>
        <Card.Img variant="top" src={premium} />
        <Card.Body>
          <Card.Title>Plano Premium</Card.Title>
          <Card.Text>
            No plano Premium você terá acesso somente a todas as funcionalidades.
          </Card.Text>
            <Row className="mb-3">
          <Button variant="outline-primary" onClick={() => setModalShowPremium(true)}>
            Ver Detalhes
          </Button>
          <Form.Check
            type="radio"
            label="Escolher Plano Premium"
            name="plano"
            value="2"
            checked={condominio.plano === '2'}
            onChange={handlePlanChange}
            style={{ marginTop: '2%' }}
          />
          </Row>
          <div style={{ marginBottom: '10px' }}></div>
          <MyVerticallyCenteredModal
            show={modalShowPremium}
            onHide={() => setModalShowPremium(false)}
            title="Detalhes do Plano Premium"
            features={[
              '• Interação com Moradores:',
              '- Os moradores podem acessar o sistema para visualizar avisos, fazer solicitações, e reservar espaços comuns.',
              '- Canal de comunicação bidirecional entre moradores e administração para uma maior transparência e eficiência na resolução de questões condominiais.',
              '• Gestão de Moradores e Unidades:',
              '- Cadastro e gerenciamento de moradores, incluindo informações pessoais, contatos e unidades.',
              '- Cadastro de apartamentos e blocos para uma organização eficiente.',
              '• Agendamento de Espaços Comuns:',
              '- Agendamento e reserva de espaços comuns, como salão de festas, churrasqueira e piscina.',
              '• Controle de Acesso:',
              '- Controle de visitas de pessoas e entregas de mercadorias.'
            ]} />
        </Card.Body>
      </Card>
    </div></>
  );
}

export default CadastroCondominio;
