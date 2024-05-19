import React, { useState } from 'react';

const Avisos = () => {
  const [avisos, setAvisos] = useState([
    'Aula de matemática cancelada hoje.',
    'Feriado na próxima semana. Não haverá aula.',
    'Lembrete: Entrega do projeto até sexta-feira.',
  ]);

  const adicionarAviso = () => {
    // Lógica para adicionar um novo aviso ao estado
    // Pode ser um modal ou um formulário
  };

  return (
    <div className="avisos-container">
      <h2>Avisos</h2>
      <ul>
        {avisos.map((aviso, index) => (
          <li key={index}>{aviso}</li>
        ))}
      </ul>
      <button onClick={adicionarAviso}>Adicionar Aviso</button>
    </div>
  );
};

export default Avisos;
