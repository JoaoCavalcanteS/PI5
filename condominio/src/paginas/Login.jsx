import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import logoLogin from "../images/logoLogin.jpeg";

const Login = () => {
  const [email, setEmail] = useState('');
  const [senha, setsenha] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [alertVariant, setAlertVariant] = useState('danger');
  const navigate = useNavigate();

  const handleLogin = async () => {
    const response = await fetch('http://localhost:8080/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, senha })
    });

    const data = await response.json();

    if (response.ok) {
      localStorage.setItem('token', data.token);
      localStorage.setItem('flag', data.flag);
      localStorage.setItem('condominioId', data.condominioId);
      if (data.flag === 1) {
        navigate.push('/dashboard');
      } else {
        navigate.push('/dashboardMorador');
      }
    } else {
      alert(data);
    }
  };

  return (
    <div>
      <div className="container d-flex justify-content-center align-items-center min-vh-100">
        <div className="row border rounded-5 p-3 bg-white shadow box-area">
          <div className="col-md-6 rounded-4 d-flex justify-content-center align-items-center flex-column left-box">
            <div className="featured-image mb-3">
              <img
                src={logoLogin}
                style={{ width: "350px", height: "600px", borderRadius: "10px" }}
                alt="Anthill"
              />
            </div>
          </div>
          <div className="col-md-6 right-box">
            <div className="row align-items-center">
              <div className="header-text mb-4">
                <h2>Olá, novamente</h2>
                <p>Estamos felizes por ter você de volta.</p>
              </div>
              <form onSubmit={handleLogin}>
                <div className="input-group mb-3">
                  <input
                    type="email"
                    className="form-control form-control-lg bg-light fs-6"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="input-group mb-1">
                  <input
                    type="password"
                    className="form-control form-control-lg bg-light fs-6"
                    placeholder="Senha"
                    value={senha}
                    onChange={(e) => setsenha(e.target.value)}
                  />
                </div>
                <div className="input-group mb-3">
                  <button type="submit" className="btn btn-lg btn-outline-primary w-100 fs-6">Login</button>
                </div>
                {showAlert && (
                  <div className={`alert alert-${alertVariant} w-100`} role="alert">
                    {alertMessage}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
