import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import logoLogin from "../images/logoLogin.jpeg";

const Login = () => {
  return (
    <div>
      <div className="container d-flex justify-content-center align-items-center min-vh-100">
        <div className="row border rounded-5 p-3 bg-white shadow box-area">
          <div className="col-md-6 rounded-4 d-flex justify-content-center align-items-center flex-column left-box" >
            <div className="featured-image mb-3">
              <img
                src={logoLogin}
                style={{ width: "350px", borderRadius: "10px" }}
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
              <div className="input-group mb-3">
                <input type="text" className="form-control form-control-lg bg-light fs-6" placeholder="Email" />
              </div>
              <div className="input-group mb-1">
                <input type="password" className="form-control form-control-lg bg-light fs-6" placeholder="Senha" />
              </div>
              <div className="input-group mb-5 d-flex justify-content-between">
                <div className="form-check">
                  <input type="checkbox" className="form-check-input" id="formCheck" />
                  <label htmlFor="formCheck" className="form-check-label text-secondary"><small>Sou adminstrador</small></label>
                </div>
                <div className="forgot">
                  <small><a href="#">Esqueceu a senha?</a></small>
                </div>
              </div>
              <div className="input-group mb-3">
                <button className="btn btn-lg btn-primary w-100 fs-6">Login</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
