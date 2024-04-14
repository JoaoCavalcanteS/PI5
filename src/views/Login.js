import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom';
import { Link } from 'react-router-dom';
import {
  CAlert,
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons';
import useApi from '../services/api_condominio';



const Login = () => {
  const api = useApi();
  const navigate = useNavigate();

  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [error,setError] = useState('');
 

  const handleLoginButton = async () => {
    if (email && password) {
      const result = await api.login(email,password);
      if (result.error === '') {
        localStorage.setItem('token', result.token);
        navigate('/');
      } else {
        setError(result.error);
      }
    } else {
      alert("Complete os campos abaixo");
    }
  }

  return (
    <div className="bg-body-tertiary min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={4}>
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm>
                    <h1>Login</h1>
                    <p className="text-body-secondary">Digite seus dados de acesso</p>
                    {error !== '' &&
                    
                    <CAlert color="danger">{error}</CAlert>

                    }
                  
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilUser} />
                      </CInputGroupText>
                      <CFormInput placeholder="E-mail" value={email} onChange={e=>setEmail(e.target.value)}  />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                        type="password"
                        placeholder="Senha"
                        value={password} 
                        onChange={e=>setPassword(e.target.value)} 
                      />
                    </CInputGroup>
                    <CRow>
                      <CCol xs={6}>
                        <CButton 
                        color="primary" 
                        className="px-4"
                        onClick={handleLoginButton}
                        >
                          Entrar
                        </CButton>
                      </CCol>
                      <CCol xs={6} className="text-right">
                        <CButton color="link" className="px-0">
                          Esqueceu a senha?
                        </CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Login
