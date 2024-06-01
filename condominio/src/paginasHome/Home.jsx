import React, { useState } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Carousel from 'react-bootstrap/Carousel';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import CardGroup from 'react-bootstrap/CardGroup';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Accordion from 'react-bootstrap/Accordion';
import banner1 from "../images/banner1.jpg";
import banner2 from "../images/banner2.png";
import banner3 from "../images/banner3.png";
import cadastro from "../images/cadastro.png";
import agendamento from "../images/agendamento.png";



function Home() {
    const [modalShowBasic, setModalShowBasic] = useState(false);
    const [modalShowPremium, setModalShowPremium] = useState(false);

    const [show, setShow] = useState(true);
    const [accepted, setAccepted] = useState(false);

    const handleClose = () => setShow(false);
    const handleAccept = () => {
        setShow(false);
        setAccepted(true);
    };
    const handleLaunch = () => setShow(true);

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
                    <h4>As funcionalidades são:</h4>
                    <p>
                        {props.description}
                    </p>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        );
    }

    return (
        <>
            {/* Começo navbar */}
            <Navbar expand="lg" className="bg-body-tertiary my-navbar">
                <Container className="px-0">
                    <Navbar.Brand href="#home">Anthill</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">Sobre</Nav.Link>
                            <Nav.Link href="#link">Contato</Nav.Link>
                            <NavDropdown title="Ações" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.2">Login</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            {/* Fim navbar */}
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner1}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner2}
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner3}
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
            {/* fim carousel */}
            <br />
            <br />
            <br />
            <h1 style={{ textAlign: 'center' }}>Sobre nosso sistema</h1>
            <br />
            <br />
            <div style={{ display: 'flex', gap: '1rem' }}>
                <Card style={{ border: '1px solid #dee2e6' }}>
                    <Card.Img variant="top" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAA1BMVEUAAACnej3aAAAASElEQVR4nO3BgQAAAADDoPlTX+AIVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDcaiAAFXD1ujAAAAAElFTkSuQmCC" />
                    <Card.Body>
                        <Card.Title>Plataforma Centralizada de Gestão</Card.Title>
                        <Card.Text>
                            O sistema oferece uma plataforma única e intuitiva para simplificar a gestão de condomínios, centralizando operações administrativas como cadastro de moradores, reservas de espaços comuns e comunicação interna.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card style={{ border: '1px solid #dee2e6' }}>
                    <Card.Img variant="top" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAA1BMVEUAAACnej3aAAAASElEQVR4nO3BgQAAAADDoPlTX+AIVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDcaiAAFXD1ujAAAAAElFTkSuQmCC" />
                    <Card.Body>
                        <Card.Title>Comunicação Transparente e Eficiente</Card.Title>
                        <Card.Text>
                            Facilita a comunicação entre moradores e administração por meio de murais de avisos e notificações, promovendo uma interação transparente e eficaz para compartilhar informações importantes e coordenar eventos.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card style={{ border: '1px solid #dee2e6' }}>
                    <Card.Img variant="top" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAA1BMVEUAAACnej3aAAAASElEQVR4nO3BgQAAAADDoPlTX+AIVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDcaiAAFXD1ujAAAAAElFTkSuQmCC" />
                    <Card.Body>
                        <Card.Title>Comunicação Transparente e Eficiente</Card.Title>
                        <Card.Text>
                            Facilita a comunicação entre moradores e administração por meio de murais de avisos e notificações, promovendo uma interação transparente e eficaz para compartilhar informações importantes e coordenar eventos.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
            {/* final de sobre */}
            <br />
            <br />
            <br />
            <h1 style={{ textAlign: 'center' }}>Funcionalidades disponíveis na plataforma</h1>
            <br />
            <br />
            <br />
            <Row xs={1} md={3} className="g-4">
                <Col>
                    <Card>
                        <Card.Img variant="top" src={cadastro} />
                        <Card.Body>
                            <Card.Title>Cadastro e gerenciamento de moradores</Card.Title>
                            <Card.Text>
                                Essencial para manter um registro organizado dos moradores do condomínio, incluindo detalhes pessoais, contatos e informações sobre suas unidades habitacionais. Garante uma gestão eficiente e atualizada da comunidade residencial.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant="top" src={agendamento} />
                        <Card.Body>
                            <Card.Title>Agendamento e reserva de espaços comuns</Card.Title>
                            <Card.Text>
                                Facilita a utilização justa e equitativa das áreas comuns do condomínio, como salão de festas, churrasqueira e piscina. Permite aos moradores agendar eventos, reuniões e atividades, evitando conflitos de uso.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant="top" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAA1BMVEUAAACnej3aAAAASElEQVR4nO3BgQAAAADDoPlTX+AIVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDcaiAAFXD1ujAAAAAElFTkSuQmCC" />
                        <Card.Body>
                            <Card.Title>Comunicação entre moradores e administração</Card.Title>
                            <Card.Text>
                                Promove uma comunicação eficaz entre os moradores e a administração do condomínio. Facilita o compartilhamento de informações importantes, avisos e comunicados, contribuindo para uma convivência harmoniosa.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant="top" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAA1BMVEUAAACnej3aAAAASElEQVR4nO3BgQAAAADDoPlTX+AIVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDcaiAAFXD1ujAAAAAElFTkSuQmCC" />
                        <Card.Body>
                            <Card.Title>Controle de visitas e entregas</Card.Title>
                            <Card.Text>
                                Contribui para a segurança e o controle de acesso no condomínio, registrando e monitorando as entradas de visitantes e entregadores. Ajuda a prevenir intrusões e a garantir que apenas pessoas permitidas tenham acesso às instalações.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant="top" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAA1BMVEUAAACnej3aAAAASElEQVR4nO3BgQAAAADDoPlTX+AIVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDcaiAAFXD1ujAAAAAElFTkSuQmCC" />
                        <Card.Body>
                            <Card.Title>Cadastro de funcionários</Card.Title>
                            <Card.Text>
                                Permite à administração manter um registro completo dos funcionários do condomínio, incluindo dados pessoais e funções desempenhadas. Facilita a gestão de recursos humanos e o cumprimento das obrigações trabalhistas.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant="top" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAA1BMVEUAAACnej3aAAAASElEQVR4nO3BgQAAAADDoPlTX+AIVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDcaiAAFXD1ujAAAAAElFTkSuQmCC" />
                        <Card.Body>
                            <Card.Title>Cadastro de apartamentos e blocos</Card.Title>
                            <Card.Text>
                                Simplifica o gerenciamento das unidades habitacionais e dos blocos dentro do condomínio. Mantém um registro organizado da estrutura física do empreendimento, facilitando a identificação de proprietários, inquilinos e áreas comuns.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* final funcionalidades */}
            <br />
            <br />
            <h1 style={{ textAlign: 'center' }}>Escolha seu plano</h1>
            <br />
            <br />
            <div className="d-flex justify-content-around">
                <Card style={{ width: '26rem' }}>
                    <Card.Img variant="top" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAA1BMVEUAAACnej3aAAAASElEQVR4nO3BgQAAAADDoPlTX+AIVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDcaiAAFXD1ujAAAAAElFTkSuQmCC" />
                    <Card.Body>
                        <Card.Title>Plano Básico</Card.Title>
                        <Card.Text>
                            No plano básico você terá acesso somente a funcionalidade básicas.
                        </Card.Text>
                        <Button variant="primary" onClick={() => setModalShowBasic(true)}>
                            Ver Detalhes
                        </Button>
                        <div style={{ marginBottom: '10px' }}></div>
                        <MyVerticallyCenteredModal
                            show={modalShowBasic}
                            onHide={() => setModalShowBasic(false)}
                            title="Detalhes do Plano Básico"
                            description="Aqui estão os detalhes do Plano Básico..."
                        />

                    </Card.Body>
                </Card>
                <Card style={{ width: '26rem' }}>
                    <Card.Img variant="top" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAA1BMVEUAAACnej3aAAAASElEQVR4nO3BgQAAAADDoPlTX+AIVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDcaiAAFXD1ujAAAAAElFTkSuQmCC" />
                    <Card.Body>
                        <Card.Title>Plano Premium</Card.Title>
                        <Card.Text>
                            No plano Premium você terá acesso somente a todas as funcionalidades.
                        </Card.Text>
                        <Button variant="primary" onClick={() => setModalShowPremium(true)}>
                            Ver Detalhes
                        </Button>
                        <div style={{ marginBottom: '10px' }}></div>
                        <MyVerticallyCenteredModal
                            show={modalShowPremium}
                            onHide={() => setModalShowPremium(false)}
                            title="Detalhes do Plano Premium"
                            description="Aqui estão os detalhes do Plano Premium..."
                        />
                    </Card.Body>
                </Card>
            </div>
            {/* final planos */}
            <br />
            <br />
            <br />
            <Container className="d-flex justify-content-between align-items-center" style={{ border: '1px solid black', padding: '20px', borderRadius: '30px' }}>
                <div>
                    <h1><p>Dê o passo definitivo </p><p>rumo ao futuro do </p>mercado condominial</h1>
                </div>
                <div style={{ width: '600px' }}>
                    <Form>
                        <Row className="mb-3">
                            <Form.Label><h2>Preencha com seus dados!</h2></Form.Label>
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Nome</Form.Label>
                                <Form.Control type="text" placeholder="José" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Label>Sobrenome</Form.Label>
                                <Form.Control type="text" placeholder="Silva" />
                            </Form.Group>
                        </Row>

                        <Form.Group className="mb-3" controlId="formGridAddress1">
                            <Form.Label>E-mail</Form.Label>
                            <Form.Control type="email" placeholder="josesilva@gmail.com" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formGridAddress2">
                            <Form.Label>Logradouro</Form.Label>
                            <Form.Control placeholder="Av. Eng. Eusébio Stevaux, 823" />
                        </Form.Group>

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridCity">
                                <Form.Label> Cidade</Form.Label>
                                <Form.Control placeholder="São Paulo" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridState">
                                <Form.Label>Estado</Form.Label>
                                <Form.Select defaultValue="Choose...">
                                    <option>Escolha...</option>
                                    <option>...</option>
                                </Form.Select>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridZip">
                                <Form.Label>CEP</Form.Label>
                                <Form.Control placeholder="12345-67" />
                            </Form.Group>
                        </Row>
                        <Button variant="primary" type="submit">
                            Solicitar Contato
                        </Button>
                    </Form>
                </div>
            </Container>
            <br />
            <br />
            {/* final contato */}
            <h1 style={{ textAlign: 'center' }}>Perguntas e Respostas</h1>
            <br />
            <br />
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Quais são as principais funcionalidades oferecidas pelo sistema de gerenciamento de condomínios?</Accordion.Header>
                    <Accordion.Body>
                        O sistema oferece funcionalidades como cadastro e gerenciamento de moradores, agendamento e reserva de espaços comuns, comunicação entre moradores e administração, controle de visitas e entregas, cadastro de funcionários, e cadastro de apartamentos e blocos.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Como os moradores podem usar o sistema para reservar espaços comuns, como o salão de festas ou a churrasqueira?</Accordion.Header>
                    <Accordion.Body>
                        Os moradores podem acessar o sistema e utilizar o formulário de solicitação, onde podem escolher a data, horário e o espaço desejado, e realizam a reserva de forma online.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>Qual é o processo para cadastrar novos moradores no sistema?</Accordion.Header>
                    <Accordion.Body>
                        O processo de cadastro de novos moradores envolve preencher um formulário com informações pessoais e de contato, que são inseridas no sistema pelo administrador. Após o cadastro, os moradores recebem suas credenciais de acesso para utilizar o sistema.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>Como o sistema ajuda a manter a segurança do condomínio, especialmente em relação ao controle de visitas e entregas?</Accordion.Header>
                    <Accordion.Body>
                        O sistema permite registrar e controlar as visitas de pessoas e entregas de mercadorias, garantindo que apenas pessoas autorizadas tenham acesso ao condomínio. Os moradores podem realizar cadastros prévios de visitantes e receber notificações sobre a chegada de entregas.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                    <Accordion.Header>De que forma o sistema facilita a comunicação entre os moradores e a administração do condomínio?</Accordion.Header>
                    <Accordion.Body>
                        O sistema oferece uma plataforma para envio de comunicados, avisos entre os moradores e a administração. Isso facilita a troca de informações importantes, agiliza a resolução de questões e promove uma comunicação mais eficaz.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="5">
                    <Accordion.Header>Quais são os principais benefícios percebidos pelos moradores desde a implementação do sistema de gerenciamento de condomínios?</Accordion.Header>
                    <Accordion.Body>
                        Os moradores percebem benefícios como maior organização e transparência na administração do condomínio, facilidade no agendamento de espaços comuns, melhor comunicação com a administração e maior controle sobre a segurança do ambiente residencial.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            {/* final perguntas e respostas */}
            <br />
            <br />
            <h1 style={{ textAlign: 'center' }}>O que estão dizendo sobre a gente</h1>
            <br />
            <br />
            <Container>
                <Row>
                    <Col>
                        <Card>
                            <Card.Header>Feedback</Card.Header>
                            <Card.Body>
                                <blockquote className="blockquote mb-0">
                                    <p>
                                        Adorei a facilidade de uso e a organização que o sistema de
                                        condomínio proporciona. É uma ferramenta indispensável para a
                                        gestão eficiente das pessoas e do condomínio!
                                    </p>
                                    <footer className="blockquote-footer">
                                        Joana Silva <cite title="Condomino">Condomino</cite>
                                    </footer>
                                </blockquote>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Header>Feedback</Card.Header>
                            <Card.Body>
                                <blockquote className="blockquote mb-0">
                                    <p>
                                        Estou muito satisfeito com a forma como o sistema de condomínio
                                        facilitou a comunicação entre os moradores e a administração.
                                        Nunca foi tão fácil ficar atualizado o nosso prédio!
                                    </p>
                                    <footer className="blockquote-footer">
                                        Pedro Oliveira <cite title="Morador">Morador</cite>
                                    </footer>
                                </blockquote>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Header>Feedback</Card.Header>
                            <Card.Body>
                                <blockquote className="blockquote mb-0">
                                    <p>
                                        O sistema de condomínio tornou a vida no prédio muito mais
                                        tranquila e organizada. Agora, podemos reservar os espaços
                                        comuns de forma
                                        simples e eficaz. Recomendo a todos os condomínios!
                                    </p>
                                    <footer className="blockquote-footer">
                                        Luiz Carlos <cite title="Proprietário">Proprietário</cite>
                                    </footer>
                                </blockquote>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            {/* fim de comentários */}
            <br />
            <br />
            <Card className="text-center">
                <Card.Body>
                    <Card.Title>Anthill</Card.Title>
                    <Card.Text>
                        Sistema de gerenciamento de condomínios para uma vida mais fácil e organizada.
                    </Card.Text>
                    <Card.Text>
                        Para dúvidas ou suporte, entre em contato conosco:
                    </Card.Text>
                    <Card.Text>
                        Email: contato@anthill.com<br />
                        Telefone: (11) 91234-5678<br />
                        Av. Eng. Eusébio Stevaux, 823 - Santo Amaro, São Paulo - SP, 04696-000
                    </Card.Text>
                    <Card.Text>
                        Siga-nos nas redes sociais:
                    </Card.Text>
                    <Card.Text>
                        <a href="https://www.facebook.com/anthill" target="_blank" rel="noopener noreferrer">Facebook</a> |{' '}
                        <a href="https://twitter.com/anthill" target="_blank" rel="noopener noreferrer">Twitter</a> |{' '}
                        <a href="https://www.instagram.com/anthill" target="_blank" rel="noopener noreferrer">Instagram</a>
                    </Card.Text>
                    <Card.Text>
                        <a href="/">Página inicial</a> |{' '}
                        <a href="/termos" variant="primary" onClick={handleLaunch} disabled={accepted} >Termos de serviço</a> |{' '}
                        <Modal
                            show={show}
                            onHide={handleClose}
                            backdrop="static"
                            keyboard={false}
                            size="lg"
                            centered
                        >
                            <Modal.Header closeButton>
                                <Modal.Title>Termos de Uso e Política de Privacidade</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <p>Bem-vindo ao nosso sistema de gestão de condomínios. Ao acessar ou utilizar nosso sistema, você concorda com estes Termos de Uso e com nossa Política de Privacidade, em conformidade com a Lei Geral de Proteção de Dados (LGPD).</p>
                                <p>1. Cadastro e Consentimento</p>
                                <p>1.1 Para utilizar nosso sistema, você precisa se cadastrar e criar uma conta. Ao se cadastrar, você concorda com a coleta e o processamento de seus dados pessoais de acordo com nossa Política de Privacidade.</p>
                                <p>2. Uso do Sistema e Dados Pessoais</p>
                                <p>2.1 Você concorda em usar nosso sistema apenas para as finalidades especificadas e consentidas. Os dados pessoais coletados serão utilizados para fornecer e melhorar nossos serviços, conforme descrito em nossa Política de Privacidade.</p>
                                <p>3. Direitos do Titular dos Dados</p>
                                <p>3.1 Você tem o direito de acessar, corrigir, atualizar e solicitar a exclusão de seus dados pessoais. Você pode exercer esses direitos entrando em contato conosco.</p>
                                <p>4. Compartilhamento de Dados</p>
                                <p>4.1 Podemos compartilhar seus dados pessoais com terceiros apenas quando necessário para fornecer nossos serviços ou quando exigido por lei.</p>
                                <p>5. Segurança dos Dados</p>
                                <p>5.1 Implementamos medidas de segurança adequadas para proteger seus dados pessoais contra acesso não autorizado, alteração, divulgação ou destruição.</p>
                                <p>6. Retenção de Dados</p>
                                <p>6.1 Manteremos seus dados pessoais apenas pelo tempo necessário para cumprir as finalidades para as quais foram coletados ou conforme exigido por lei.</p>
                                <p>7. Modificações</p>
                                <p>7.1 Podemos atualizar ou modificar estes Termos de Uso e nossa Política de Privacidade periodicamente. Quaisquer alterações serão publicadas em nosso sistema.</p>
                                <p>7.2 O uso contínuo de nosso sistema após tais modificações constitui sua aceitação dos novos Termos de Uso e Política de Privacidade.</p>
                                <p>8. Rescisão</p>
                                <p>8.1 Podemos encerrar ou suspender sua conta e acesso ao sistema, a nosso critério, sem aviso prévio ou responsabilidade.</p>
                                <p>9. Disposições Gerais</p>
                                <p>9.1 Estes Termos de Uso e Política de Privacidade constituem o acordo completo entre você e nós em relação ao uso de nosso sistema.</p>
                                <p>9.2 Estes Termos de Uso e Política de Privacidade serão regidos e interpretados de acordo com as leis do Brasil.</p>
                                <p>Este modelo está em conformidade com a LGPD, mas é importante adaptá-lo às especificidades do seu sistema e buscar orientação legal para garantir total conformidade com a legislação.</p>
                                <Form.Check
                                    type="checkbox"
                                    label="Eu li e concordo com os Termos de Uso e Política de Privacidade"
                                    onChange={(e) => setAccepted(e.target.checked)}
                                />
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose}>
                                    Recusar tudo
                                </Button>
                                <Button variant="primary" onClick={handleAccept} disabled={!accepted}>
                                    Aceitar tudo
                                </Button>
                            </Modal.Footer>
                        </Modal>
                        <a href="/privacidade">Política de privacidade</a>
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted">Copyright © 2024 Anthill. Todos os direitos reservados.</Card.Footer>
            </Card>
        </>
    );
}
export default Home;
