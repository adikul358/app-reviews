import React, { useState } from 'react';
import { Bar, Line } from 'react-chartjs-2';
import 'daisyui/dist/full.css';
import { MdOutlineTableChart, MdInsertChartOutlined } from "react-icons/md";
import DashboardContainer from '../DashboardContainer';
import { plugin } from 'mongoose';

const reviewData = [
  {
    keyword: "Buffering",
    tally: [
      { month: "Mar 2024", tally: 8 },
      { month: "Apr 2024", tally: 10 },
      { month: "May 2024", tally: 12 },
      { month: "Jun 2024", tally: 15 },
      { month: "Jul 2024", tally: 18 },
      { month: "Aug 2024", tally: 22 },
    ]
  },
  {
    keyword: "Download",
    tally: [
      { month: "Mar 2024", tally: 5 },
      { month: "Apr 2024", tally: 7 },
      { month: "May 2024", tally: 8 },
      { month: "Jun 2024", tally: 1 },
      { month: "Jul 2024", tally: 1 },
      { month: "Aug 2024", tally: 1 },
    ]
  },
  {
    keyword: "Price",
    tally: [
      { month: "Mar 2024", tally: 4 },
      { month: "Apr 2024", tally: 6 },
      { month: "May 2024", tally: 7 },
      { month: "Jun 2024", tally: 8 },
      { month: "Jul 2024", tally: 10 },
      { month: "Aug 2024", tally: 12 },
    ]
  },
]

export default function KeywordTrendline() {

  const [selectedKeyword, setSelectedKeyword] = useState(reviewData[0].keyword)
  const selectedKeywordIndex = reviewData.findIndex(({ keyword }) => (keyword == selectedKeyword))

  const data = {
    labels: reviewData[selectedKeywordIndex].tally.map(v => v.month),
    datasets: [
      {
        label: selectedKeyword,
        data: reviewData[selectedKeywordIndex].tally.map(v => v.tally),
        borderColor: 'rgba(75, 192, 192, 0.6)',
        fill: false,
        tension: 0.2
      }
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    color: "#ffffff",
    scales: {
      x: {
        grid: { color: "rgba(255,255,255,0.1)" },
        ticks: {
          color: "rgba(255,255,255,0.5)",
          minRotation: 60,
          minRotation: 60
        }
      },
      y: {
        grid: { color: "rgba(255,255,255,0.1)" },
        ticks: { color: "rgba(255,255,255,0.5)" },
        beginAtZero: true,
      },
    },
    plugins: {
      legend: { display: false, position: "right", },
      datalabels: { display: false },
    },
  };

  const KeywordSelectBtn = (
    <div className="bg-slate-700 rounded-full pr-2">
      <select className="flex items-center justify-center w-[200px] bg-slate-700 rounded-full shadow-md text-white focus:outline-none px-3 py-1 text-sm text-ellipsis" defaultValue={selectedKeyword} onChange={(e) => setSelectedKeyword(e.target.value)}>
        {reviewData.map(v => (
          <option value={v.keyword}>{v.keyword}</option>
        ))}
      </select>
    </div>
  )

  return (
    <DashboardContainer title="Keyword Tally Trendline" rightBtn={KeywordSelectBtn}>
      <div className="h-full">
        <Line data={data} options={options} className="" />
      </div>
    </DashboardContainer>
  );
};