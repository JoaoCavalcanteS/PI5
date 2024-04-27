import React from 'react';
import {
  CButton,
  CCard,
  CCardBody,
  CCol,
  CRow,
  
} from '@coreui/react'
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
                        Carousel
                        </CCardBody>
                    </CCard>
            </CCol>
        </CRow>
    );
}
