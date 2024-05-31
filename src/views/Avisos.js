import React from 'react';
import {
  CButton,
  CCard,
  CCardBody,
  CCol,
  CRow,
  
} from '@coreui/react'
import CIcon from '@coreui/icons-react';
import { cilLockLocked, cilUser } from '@coreui/icons';
import { CCardHeader } from '@coreui/react/dist/esm';

export default () =>{
    return(
        <CRow>
            <CCol>
                <h2>Mural de Avisos</h2>
                    <CCard>
                        <CCardHeader>
                            <CButton color="primary">
                            Novo Aviso 
                            </CButton>
                        </CCardHeader>
                        <CCardBody>
                            ...
                        </CCardBody>
                    </CCard>
            </CCol>
        </CRow>
    );
}