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
    unidade: '101',
    area: 'Salão de Festas',
    dataReserva: '2024-04-10',
  },
  {
    id: 2,
    unidade: '202',
    area: 'Churrasqueira',
    dataReserva: '2024-04-15',
  },
  {
    id: 3,
    unidade: '303',
    area: 'Piscina',
    dataReserva: '2024-04-20',
  },
];

const Reservas = () => {
  const handleEdit = (id) => {
    // Lógica para edição
    console.log(`Editar reserva com ID ${id}`);
  };

  const handleDelete = (id) => {
    // Lógica para exclusão
    console.log(`Excluir reserva com ID ${id}`);
  };

  return (
    <CRow>
      <CCol>
        <h2>Reservas</h2>
        <CCard>
          <CCardBody>
            <CTable>
              <CTableHead>
              <CButton color="primary">
                Nova Reserva 
                </CButton>
                <CTableRow>
                  <CTableHeaderCell>Unidade</CTableHeaderCell>
                  <CTableHeaderCell>Área</CTableHeaderCell>
                  <CTableHeaderCell>Data da Reserva</CTableHeaderCell>
                  <CTableHeaderCell>Ações</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                {items.map(item => (
                  <CTableRow key={item.id}>
                    <td>{item.unidade}</td>
                    <td>{item.area}</td>
                    <td>{item.dataReserva}</td>
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

export default Reservas;
