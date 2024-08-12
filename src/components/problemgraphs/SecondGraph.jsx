import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import DashboardContainer from '../DashboardContainer';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const SecondGraph = () => {
  const lineData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [
      {
        label: 'Privacy concerns',
        data: [10, 15, 35, 23, 50],
        borderColor: '#dc2626',
        fill: false,
      },
      {
        label: 'Relevancy',
        data: [5, 15, 25, 35, 45],
        borderColor: '#0284c7',
        fill: false,
      },
      {
        label: 'Value for money',
        data: [10, 15, 35, 23, 50],
        borderColor: '#16a34a',
        fill: false,
      },
    ],
  };

  const lineOptions = {
    color: "rgba(255,255,255,0.8)",
    scales: {
      x: {
        grid: { color: "rgba(255,255,255,0.1)" },
        ticks: {
          color: "rgba(255,255,255,0.5)"
        }
      },
      y: {
        grid: { color: "rgba(255,255,255,0.1)" },
        ticks: {
          color: "rgba(255,255,255,0.5)"
        }
      },
    },
    plugins: {
      legend: {
        position: 'right',
      },
      datalabels: {
        display: false
      }
    },
    responsive: true,
    maintainAspectRatio: false,
  }

  return (
    <DashboardContainer title="Insert Graph Title" >
      <Line data={lineData} options={lineOptions} />
    </DashboardContainer >
  );
};

export default SecondGraph;
