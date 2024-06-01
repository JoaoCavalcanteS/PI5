import React from 'react';

function Dashboard() {
  return (
    <div className='px-6'>

      <div className='container-fluid'>
        <div className='row g-3 my-2'>
          <div className='col-md-3 p-1'>
            <div className='p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded'>
              <div>
                <h3 className='fs-2'>230</h3>
                <p className='fs-5'>Compras</p>
              </div>
              <i className='bi bi-cart-plus p-3 fs-1'></i>
            </div>
          </div>
          <div className='col-md-3 p-1'>
            <div className='p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded'>
              <div>
                <h3 className='fs-2'>2450</h3>
                <p className='fs-5'>Vendas</p>
              </div>
              <i className='bi bi-currency-dollar p-3 fs-1'></i>
            </div>
          </div>
          <div className='col-md-3 p-1'>
            <div className='p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded'>
              <div>
                <h3 className='fs-2'>2250</h3>
                <p className='fs-5'>Entregas</p>
              </div>
              <i className='bi bi-truck p-3 fs-1'></i>
            </div>
          </div>
          <div className='col-md-3 p-1'>
            <div className='p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded'>
              <div>
                <h3 className='fs-2'>20%</h3>
                <p className='fs-5'>Aumento</p>
              </div>
              <i className='bi bi-graph-up-arrow p-3 fs-1'></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
