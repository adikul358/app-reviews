import React from 'react';
import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';
import DashboardContainer from '../DashboardContainer';

ChartJS.register(ArcElement, Tooltip, Legend);

const PieGraph = () => {
  const pieData = {
    labels: ['Issues', 'Solved', 'Blocked'],
    datasets: [
      {
        data: [50, 30, 20],
        backgroundColor: ['#0284c7', '#16a34a', '#dc2626'],
      },
    ],
  };

  const pieOptions = {
    plugins: {
      datalabels: {
        color: "rgba(255,255,255,0.9)"
      },
      legend: {
        position: 'top',
        color: "#fff"
      },
    },
    responsive: true,
    maintainAspectRatio: false,
    color: "rgba(255,255,255,0.9)",
    borderColor: "#475569",
    borderWidth: 2
    
  };

  return (
    <DashboardContainer title="Insert Graph Title">
      <Pie data={pieData} options={pieOptions} />
    </DashboardContainer>
  )
};

export default PieGraph;
