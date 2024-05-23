import React from 'react';

const Dashboard: React.FC = () => {
  return (
    <div>
      <h1>Dashboard</h1>

      <div className="card" style={{ width: '18rem' }}>
        <img src="https://super.abril.com.br/wp-content/uploads/2005/11/escola-2.png?crop=1&resize=1212,909" className="card-img-top" alt="Description" />
        <div className="card-body">
          <h5 className="card-title">Novidade do Apartamento</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" className="btn btn-primary">Saiba mais</a>
        </div>
      </div>

      {/* Segundo card */}
      <div className="card" style={{ width: '18rem' }}>
        <img src="https://super.abril.com.br/wp-content/uploads/2005/11/escola-2.png?crop=1&resize=1212,909" className="card-img-top" alt="Description" />
        <div className="card-body">
          <h5 className="card-title">Novidade do Apartamento</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" className="btn btn-primary">Saiba mais</a>
        </div>
      </div>

      {/* Testando responsividade do site, problemas com quebra do sidebar */}
    </div>
  );
};

export default Dashboard;