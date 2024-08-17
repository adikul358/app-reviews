import React, { useEffect, useRef, useState } from 'react';
import { Bar, Pie, Line } from 'react-chartjs-2';
import { MdOutlineTableChart, MdInsertChartOutlined, MdOutlinePercent, Md123 } from "react-icons/md";
import DashboardContainer from '../DashboardContainer';
import { plugin } from 'mongoose';
import { Chart } from 'chart.js/auto';


export default function ReviewsVSMonth() {
  const [showGraph, setShowGraph] = useState(true);
  const [showPercent, setShowPercent] = useState(false);

  const reviewData = [
    { month: 'Jan 2023', positive: 10000, neutral: 1000, negative: 1000 },
    { month: 'Feb 2023', positive: 11000, neutral: 1500, negative: 1500 },
    { month: 'Mar 2023', positive: 15000, neutral: 2000, negative: 2000 },
    { month: 'Apr 2023', positive: 9000, neutral: 500, negative: 500 },
    { month: 'May 2023', positive: 4000, neutral: 3000, negative: 2000 },
    { month: 'Jun 2023', positive: 9500, neutral: 1000, negative: 1500 },
    { month: 'Jul 2023', positive: 500, neutral: 2500, negative: 1000 },
    { month: 'Aug 2023', positive: 6000, neutral: 1000, negative: 1000 },
    { month: 'Sep 2023', positive: 9000, neutral: 2000, negative: 1000 },
    { month: 'Oct 2023', positive: 9500, neutral: 500, negative: 1000 },
    { month: 'Nov 2023', positive: 12000, neutral: 3000, negative: 1000 },
    { month: 'Dec 2023', positive: 8000, neutral: 1500, negative: 1000 },
    { month: 'Jan 2024', positive: 10000, neutral: 1000, negative: 1000 },
    { month: 'Feb 2024', positive: 11000, neutral: 1500, negative: 1500 },
    { month: 'Mar 2024', positive: 15000, neutral: 2000, negative: 2000 },
    { month: 'Apr 2024', positive: 9000, neutral: 500, negative: 500 },
    { month: 'May 2024', positive: 4000, neutral: 3000, negative: 2000 },
    { month: 'Jun 2024', positive: 9500, neutral: 1000, negative: 1500 },
    { month: 'July 2024', positive: 500, neutral: 2500, negative: 1000 },
    { month: 'Aug 2024', positive: 6000, neutral: 1000, negative: 1000 },
    // Add more months as needed
  ];

  const reviewDataPercentage = reviewData.map(v => {
    var sum = v.positive + v.negative + v.neutral;
    return {
      month: v.month,
      positive: (v.positive * 100 / sum),
      neutral: (v.neutral * 100 / sum),
      negative: (v.negative * 100 / sum),
    }
  })
  // const [reviewDataPercentage, setReviewDataPercentage] = useState(reviewData.map(v => {
  //     var sum = v.positive + v.negative + v.neutral;
  //     return {
  //         month: v.month,
  //         positive: (v.positive*100 / sum),
  //         neutral: (v.neutral*100 / sum),
  //         negative: (v.negative*100 / sum),
  //     }
  // }))
  // useEffect(() => {
  //     setReviewDataPercentage(reviewData.map(v => {
  //         var sum = v.positive + v.negative + v.neutral;
  //         return {
  //             month: v.month,
  //             positive: (v.positive*100 / sum),
  //             neutral: (v.neutral*100 / sum),
  //             negative: (v.negative*100 / sum),
  //         }
  //     }))
  // }, [reviewData])

  const dataBar = {
    labels: reviewData.map(item => item.month),
    datasets: [
      {
        label: 'Positive',
        data: reviewData.map(item => item.positive),
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
      {
        label: 'Neutral',
        data: reviewData.map(item => item.neutral),
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
      },
      {
        label: 'Negative',
        data: reviewData.map(item => item.negative),
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
      },
    ],
  };

  const optionsBar = {
    responsive: true, // Make the chart responsive
    maintainAspectRatio: false,
    color: "#ffffff",
    scales: {
      y: {
        beginAtZero: true,
        stacked: true,
        ticks: {
          callback: function (value) {
            return value.toLocaleString(); // Display the Y-axis values with commas
          },
          color: "rgba(255,255,255,0.5)"
        },
        title: {
          display: true,
          text: 'Number of Reviews',
          color: "rgba(255,255,255,0.5)"
        },
        grid: { color: "rgba(255,255,255,0.1)" },
      },
      x: {
        ticks: { color: "rgba(255,255,255,0.5)" },
        grid: { color: "rgba(255,255,255,0.1)" },
        stacked: true,
      },
    },
    plugins: {
      tooltip: {
        callbacks: {
          label: function (context) {
            const index = context.dataIndex;
            const datasetIndex = context.datasetIndex;
            const type = datasetIndex === 0 ? 'Positive' : datasetIndex === 1 ? 'Neutral' : 'Negative';
            const count = context.raw.toLocaleString(); // Format the count with commas
            return `${type}: ${count} reviews`;
          },
        },
      },
      zoom: {
        pan: {
          enabled: true,
          mode: 'x',
        },
        zoom: {
          wheel: {
            enabled: true,
          },
          mode: 'x',
        },
      },
    },
  };

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
    <DashboardContainer title="Insert Graph Title">
      <div className="h-full">
        <div className="z-20 flex flex-row justify-end space-x-3 mb-3 absolute bottom-2 right-4">
          {showGraph ? (
            <div className="bg-slate-800 rounded-full pr-2">
              <select className="flex items-center justify-center w-[120px] h-12 bg-slate-800 rounded-full shadow-md text-white focus:outline-none px-3 text-sm" defaultValue={selectedMonth} onChange={(e) => setSelectedMonth(e.target.value)} title={showGraph ? "View Table" : "View Graph"}>
                {reviewData.map(v => (
                  <option value={v.month}>{v.month}</option>
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
                <th>Positive {showPercent ? "(%age)" : "(count)"}</th>
                <th>Neutral {showPercent ? "(%age)" : "(count)"}</th>
                <th>Negative {showPercent ? "(%age)" : "(count)"}</th>
              </tr>
            </thead>
            <tbody>
              {showPercent ?
                reviewDataPercentage.map((item, index) => (
                  <tr key={index}>
                    <td>{item.month}</td>
                    <td className="font-light text-right">{item.positive.toFixed(1) + "%"}</td>
                    <td className="font-light text-right">{item.neutral.toFixed(1) + "%"}</td>
                    <td className="font-light text-right">{item.negative.toFixed(1) + "%"}</td>
                  </tr>
                ))
                :
                reviewData.map((item, index) => (
                  <tr key={index}>
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
