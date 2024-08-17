import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import DashboardContainer from '../DashboardContainer';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const ThirdGraph = () => {
  const barData = {
    labels: ['Battery Issues'],
    datasets: [
      {
        label: 'Positive',
        data: [20],
        backgroundColor: '#16a34a',
      },
      {
        label: 'Negative',
        data: [30],
        backgroundColor: '#dc2626',
      },
      {
        label: 'Resolved',
        data: [50],
        backgroundColor: '#0284c7',
      },
    ],
  };

  const barOptions = {
    indexAxis: 'y',
    responsive: true,
    maintainAspectRatio: false,
    color: "rgba(255,255,255,0.8)",
    plugins: {
      legend: {
        position: 'bottom',
      },
      datalabels: {
        color: "rgba(255,255,255,0.8)"
      }
    },
    scales: {
      x: {
        min: 0,
        max: 60,
        grid: { color: "rgba(255,255,255,0.1)" },
        ticks: { color: "rgba(255,255,255,0.5)" }
      },
      y: {
        grid: { color: "rgba(255,255,255,0.1)" },
        title: {
          display: true,
          text: 'Battery Issues',
          color: "rgba(255,255,255,0.5)"
        },
        ticks: {
          display: false
        }
      }
    },
  };

  return (
    <DashboardContainer title="Insert Graph Title">
      <Bar data={barData} options={barOptions} />
    </DashboardContainer>
  )
};

export default ThirdGraph;
