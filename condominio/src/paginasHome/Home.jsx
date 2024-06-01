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

function Home() {
    const [modalShowBasic, setModalShowBasic] = useState(false);
    const [modalShowPremium, setModalShowPremium] = useState(false);

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
                        src="data:image/jpeg;base64,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"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUTEhMVFhUVGRgYFRgYGRkZGBcXFx4YFxYXFRUYHSggGBolGxUVITEhJSkrLi4uFx8zODMtNygtLi0BCgoKBQUFDgUFDisZExkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAKgBLAMBIgACEQEDEQH/xAAYAAEBAQEBAAAAAAAAAAAAAAABAgADB//EACsQAAEDAwQCAgIDAQADAAAAAAEAESExQVFxgcHwYZECsaHRA+HxEiIyYv/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwDx8mRJ6SpB/wDo2yMpNRHXKkUpjlBQ+UibecZQTH/sfybJBkR1lNqetEFkyZND9BT/ANQJN8+FjUxbhY6Z4QJNZ+8rA0n7yg3jrrC0dcoM9ZNsnKoGRPWUi8Y5WFRFuEGeKn8iyT8pM284yptT3okmTFj9IMTFc58JJrJv9qTSmeFRqY66DA0k9KwNf/LGRlAtHXWF4xygR8pE28/aP+oqfybLAyIwgUp1kFkzU04Un5RU3yMLHS3CDSmeEFH5SZ+8rPSfvKDUxn7WxHXQP/VZPSsDIk25RmFhURb9oMDH/sa+RYpPymtvOMqbUxXQpeaW4QYmKmpycKiZMm/Cg0pnhUamOwgz0k9Kz1/8vvKMR11sx10CPlInGfN0f9RU2ybFIMiMcqRSl7aFBTzW3CP+oqb5GFtrcINKe9kFH5SZznwsTSfvKxMmMoxHXQJNZP5yo/k+RiTT9qsx11HzNIeP2g6monrlTauK7pJDjtypBGMX1QUKif1RTavrRIqItxhDhqcWQUambb0QbTmuyxIc6H6QSGG/CCjefeqwtPXKC0x+fKwaI/PlBhecU3SKibb0UgiYxykEONvpAWr70VGpm21FLhqN+bJNTFs+MINauabJNTPXUkhqZ4SSHO/2g2J662ZxXdYGnbocTGOUFCon9XUilfWiRURar62Q4IpxZBRrW29EfKlc12WJDnThBIApnhBRvOdKoFp66xZzHXWiI/PlBhefWqRUTjW6kETHXSCHG3KAtX3oqOttqKHDUvrYqjpbPjCAtXNNlRqZypLNS54SSHO/2EGxPvVbM+9UOI7dMTH58oH42nGl1IpW9tCn41EfnWyAQ1MeLFA3rbeixpX3ss4fbhBZqZ84QUamc8IxPrVb5M5jsLREX5QbM+tVP8gpIpdU4nt1H8jRog6l3E9cqfi+cU3SWcV6SpDN6pugoO4pTemEF2r70WDOO2Uw370QWXmbcBDlq5pssWc1ptRBZhW9NkFS5ke/K0xI6UFp7dYERt9oM5mcV3SHiespDTW1d0iorTahQYO1fWiS7mlN6YUQ19tFRIc6cIN8naovU6JLzPXUlm912SWc16UCCYnroDzOKFYNFelAadqboKDuJHufSC7V96LAhxtyphr1vogsvm3CHLVzTZYtNabUQWa9TTZBRdzIv9omJHSsWc7/AGhxHboKczPtb4vE45RE1tVYM4rTa6DB2r60KSS9qb0woDNe1NCqJD7cIN8naovU6JJLmc8KSze67JLOa8WQIJieutMyNtVMRXpTE8aoEO4kW1vZDlq4roVgzjblAZr1voUFTm3CHLVzTZaPNNqILNettkFF3Mi+qC8SPflYs534REc6oKJMz71UfMmGNrKomu+qj5tFaW3QdS7jtypD/WBlJAcduVIbzau6Cg7jtkS2PRssKitNqKYa+2iCy7nTjCCC3vHhYgOdD9BBZhvXZBRef6ysHj+soLTXpWDRXpQIf6wcrB3HbKQ07U3SAHHbFBpbPoWSXnTxjKhg199FRZzWm1EGLt7x4SXnt1JZr3psks53+0DMdutM7YGUBo7dAaa2rugoPCJbHo2WDOK0Gl1MNfbRBZf8cILt7x4WIDnThBZvddkFF3O+LFaY/rKCzmvSsGivSgZn+srB42UxO1NUgBxtyg0tn0LJn8cZUQ1630Kot5ptRBi7e8HCS7nf8qSzXqabJLOd/sIFjH9ZWmf6ypiO3TE131QIdxtjygO2KYNit8WcVtpdSGa9qaFBc/jhBBb/AAYWh9uEFm912QUXc748XWmP6ygs5rfSyIiteUFTP9ZUfP4ktp4TE8aqP5QI0/aDsaiBzUqWOMV3SaieuVIAarU5QUHiI/FEMWp60WAkdspYNV/8QWRJgU3ogvgXrssambcZQQGE54QUXmPeqweI9aoIE9usBTt0GDzAtTdIqIHKkATOOUiom3GUGLtT3okvMW2ooYNVvzZUQHOnCDEFqZpsk1MDbVSQGrnhJEmeugcQOarMZjFUC09dAAmccoKDxGNEB2p60WAkbcqWDVedLILImgpvRBdqC9dljUzbjKCA1WrwgovMZrqsxiPWqCJM5+1mp26BDzHpYVEC2t0MJnFvK3xqJsOboMxanvQpL4ttRQwarU82KogPtwgxBamabJNTA5spIDVzwk1MoNiBvqljMe9UNSeus1Z66BDxGOUB2p60KwEjblAAarzpYoKbwKb0QXanvZa9bcZQQGq08BBRdzGUMYj1qsRJ34Q1J66CpmBtqo/kJiBS4VNWeuo/kaJaME5QdTUR1ypGmKbqjUT1ypGuKboMKiLcINKe9FQqJtwpNK+3wgomTFj9KTSmabKjUzY/QRYTmmyDG8ddYWjrlY3nrrYnroMLxiu6QZEY+kZnFd0ion9UKCbU9aJNTFt6ItX0+FRqZtwgDSma7JN4z9oNK5rsk3nP2gBaOusLxim6wtPXWF5xR0CKiLb3U2p70VComwU2r70QUTNLcKTSmabKjWttqKTSuabIKNTHXRiOuk1M9dGJ66DZjFdUiojHKMz71SKicaXQSKU9aJ2tvRApW9nwUmtbcIA0pmuyo1MZUmlc12VGpnPCAxHXWzHrVbE9dbM+tUGFRHZQKUxXQp+NRONbotXFXwUFPNLcKTSmabKt7cKbVzTZBRqYzwjEddJqZzwjE9dBsx71UfyCkWVm8+9VH8lptbdB0NRHXKkGKY8ZVl3EjmpUuWrip1QYEOO2Q7CnNlQeJ/VEB2r6PhBjUxbjCC0RnhUXcyKb0R8nyL1OiDE17dYGnblJeZ96rAmJ66CQRMY85SKiLZ8YW+LzOKHVIdxI5ogl4pxZJIc6H6WLtX2fCS8zbaiCSYpnhJqY66zlq5psmXMjpQAtHXQDWMKpiR7mqzmZxXdAAhxtyphqX1srDxP6ugO1fR8IMamLZ8YQWameFRdzIpvRHydq5qdEGJDnf7WcR26S8zn7WDxPXQETCwqIsL62WDzPopDuJFtUE2pjxYpJD7cLS1feiS+bbUQSSGpnzhJqYWctXNNkl3Mi+qAiI/PlZ6x11i8T7PlJJmfeqABkbcoDNS+tiq+LxONLoDtX1oUG2txhBIal9LBVL1FN6I+TtX2dEGJk78IekddUXcznSyzmJ9aoCJj8+VHzIiHjLZXSZn0fKj+QUkUuUFlnHblSG82rurLv3JUh/rBygwZxWm1FLhv1orDuO2wiWz6FkGJDnQ/SCzDfhUXc6eMIlvePCDFpr0rBor0pLz26weO3QSGnam6QQ42+kh52wMrB47ZBENvfRUWc1pwtLf4bJLudOMIJLNe9Nkkhzv8AaxdvePCS89oUA4jt0RNbV3VB47dYPO2EAGcVptdTDfrRWHcbdZEt/gsgxIc6cILN7rsqL/jhBdvePCDFnNekLBor0pLud/taY/rKCXE8apBDjblMz/QWDx3KCYa9b6FJbzTaiwdsejYpn8cYQSWbc02SWc7/AGsXb3gYSXc78IJcR26Ymu+qZj+srTP9ZQHxZxW2l1IZvVNCrDuNubIlv8Figzh9uEFm912VT+OEF2/w4Qb5M5rT9IiK15VF3O/WRMf1lBnE9uuf8hEaLrM/1lR8yY08ILLOK8VKkM3qm6su4jrlSHxim6DBnHbKYa++isCRA5ogu1PeiDFnNabUQWit6bKi8xbhDFqZpsgxaeNVg0duUl5gbarB4gdKCQ01tXdIqK02osxxiu6Q8RH9IIhr1toqLOdD9LAFqetEl3MCm9EElm912SWc16Vi+BeuySDMddABor0oDTtyqDxHXWDzGKboAM425Uw1630Viogc3QxanvRBizmtNqILNe9NlRfFuEEFqZpsgxZzv9oiO3VF3MDmq0xA6UExNbV1SGcVoNLpYzHvVYPEYQRDXtTRUWfbhYO1PWiW8Cm9EElm912SWc14ssXama7JLzGUExFelaJ41VMYj1qtMx61QAZxtypDNet9CrFRA5uiWpiuhQb3TaiCzXrbQKpxDcIYtTNNkGLOd+ERHbqi7mM62RMQN9UGia76qPm0VpZvK6TMe9VHz+JhhayCyJHblSAGq9OVRqI65QNMV3QYVE24ypYNVvzZWDIj9UU2p60QJAc6H6QQGG/Co1MW3oEHTNdkGIrPXWFp65Sbx71QLR1ygABM45SAHHbLC8YpukVEW3QQwar/AIsqNTNuMotT3oqJkxbhBJAaueEkCd/tBpTNNlRqY66AAp26ABM45SLR11sxiqDCom2NbqWDV5srFowptT1ogSA504QQG98JOlt6LGlM12QYiTPXWYRP48pNTGftGI66AYTt9lIAcaDlbMekioj93QQwarzpYqjrbjKLUxXQpfxbaiAIDVaTwkgOd/sINKZpsqNTGdbIJYR26WEz11sR71WzHvVBvjUTi2t1IAarU+irFRGNLqRSnrQoFg+3CCA1c8J2tvRBpT3sgTUznhDCJ/HlUamM8IxHrVBmE9uuf8oEaftdMx61U/M0gUvug6GonrlRauOVlkFASJ6ym1fsWWWQUambcINpzwhZAm89dYWnrlZZBhecZ8rCom3nCyyAtX25sqNTNuELIC1c8KjUz10LINieutmccrLIEVE45Uilb2cWWWQJqZtwg0rnPhZZBRqZz9oFp66yyDC8/eVhUTYcrLIC1fb4Kre3CFkAaVzTZJqZzwssg2J+8rG89dZZA/GonHKkUrez4KyyBvW3CDSt/OAssgo1M54Rieussg2Z66j+S028+UrIP//Z"
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="data:image/jpeg;base64,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"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
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
                        <Card.Img variant="top" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAA1BMVEUAAACnej3aAAAASElEQVR4nO3BgQAAAADDoPlTX+AIVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDcaiAAFXD1ujAAAAAElFTkSuQmCC" />
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
                        <Card.Img variant="top" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAA1BMVEUAAACnej3aAAAASElEQVR4nO3BgQAAAADDoPlTX+AIVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDcaiAAFXD1ujAAAAAElFTkSuQmCC" />
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
                                Contribui para a segurança e o controle de acesso no condomínio, registrando e monitorando as entradas de visitantes e entregadores. Ajuda a prevenir intrusões não autorizadas e a garantir que apenas pessoas permitidas tenham acesso às instalações.
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
                                Permite à administração manter um registro completo dos funcionários do condomínio, incluindo dados pessoais, horários de trabalho e funções desempenhadas. Facilita a gestão de recursos humanos e o cumprimento das obrigações trabalhistas.
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
                                Simplifica o gerenciamento das unidades habitacionais e dos blocos dentro do condomínio. Mantém um registro organizado da estrutura física do empreendimento, facilitando a identificação de proprietários, inquilinos e áreas comuns associadas a cada unidade.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>



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
                            <Form.Control placeholder="Apartment, studio, or floor" />
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
                                        gestão eficiente do nosso condomínio!
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
                        <a href="/termos">Termos de serviço</a> |{' '}
                        <a href="/privacidade">Política de privacidade</a>
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted">Copyright © 2024 Anthill. Todos os direitos reservados.</Card.Footer>
            </Card>

        </>
    );
}

export default Home;
