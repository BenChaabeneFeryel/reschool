import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ['Plastique', 'Carton', 'Composte', 'Canettes'],
  datasets: [
    {
      label: 'Total Déchets',
      data: [12, 19, 3, 5],
      backgroundColor: [
        '#0476D9',
        '#F28705',
        '#F2DF80',
        '#08A66C',
      ],
      borderColor: [
        '#0476D9',
        '#F28705',
        '#F2DF80',
        '#08A66C',
      ],
      borderWidth: 1,
    },
  ],
};

export default function DoughnutChart() {
  return <Doughnut data={data} options={{responsive: true,maintainAspectRatio: true,}} />;
}
