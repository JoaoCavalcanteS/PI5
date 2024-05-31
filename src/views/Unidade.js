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
  CTableRow
} from '@coreui/react';

const items = [
  {
    id: 1,
    unidade: 'Unidade A',
    proprietario: 'Proprietário A',
  },
  {
    id: 2,
    unidade: 'Unidade B',
    proprietario: 'Proprietário B',
  },
  {
    id: 3,
    unidade: 'Unidade C',
    proprietario: 'Proprietário C',
  },
];

const Funcionarios = () => {
  const handleEdit = (id) => {
    // Lógica para edição
    console.log(`Editar funcionário com ID ${id}`);
  };

  const handleDelete = (id) => {
    // Lógica para exclusão
    console.log(`Excluir funcionário com  ID ${id}`);
  };

  return (
    <CRow>
      <CCol>
        <h2>Unidades</h2>
        <CCard>
          <CCardBody>
            <CTable>
              <CTableHead>
              <CButton color="primary">
                Nova Unidade
                </CButton>
                <CTableRow>
                  <CTableHeaderCell>Unidade</CTableHeaderCell>
                  <CTableHeaderCell>Proprietário</CTableHeaderCell>
                  <CTableHeaderCell>Ações</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                {items.map(item => (
                  <CTableRow key={item.id}>
                    <td>{item.unidade}</td>
                    <td>{item.proprietario}</td>
                    <td>
                      <CButton size="sm" color="info" onClick={() => handleEdit(item.id)}>Editar</CButton>{' '}
                      <CButton size="sm" color="danger" onClick={() => handleDelete(item.id)}>Excluir</CButton>
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

export default Funcionarios;
