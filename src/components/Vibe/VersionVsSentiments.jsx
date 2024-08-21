import React, { useState } from 'react';
import { Bar, Line } from 'react-chartjs-2';
import 'daisyui/dist/full.css';
import { MdOutlineTableChart, MdInsertChartOutlined, MdOutlinePercent, Md123 } from "react-icons/md";
import DashboardContainer from '../DashboardContainer';

const reviewData = [
  { 
    version: "8.1.0",
    positive: 50,
    negative: 30,
    neutral: 20
  },
  { 
    version: "8.1.1",
    positive: 55,
    negative: 28,
    neutral: 17
  },
  { 
    version: "8.1.2",
    positive: 52,
    negative: 35,
    neutral: 18
  },
  { 
    version: "8.2.0",
    positive: 60,
    negative: 32,
    neutral: 20
  },
  { 
    version: "8.2.1",
    positive: 65,
    negative: 38,
    neutral: 22
  },
  { 
    version: "8.2.2",
    positive: 70,
    negative: 40,
    neutral: 25
  },
  { 
    version: "8.3.0",
    positive: 45,
    negative: 35,
    neutral: 15
  },
  { 
    version: "8.4.0",
    positive: 62,
    negative: 45,
    neutral: 15
  },
];

export default function VersionVsSentiments() {
  const [showGraph, setShowGraph] = useState(true);
  const [showPercent, setShowPercent] = useState(false);

  const reviewDataPercentage = reviewData.map(v => {
    var sum = v.positive + v.negative + v.neutral;
    return {
      version: v.version,
      positive: (v.positive * 100 / sum),
      neutral: (v.neutral * 100 / sum),
      negative: (v.negative * 100 / sum),
    }
  })

  const data = {
    labels: reviewData.map(item => item.version),
    datasets: [
      {
        label: 'Positive',
        data: reviewData.map(item => item.positive),
        borderColor: 'rgba(75, 192, 192, 0.6)',
        fill: false,
        tension: 0.2
      },
      {
        label: 'Neutral',
        data: reviewData.map(item => item.neutral),
        borderColor: 'rgba(54, 162, 235, 0.6)',
        fill: false,
        tension: 0.2
      },
      {
        label: 'Negative',
        data: reviewData.map(item => item.negative),
        borderColor: 'rgba(255, 99, 132, 0.6)',
        fill: false,
        tension: 0.2
      },
    ],
  };

  const options = {
    responsive: true, // Make the chart responsive
    maintainAspectRatio: false,
    color: "#ffffff",
    scales: {
      x: {
        grid: { color: "rgba(255,255,255,0.1)" },
        ticks: {
          color: "rgba(255,255,255,0.5)"
        }
      },
      y: {
        grid: { color: "rgba(255,255,255,0.1)" },
        ticks: { color: "rgba(255,255,255,0.5)" },
        beginAtZero: true,
      },
    },
    plugins: {
      legend: {
        display: true,
        position: "right",
        align: "center",
        labels: {
          usePointStyle: true,
          pointStyle: "line",
          height: 14,
        },
      },
      datalabels: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            const index = context.dataIndex;
            const datasetIndex = context.datasetIndex;
            const type = datasetIndex === 0 ? 'Positive' : datasetIndex === 1 ? 'Neutral' : 'Negative';
            const value = context.raw;
            return `${type}: ${value}%`;
          },
        },
      },
    },
  };

  const toggleView = () => {
    setShowGraph(!showGraph);
  };
  const togglePercent = () => {
    setShowPercent(!showPercent);
  };

  return (
    <DashboardContainer title="Version vs. Sentiments">
      <div className="h-full">
        <div className="z-20 flex flex-row justify-end space-x-3 mb-3 absolute bottom-2 right-4">
          {!showGraph && (
            <button className="flex items-center justify-center w-12 h-12 bg-slate-800 rounded-full shadow-md text-white focus:outline-none text-xl" onClick={togglePercent} title={showPercent ? "View Count" : "View Percent"}>
              {showPercent ? <Md123 size={32} /> : <MdOutlinePercent />}
            </button>
          )}
          <button className="flex items-center justify-center w-12 h-12 bg-slate-800 rounded-full shadow-md text-white focus:outline-none text-xl" onClick={toggleView} title={showGraph ? "View Table" : "View Graph"}>
            {showGraph ? <MdOutlineTableChart /> : <MdInsertChartOutlined />}
          </button>
        </div>
        {showGraph ? (
          <Line id={22} data={data} options={options} />
        ) : (
          <table className="table">
            <thead>
              <tr className="text-white/50">
                <th>Version</th>
                <th className="text-right">Positive <br/> {showPercent ? "(%age)" : "(count)"}</th>
                <th className="text-right">Neutral <br/> {showPercent ? "(%age)" : "(count)"}</th>
                <th className="text-right">Negative <br/> {showPercent ? "(%age)" : "(count)"}</th>
              </tr>
            </thead>
            <tbody>
              {showPercent ?
                reviewDataPercentage.map((item, index) => (
                  <tr key={index}>
                    <td>{item.version}</td>
                    <td className="font-light text-right">{item.positive.toFixed(1) + "%"}</td>
                    <td className="font-light text-right">{item.neutral.toFixed(1) + "%"}</td>
                    <td className="font-light text-right">{item.negative.toFixed(1) + "%"}</td>
                  </tr>
                ))
                :
                reviewData.map((item, index) => (
                  <tr key={index}>
                    <td>{item.version}</td>
                    <td className="font-light text-right">{item.positive.toLocaleString()}</td>
                    <td className="font-light text-right">{item.neutral.toLocaleString()}</td>
                    <td className="font-light text-right">{item.negative.toLocaleString()}</td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        )}
      </div>
    </DashboardContainer>
  );
};