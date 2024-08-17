import React from 'react';
import { Scatter } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from 'chart.js';
import DashboardContainer from '../DashboardContainer';

ChartJS.register(CategoryScale, LinearScale, PointElement, Tooltip, Legend);

const TvsSGraph = () => {
  const scatterData = {
    datasets: [
      {
        label: 'MacOS',
        data: [
          { x: 22, y: 7 },
          { x: 22, y: 8 },
          { x: 25, y: 7 },
          { x: 25, y: 10 },
          { x: 26, y: 3 },
          { x: 26, y: 7 },
          { x: 27, y: 5 },
          { x: 27, y: 7 },
          { x: 30, y: 10 },
          { x: 31, y: 11 },
        ],
        backgroundColor: '#14b8a6',
        pointBackgroundColor: '#14b8a6',
      },
      {
        label: 'iOS App Store',
        data: [
          { x: 20, y: 4 },
          { x: 25, y: 15 },
          { x: 35, y: 25 },
          { x: 10, y: 5 },
          { x: 12, y: 6 },
          { x: 13, y: 9 },
          { x: 15, y: 3 },
          { x: 17, y: 8 },
        ],
        backgroundColor: '#0ea5e9',
        pointBackgroundColor: '#0ea5e9',
      },
      {
        label: 'Play Store',
        data: [
          { x: 1, y: 15 },
          { x: 20, y: 25 },
          { x: 30, y: 35 },
          { x: 19, y: 4 },
          { x: 20, y: 7 },
          { x: 21, y: 5 },
          { x: 23, y: 10 },
          { x: 24, y: 11 },
        ],
        backgroundColor: '#16a34a',
        pointBackgroundColor: '#16a34a',
      },
    ],
  };

  const scatterOptions = {
    color: "rgba(255,255,255,0.8)",
    plugins: {
      legend: {
        display: true,
        position: 'bottom',
      },
      datalabels: {
        display: false,
        color: "rgba(255,255,255,0.8)"
      }
    },
    scales: {
      x: {
        type: 'linear',
        position: 'bottom',
        title: {
          display: true,
          text: 'Topics',
          color: "rgba(255,255,255,0.5)", // Optional: Add color to make the label more visible
        },
        grid: { color: "rgba(255,255,255,0.1)" },
        ticks: { color: "rgba(255,255,255,0.5)" }
      },
      y: {
        type: 'linear',
        position: 'left',
        title: {
          display: true,
          text: 'Sentiments',
          color: "rgba(255,255,255,0.5)", // Optional: Add color to make the label more visible
        },
        grid: { color: "rgba(255,255,255,0.1)" },
        ticks: { color: "rgba(255,255,255,0.5)" }
      },
    },
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <DashboardContainer title="Insert Graph Title">
      <Scatter data={scatterData} options={scatterOptions} />
    </DashboardContainer>
  )
};

export default TvsSGraph;
