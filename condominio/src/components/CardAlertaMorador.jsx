import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import { formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';  // Importando o locale para português

function CardAlertaMorador() {
  const [alertas, setAlertas] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/avisosAlertas/buscarAvisosAlertas?condominioId=1&moradorId=123')
      .then(response => {
        // Ordena os dados pela data, mais recentes primeiro
        const sortedAlertas = response.data.sort((a, b) => new Date(b.dataPost) - new Date(a.dataPost));
        setAlertas(sortedAlertas);
      })
      .catch(error => {
        console.error("Houve um erro ao buscar os dados!", error);
      });
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      {alertas.length === 0 ? (
        <p>Não há nenhum aviso/alerta no momento</p>
      ) : (
        alertas.map(alerta => (
          <Card
            key={alerta.id}
            className="text-center"
            style={{ marginBottom: '20px', width: '100%' }}
          >
            <Card.Header style={{ backgroundColor: alerta.avisoAlerta === 1 ? 'red' : 'yellow' }}>
              {alerta.titulo}
            </Card.Header>
            <Card.Body>
              <Card.Title>{alerta.titulo}</Card.Title>
              <Card.Text>
                <p>{new Date(alerta.dataPost).toLocaleDateString()}</p>
                {alerta.texto}
              </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted">
              Postado há {formatDistanceToNow(new Date(alerta.dataPost), {  locale: ptBR })}
            </Card.Footer>
          </Card>
        ))
      )}
    </div>
  );
}

export default CardAlertaMorador;
