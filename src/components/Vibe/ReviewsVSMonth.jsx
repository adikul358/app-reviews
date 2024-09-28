import React, { useEffect, useRef, useState } from 'react';
import { Bar, Pie, Line } from 'react-chartjs-2';
import { MdOutlineTableChart, MdInsertChartOutlined, MdOutlinePercent, Md123 } from "react-icons/md";
import DashboardContainer from '../DashboardContainer';
import { plugin } from 'mongoose';
import { Chart } from 'chart.js/auto';

const reviewData = [
  { 
    month: "Jun 2023",
    negative: 4200,
    positive: 3200,
    neutral: 2600
  },
  { 
    month: "Jul 2023",
    negative: 4000,
    positive: 3500,
    neutral: 2500
  },
  { 
    month: "Aug 2023",
    negative: 4300,
    positive: 3300,
    neutral: 2400
  },
  { 
    month: "Sep 2023",
    negative: 4500,
    positive: 3000,
    neutral: 2500
  },
  { 
    month: "Oct 2023",
    negative: 4700,
    positive: 2500,
    neutral: 2800
  },
  { 
    month: "Nov 2023",
    negative: 4900,
    positive: 2300,
    neutral: 2800
  },
  { 
    month: "Dec 2023",
    negative: 4800,
    positive: 2400,
    neutral: 2800
  },
];

export default function ReviewsVSMonth() {
  const [showGraph, setShowGraph] = useState(true);
  const [showPercent, setShowPercent] = useState(false);

  const reviewDataPercentage = reviewData.map(v => {
    var sum = v.positive + v.negative + v.neutral;
    return {
      month: v.month,
      positive: (v.positive * 100 / sum),
      neutral: (v.neutral * 100 / sum),
      negative: (v.negative * 100 / sum),
    }
  })

  const [selectedMonth, setSelectedMonth] = useState(reviewData[reviewData.length - 1].month)
  const data = {
    labels: [
      'Positive',
      'Neutral',
      'Negative'
    ],
    datasets: [
      {
        label: reviewData[reviewData.findIndex(({ month }) => (month == selectedMonth))].month,
        data: [
          reviewData[reviewData.findIndex(({ month }) => (month == selectedMonth))].positive,
          reviewData[reviewData.findIndex(({ month }) => (month == selectedMonth))].neutral,
          reviewData[reviewData.findIndex(({ month }) => (month == selectedMonth))].negative,
        ],
        backgroundColor: [
          'rgba(75, 192, 192, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 99, 132, 0.6)'
        ]
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: true,
        position: "right",
        align: "center",
        labels: {
          borderRadius: 4,
          useBorderRadius: true,
          usePointStyle: true,
          pointStyle: "rectRounded"
        },
      },
      datalabels: {
        formatter: (value, ctx) => {
          let sum = 0;
          let dataArr = ctx.chart.data.datasets[0].data;
          dataArr.map(data => {
            sum += data;
          });
          let percentage = (value * 100 / sum).toFixed(1) + "%";
          return percentage;
        },
        color: 'rgba(255,255,255,0.9)',
        labels: {
          title: {
            font: {
              size: 16,
              weight: 400,
            }
          },
        }
      }
    },
    responsive: true, // Make the chart responsive
    maintainAspectRatio: false,
    color: "#ffffff",
    borderColor: "#475569",
    borderWidth: 2
  };

  const toggleView = () => {
    setShowGraph(!showGraph);
  };
  const togglePercent = () => {
    setShowPercent(!showPercent);
  };

  return (
    <DashboardContainer title="Reviews vs. Month">
      <div className="h-full">
        <div className="z-20 flex flex-row justify-end space-x-3 mb-3 absolute bottom-2 right-4">
          {showGraph ? (
            <div className="bg-slate-800 rounded-full pr-2">
              <select className="flex items-center justify-center w-[120px] h-12 bg-slate-800 rounded-full shadow-md text-white focus:outline-none px-3 text-sm" defaultValue={selectedMonth} onChange={(e) => setSelectedMonth(e.target.value)} title={showGraph ? "View Table" : "View Graph"}>
                {reviewData.map((v,i) => (
                  <option value={v.month} key={i}>{v.month}</option>
                ))}
              </select>
            </div>
          ) : (
            <button className="flex items-center justify-center w-12 h-12 bg-slate-800 rounded-full shadow-md text-white focus:outline-none text-xl" onClick={togglePercent} title={showPercent ? "View Count" : "View Percent"}>
              {showPercent ? <Md123 size={32} /> : <MdOutlinePercent />}
            </button>
          )}
          <button className="flex items-center justify-center w-12 h-12 bg-slate-800 rounded-full shadow-md text-white focus:outline-none text-xl" onClick={toggleView} title={showGraph ? "View Table" : "View Graph"}>
            {showGraph ? <MdOutlineTableChart /> : <MdInsertChartOutlined />}
          </button>
        </div>
        {showGraph ? (
          <Pie id={21} data={data} options={options} />
        ) : (
          <table className="table pb-20">
            <thead>
              <tr className="text-white/50">
                <th>Month</th>
                <th className="text-right">Positive <br/> {showPercent ? "(%age)" : "(count)"}</th>
                <th className="text-right">Neutral <br/> {showPercent ? "(%age)" : "(count)"}</th>
                <th className="text-right">Negative <br/> {showPercent ? "(%age)" : "(count)"}</th>
              </tr>
            </thead>
            <tbody>
              {showPercent ?
                reviewDataPercentage.map((item, i) => (
                  <tr key={i}>
                    <td>{item.month}</td>
                    <td className="font-light text-right">{item.positive.toFixed(1) + "%"}</td>
                    <td className="font-light text-right">{item.neutral.toFixed(1) + "%"}</td>
                    <td className="font-light text-right">{item.negative.toFixed(1) + "%"}</td>
                  </tr>
                ))
                :
                reviewData.map((item, i) => (
                  <tr key={i}>
                    <td>{item.month}</td>
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
