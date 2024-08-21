import { Bar } from "react-chartjs-2";
import DashboardContainer from "../DashboardContainer";
import { Ticks } from "chart.js";

const reviewData = [
  {
    topic: "User Interface",
    negative: 0.46,
    positive: 0.25,
    neutral: 0.29
  },
  {
    topic: "Transaction Speed",
    negative: 0.30,
    positive: 0.50,
    neutral: 0.20
  },
  {
    topic: "Customer Support",
    negative: 0.55,
    positive: 0.20,
    neutral: 0.25
  },
  {
    topic: "Security Features",
    negative: 0.10,
    positive: 0.70,
    neutral: 0.20
  },
  {
    topic: "Usability",
    negative: 0.25,
    positive: 0.60,
    neutral: 0.15
  },
  {
    topic: "Notifications",
    negative: 0.40,
    positive: 0.35,
    neutral: 0.25
  },
  {
    topic: "Account Management",
    negative: 0.35,
    positive: 0.40,
    neutral: 0.25
  },
  {
    topic: "Fees and Charges",
    negative: 0.60,
    positive: 0.20,
    neutral: 0.20
  },
  {
    topic: "Bug Fixes and Updates",
    negative: 0.50,
    positive: 0.30,
    neutral: 0.20
  },
  {
    topic: "App Reliability",
    negative: 0.20,
    positive: 0.60,
    neutral: 0.20
  },
]

export default function TopicVsSentiment() {

  const data = {
    labels: reviewData.map(v => v.topic),
    datasets: [
      {
        label: "Negative",
        data: reviewData.map(v => v.negative),
        backgroundColor: "rgba(255, 99, 132, 0.6)"
      },
      {
        label: "Neutral",
        data: reviewData.map(v => v.neutral),
        backgroundColor: "rgba(54, 162, 235, 0.6)"
      },
      {
        label: "Positive",
        data: reviewData.map(v => v.positive),
        backgroundColor: "rgba(75, 192, 192, 0.6)"
      },
    ],
  }

  const options = {
    plugins: {
      legend: {
        position: "right",
        align: "center",
        labels: {
          borderRadius: 4,
          useBorderRadius: true,
          usePointStyle: true,
          pointStyle: "rectRounded"
        },

      },
      tooltip: {
        callbacks: {
          label: function (context) {
            const datasetIndex = context.datasetIndex;
            const type = datasetIndex === 0 ? 'Negative' : datasetIndex === 1 ? 'Neutral' : 'Positive';
            const value = context.raw;
            return `${type}: ${(value * 100).toFixed(1)}%`;
          },
        },
      },
      datalabels: { display: false }
    },
    responsive: true, // Make the chart responsive
    maintainAspectRatio: false, // Allow the chart to resize freely
    color: "#ffffff",
    scales: {
      x: {
        stacked: true,
        ticks: { color: "#ffffffcc",
          minRotation: 30,
          maxRotation: 30,
        }
      },
      y: {
        stacked: true,
        ticks: {
          color: "#ffffff99",
          callback: function (value) {
            return (value * 100) + '%';
          },
        },
      }
    }
  }

  return (
    <DashboardContainer title="Topic vs. Sentiments">
      <Bar data={data} options={options} />
    </DashboardContainer>
  )
}