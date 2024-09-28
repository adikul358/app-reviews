import React, { useEffect, useRef, useState } from 'react';
import { Pie } from 'react-chartjs-2';
import { MdOutlineTableChart, MdInsertChartOutlined, MdOutlinePercent, Md123 } from "react-icons/md";
import DashboardContainer from '../DashboardContainer';
import { plugin } from 'mongoose';
import { Chart } from 'chart.js/auto';


export default function ReviewsVSMonth() {
  const [showGraph, setShowGraph] = useState(true);
  const [showPercent, setShowPercent] = useState(false);

  const reviewData = [
    { month: 'Jan 2024', star5: 405, star4: 267, star3: 780, star2: 560, star1: 340 },
    { month: 'Feb 2024', star5: 564, star4: 258, star3: 322, star2: 863, star1: 345 },
    { month: 'Mar 2024', star5: 168, star4: 236, star3: 793, star2: 316, star1: 126 },
    { month: 'Apr 2024', star5: 231, star4: 452, star3: 624, star2: 414, star1: 416 },
    { month: 'May 2024', star5: 132, star4: 549, star3: 521, star2: 436, star1: 341 },
    { month: 'Jun 2024', star5: 524, star4: 231, star3: 542, star2: 786, star1: 235 },
    { month: 'Jul 2024', star5: 634, star4: 642, star3: 135, star2: 468, star1: 785 },
    // Add more months as needed
  ];

  const reviewDataPercentage = reviewData.map(v => {
    var sum = v.star5 + v.star4 + v.star3 + v.star2 + v.star1;
    return {
      month: v.month,
      star5: (v.star5 * 100 / sum),
      star4: (v.star4 * 100 / sum),
      star3: (v.star3 * 100 / sum),
      star2: (v.star2 * 100 / sum),
      star1: (v.star1 * 100 / sum),
    }
  })

  const [selectedMonth, setSelectedMonth] = useState(reviewData[reviewData.length - 1].month)
  const data = {
    labels: [
      "5 Star Reviews",
      "4 Star Reviews",
      "3 Star Reviews",
      "2 Star Reviews",
      "1 Star Reviews"
    ],
    datasets: [
      {
        label: reviewData[reviewData.findIndex(({ month }) => (month == selectedMonth))].month,
        data: [
          reviewData[reviewData.findIndex(({ month }) => (month == selectedMonth))].star5,
          reviewData[reviewData.findIndex(({ month }) => (month == selectedMonth))].star4,
          reviewData[reviewData.findIndex(({ month }) => (month == selectedMonth))].star3,
          reviewData[reviewData.findIndex(({ month }) => (month == selectedMonth))].star2,
          reviewData[reviewData.findIndex(({ month }) => (month == selectedMonth))].star1,
        ],
        backgroundColor: [
          "#22c55ecc",
          "#84cc16cc",
          "#f59e0bcc",
          "#f97316cc",
          "#ef4444cc"
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
    <DashboardContainer title="Review Stars Data">
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
                <th className="min-w-[120px]">Month</th>
                <th className="text-right">5 Stars <br/> {showPercent ? "(%age)" : "(count)"}</th>
                <th className="text-right">4 Stars <br/> {showPercent ? "(%age)" : "(count)"}</th>
                <th className="text-right">3 Stars <br/> {showPercent ? "(%age)" : "(count)"}</th>
                <th className="text-right">2 Stars <br/> {showPercent ? "(%age)" : "(count)"}</th>
                <th className="text-right">1 Stars <br/> {showPercent ? "(%age)" : "(count)"}</th>
              </tr>
            </thead>
            <tbody>
              {showPercent ?
                reviewDataPercentage.map((item, i) => (
                  <tr key={i}>
                    <td>{item.month}</td>
                    <td className="font-light text-right">{item.star5.toFixed(1) + "%"}</td>
                    <td className="font-light text-right">{item.star4.toFixed(1) + "%"}</td>
                    <td className="font-light text-right">{item.star3.toFixed(1) + "%"}</td>
                    <td className="font-light text-right">{item.star2.toFixed(1) + "%"}</td>
                    <td className="font-light text-right">{item.star1.toFixed(1) + "%"}</td>
                  </tr>
                ))
                :
                reviewData.map((item, i) => (
                  <tr key={i}>
                    <td>{item.month}</td>
                    <td className="font-light text-right">{item.star5}</td>
                    <td className="font-light text-right">{item.star4}</td>
                    <td className="font-light text-right">{item.star3}</td>
                    <td className="font-light text-right">{item.star2}</td>
                    <td className="font-light text-right">{item.star1}</td>
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
