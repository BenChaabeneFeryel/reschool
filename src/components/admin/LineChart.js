import React from 'react';
import {Chart as ChartJS,CategoryScale,LinearScale,PointElement,LineElement,Title,Tooltip,Legend,} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(CategoryScale,LinearScale,PointElement,LineElement,Title,Tooltip,Legend);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: false,
    },
  },
};

const labels = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Julliet'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Achat Poubelles',
      data: [12,3,8,11,7,2,8],
      borderColor: '#0476D8',
      backgroundColor: '#0476D3',
    },
    {
      label: 'Achat Déchets',
      data: [10,9,4,11,5,1,10],
      borderColor: '#F28708',
      backgroundColor: '#F28705',
    },
  ],
};

export default function LineChart() {
  return <Line options={options} data={data} />;
}
