import React, { useState } from 'react';
import { Bar, Line } from 'react-chartjs-2';
import 'daisyui/dist/full.css';
import { MdOutlineTableChart, MdInsertChartOutlined } from "react-icons/md";
import DashboardContainer from '../DashboardContainer';
import { plugin } from 'mongoose';

const reviewData = [
  {
    topic: "Content Library and Variety",
    tally: [
      { month: "Mar 2024", tally: 15, },
      { month: "Apr 2024", tally: 18, },
      { month: "May 2024", tally: 20, },
      { month: "Jun 2024", tally: 22, },
      { month: "Jul 2024", tally: 25, },
      { month: "Aug 2024", tally: 28, },
    ]
  },
  {
    topic: "Streaming Quality",
    tally: [
      { month: "Mar 2024", tally: 12, },
      { month: "Apr 2024", tally: 14, },
      { month: "May 2024", tally: 16, },
      { month: "Jun 2024", tally: 18, },
      { month: "Jul 2024", tally: 19, },
      { month: "Aug 2024", tally: 22, },
    ]
  },
  {
    topic: "Pricing and Subscription Plans",
    tally: [
      { month: "Mar 2024", tally: 10 },
      { month: "Apr 2024", tally: 12 },
      { month: "May 2024", tally: 15 },
      { month: "Jun 2024", tally: 18 },
      { month: "Jul 2024", tally: 20 },
      { month: "Aug 2024", tally: 25 },
    ]
  },
]


export default function TopicTrendline() {

  const [selectedTopic, setSelectedTopic] = useState(reviewData[0].topic)
  const selectedTopicIndex = reviewData.findIndex(({ topic }) => (topic == selectedTopic))

  const data = {
    labels: reviewData[selectedTopicIndex].tally.map(v => v.month),
    datasets: [
      {
        label: selectedTopic,
        data: reviewData[selectedTopicIndex].tally.map(v => v.tally),
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

  const TopicSelectBtn = (
    <div className="bg-slate-700 rounded-full pr-2">
      <select className="flex items-center justify-center w-[200px] bg-slate-700 rounded-full shadow-md text-white focus:outline-none px-3 py-1 text-sm text-ellipsis" defaultValue={selectedTopic} onChange={(e) => setSelectedTopic(e.target.value)}>
        {reviewData.map(v => (
          <option value={v.topic}>{v.topic}</option>
        ))}
      </select>
    </div>
  )

  return (
    <DashboardContainer title="Topic Tally Trendline" rightBtn={TopicSelectBtn}>
      <div className="h-full">
        <Line id={22} data={data} options={options} className="" />
      </div>
    </DashboardContainer>
  );
};