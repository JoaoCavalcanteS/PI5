import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Chart } from 'chart.js';
import { TimeScale, LinearScale, CategoryScale } from 'chart.js';
import 'chart.js/auto';
import 'chartjs-adapter-date-fns';

Chart.register(TimeScale, LinearScale, CategoryScale);

function Dashboard() {
  const [startDate, setStartDate] = useState(new Date()); // Estado para armazenar a data selecionada

  // Dados fictícios para o gráfico 
  const data = {
    labels: ['Casas', 'Blocos', 'Moradores', 'Alertas'],
    datasets: [
      {
        label: 'Número no último mês',
        data: [230, 50, 256, 50],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      }
    ]
  };

  // Opções do gráfico
  const options = {
    scales: {
      y: {
        beginAtZero: true
      },
      x: {
        type: 'category',
        labels: ['Casas', 'Blocos', 'Moradores', 'Alertas']
      }
    }
  };

  return (
    <div className='px-6'>
      <div className='container-fluid'>
        <div className='row g-3 my-2'>
          <div className='col-md-3 p-1'>
            <div className='p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded'>
              <div>
                <h3 className='fs-2'>230</h3>
                <p className='fs-5'>Casas</p> {/* Título */}
              </div>
              <i className='bi bi-house p-3 fs-1'></i> {/* Ícone */}
            </div>
          </div>
          <div className='col-md-3 p-1'>
            <div className='p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded'>
              <div>
                <h3 className='fs-2'>2450</h3>
                <p className='fs-5'>Blocos</p> {/* Título */}
              </div>
              <i className='bi bi-building p-3 fs-1'></i> {/* Ícone */}
            </div>
          </div>
          <div className='col-md-3 p-1'>
            <div className='p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded'>
              <div>
                <h3 className='fs-2'>256</h3>
                <p className='fs-5'>Moradores</p> {/* Título  */}
              </div>
              <i className='bi bi-people p-3 fs-1'></i> {/* Ícone */}
            </div>
          </div>
          <div className='col-md-3 p-1'>
            <div className='p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded'>
              <div>
                <h3 className='fs-2'>2250</h3>
                <p className='fs-5'>Alertas</p> {/* Título */}
              </div>
              <i className='bi bi-bell p-3 fs-1'></i> {/* Ícone */}
            </div>
          </div>
        </div>
        {/* começo tabela */}
        <div className='row g-3 my-2'>
        </div>
        <div className='col-md-6'>
          <div className='p-2 bg-white shadow-sm rounded'>
            <h3 className='fs-4 mb-3'>Selecione uma data</h3>
            <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} className="w-100" />
            <h3 className='fs-4 mb-2'>Gráfico do último mês</h3>
            <Line data={data} options={options} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
