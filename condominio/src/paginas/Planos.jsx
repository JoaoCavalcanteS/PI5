import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Placeholder from 'react-bootstrap/Placeholder';
import Modal from 'react-bootstrap/Modal';

function Planos() {

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

    const [modalShowBasic, setModalShowBasic] = React.useState(false);
    const [modalShowPremium, setModalShowPremium] = React.useState(false);

    return (
        <>
            <h1 style={{ textAlign: 'center' }}>Escolha seu plano:</h1>
            <br />
            <div className="d-flex justify-content-around">
                <Card style={{ width: '26rem' }}>
                    <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-TVfPispzqRG0kmowucD8qrKrjVP0iE2KPw&s" />
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
                        <Button variant="primary">Eu quero!</Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '26rem' }}>
                    <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-TVfPispzqRG0kmowucD8qrKrjVP0iE2KPw&s" />
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
                        <Button variant="primary">Eu quero!</Button>
                    </Card.Body>
                </Card>
            </div>
        </>
    );
}

export default Planos;
