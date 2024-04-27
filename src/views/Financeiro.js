import React from 'react';
import {
  CButton,
  CCard,
  CCardBody,
  CCol,
  CRow,
  CTable,
  CTableBody,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CFormCheck
} from '@coreui/react';

const items = [
  {
    id: 1,
    morador: 'João',
    tipoConta: 'Água',
    valor: 'R$ 100,00',
    dataPagamento: '2024-04-01',
    atrasado: true,
  },
  {
    id: 2,
    morador: 'Maria',
    tipoConta: 'Luz',
    valor: 'R$ 150,00',
    dataPagamento: '2024-04-05',
    atrasado: false,
  },
  {
    id: 3,
    morador: 'Carlos',
    tipoConta: 'Internet',
    valor: 'R$ 80,00',
    dataPagamento: '2024-04-10',
    atrasado: true,
  },
];

const Contas = () => {
  const handleEdit = (id) => {
    // Lógica para edição
    console.log(`Editar conta com ID ${id}`);
  };

  const handleDelete = (id) => {
    // Lógica para exclusão
    console.log(`Excluir conta com ID ${id}`);
  };

  return (
    <CRow>
      <CCol>
        <h2>Contas</h2>
        <CCard>
          <CCardBody>
            <CTable>
              <CTableHead>
              <CButton color="primary">
                Nova Conta
                </CButton>
                <CTableRow>
                  <CTableHeaderCell>Morador</CTableHeaderCell>
                  <CTableHeaderCell>Tipo de Conta</CTableHeaderCell>
                  <CTableHeaderCell>Valor</CTableHeaderCell>
                  <CTableHeaderCell>Data do Pagamento</CTableHeaderCell>
                  <CTableHeaderCell>Atrasado</CTableHeaderCell>
                  <CTableHeaderCell>Ações</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                {items.map(item => (
                  <CTableRow key={item.id}>
                    <td>{item.morador}</td>
                    <td>{item.tipoConta}</td>
                    <td>{item.valor}</td>
                    <td>{item.dataPagamento}</td>
                    <td><CFormCheck type="checkbox" disabled checked={item.atrasado} /></td>
                    <td>
                      <CButton size="sm" color="info" onClick={() => handleEdit(item.id)}>Editar</CButton>{' '}
                      <CButton size="sm" color="danger" onClick={() => handleDelete(item.id)}>Apagar</CButton>
                    </td>
                  </CTableRow>
                ))}
              </CTableBody>
            </CTable>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  );
};

export default Contas;
