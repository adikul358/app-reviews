import React, { useState } from 'react';
import { Bar, Line } from 'react-chartjs-2';
import 'daisyui/dist/full.css';
import { MdOutlineTableChart, MdInsertChartOutlined } from "react-icons/md";
import DashboardContainer from '../DashboardContainer';
import { plugin } from 'mongoose';

export default function KeywordTrendline() {
  const reviewData = [
    {
      keyword: 'Keyword 1', tally: {
        "Jul 2024": 23,
        "Jun 2024": 12,
        "May 2024": 6,
        "Apr 2024": 25,
        "Mar 2024": 76,
        "Feb 2024": 3,
        "Jan 2024": 2,
      },
    },
    {
      keyword: 'Keywordkeywordkeywordkeywordkeywordkeyword 2', tally: {
        "Jul 2024": 12,
        "Jun 2024": 8,
        "May 2024": 6,
        "Apr 2024": 2,
        "Mar 2024": 7,
        "Feb 2024": 3,
        "Jan 2024": 2,
      },
    },
    {
      keyword: 'Keyword 3', tally: {
        "Jul 2024": 23,
        "Jun 2024": 48,
        "May 2024": 63,
        "Apr 2024": 25,
        "Mar 2024": 76,
        "Feb 2024": 52,
        "Jan 2024": 21,
      },
    },
  ];

  const [selectedKeyword, setSelectedKeyword] = useState(reviewData[0].keyword)
  const selectedKeywordIndex = reviewData.findIndex(({ keyword }) => (keyword == selectedKeyword))

  const data = {
    labels: Object.keys(reviewData[selectedKeywordIndex].tally),
    datasets: [
      {
        label: selectedKeyword,
        data: Object.values(reviewData[selectedKeywordIndex].tally),
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
        <Line id={22} data={data} options={options} className="" />
      </div>
    </DashboardContainer>
  );
};