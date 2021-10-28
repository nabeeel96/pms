import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const data = {
  labels: ['Green','Yellow'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19],
      backgroundColor: [
        'rgb(53, 169, 137)',
        'rgb(247, 224, 121)',
        
      ],
      borderColor: [
        'rgb(53, 169, 137)',
        'rgb(247, 224, 121)',
        
      ],
      borderWidth: 1,
    },
  ],
};

const DoughnutChart = () => (
  <>
    <div className='header'>
      <h1 className='title'>Doughnut Chart</h1>
      
    </div>
    <Doughnut data={data} />
  </>
);

export default DoughnutChart;