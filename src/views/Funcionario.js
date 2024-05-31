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

const columns = [
  {
    key: 'id',
    label: 'ID',
    _props: { scope: 'col' },
  },
  {
    key: 'nome',
    label: 'Nome',
    _props: { scope: 'col' },
  },
  {
    key: 'email',
    label: 'E-mail',
    _props: { scope: 'col' },
  },
  {
    key: 'senha',
    label: 'Senha',
    _props: { scope: 'col' },
  },
  {
    key: 'dataNascimento',
    label: 'Data de Nascimento',
    _props: { scope: 'col' },
  },
  {
    key: 'funcao',
    label: 'Função',
    _props: { scope: 'col' },
  },
  {
    key: 'actions',
    label: 'Ações',
    _props: { scope: 'col' },
  },
];

const items = [
  {
    id: 1,
    nome: 'Mark',
    email: 'mark@example.com',
    senha: '12345',
    dataNascimento: '01/01/1990',
    funcao: 'Desenvolvedor',
  },
  {
    id: 2,
    nome: 'Jacob',
    email: 'jacob@example.com',
    senha: '12345',
    dataNascimento: '02/02/1991',
    funcao: 'Designer',
  },
  {
    id: 3,
    nome: 'Larry',
    email: 'larry@example.com',
    senha: '12345',
    dataNascimento: '03/03/1992',
    funcao: 'Gerente de Projeto',
  },
];

const Funcionarios = () => {
  const handleEdit = (id) => {
    // Lógica para edição
    console.log(`Editar funcionário com ID ${id}`);
  };

  const handleDelete = (id) => {
    // Lógica para exclusão
    console.log(`Excluir funcionário com ID ${id}`);
  };

  return (
    <CRow>
      <CCol>
        <h2>Funcionários</h2>
        <CCard>
          <CCardBody>
            <CTable>
              <CTableHead>
              <CButton color="primary">
                Novo Funcionário 
                </CButton>
                <CTableRow>
                  {columns.map(column => (
                    <CTableHeaderCell {...column._props}>{column.label}</CTableHeaderCell>
                  ))}
                </CTableRow>
              </CTableHead>
              <CTableBody>
                {items.map(item => (
                  <CTableRow key={item.id}>
                    {columns.map(column => (
                      <td>{column.key !== 'actions' ? item[column.key] : (
                        <div>
                          <CButton size="sm" color="info" onClick={() => handleEdit(item.id)}>Editar</CButton>{' '}
                          <CButton size="sm" color="danger" onClick={() => handleDelete(item.id)}>Excluir</CButton>
                        </div>
                      )}</td>
                    ))}
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

