import React, { useState } from 'react';
import { Bar, Line } from 'react-chartjs-2';
import 'daisyui/dist/full.css';
import { MdOutlineTableChart, MdInsertChartOutlined } from "react-icons/md";
import DashboardContainer from '../DashboardContainer';

export default function TopicVsSentiments() {
    const [showGraph, setShowGraph] = useState(true);

    const reviewData = [
        { month: 'v1', positive: 80, neutral: 10, negative: 10 },
        { month: 'v2', positive: 70, neutral: 15, negative: 15 },
        { month: 'v3', positive: 60, neutral: 20, negative: 20 },
        { month: 'v4', positive: 90, neutral: 5, negative: 5 },
        { month: 'v5', positive: 50, neutral: 30, negative: 20 },
        { month: 'v6', positive: 75, neutral: 10, negative: 15 },
        { month: 'v6.1', positive: 65, neutral: 25, negative: 10 },
        { month: 'v6.2', positive: 80, neutral: 10, negative: 10 },
        { month: 'v6.3', positive: 70, neutral: 20, negative: 10 },
        { month: 'v6.4', positive: 85, neutral: 5, negative: 10 },
        { month: 'v6.5', positive: 60, neutral: 30, negative: 10 },
        { month: 'v7', positive: 40, neutral: 10, negative: 50 },
    ];

    const data = {
        labels: reviewData.slice(-8, -1).map(item => item.month),
        datasets: [
            {
                label: 'Positive',
                data: reviewData.slice(-8, -1).map(item => item.positive),
                borderColor: 'rgba(75, 192, 192, 0.6)',
                fill: false,
                tension: 0.2
            },
            {
                label: 'Neutral',
                data: reviewData.slice(-8, -1).map(item => item.neutral),
                borderColor: 'rgba(54, 162, 235, 0.6)',
                fill: false,
                tension: 0.2
            },
            {
                label: 'Negative',
                data: reviewData.slice(-8, -1).map(item => item.negative),
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
            legend: { position: "right" },
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

    return (
        <DashboardContainer title="Insert Graph Title">
            <div className="h-full">
                <div className="z-20 flex flex-row justify-end space-x-3 mb-3 absolute bottom-2 right-4">
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
                                <th>Positive (%)</th>
                                <th>Neutral (%)</th>
                                <th>Negative (%)</th>
                            </tr>
                        </thead>
                        <tbody>
                            {reviewData.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.month}</td>
                                    <td>{item.positive}</td>
                                    <td>{item.neutral}</td>
                                    <td>{item.negative}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </DashboardContainer>
    );
};