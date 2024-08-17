import React from 'react';
import { MdOutlineFileDownload } from "react-icons/md";
import ReviewsTable from '../ReviewsTable';
import DashboardContainer from '../DashboardContainer';


export default function AllReviewsTable() {
  const downloadCSV = () => {
    const headers = data.length ? Object.keys(data[0]) : [];
    const csvRows = [];

    // Add headers
    csvRows.push(headers.join(','));

    // Add data rows
    for (const row of data) {
      const values = headers.map(header => {
        const escaped = ('' + row[header]).replace(/"/g, '\\"');
        return `"${escaped}"`;
      });
      csvRows.push(values.join(','));
    }

    const csvString = csvRows.join('\n');
    const blob = new Blob([csvString], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'data.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const CSVBtn = (
    <button
      className="bg-slate-600 text-white hover:bg-slate-700 focus:outline-none rounded-full px-4 py-1 text-sm flex items-center space-x-1"
      onClick={downloadCSV}
    >
      <span className="text-xl"><MdOutlineFileDownload /></span>
      <span>Export to CSV</span>
    </button>
  )

  const headers = data.length ? Object.keys(data[0]) : [];


  return (
    <DashboardContainer title="Reviews" rightBtn={CSVBtn}>
      <ReviewsTable data={data} />
    </DashboardContainer>
  );
}



const data = [
  { "S.no.": 1, "Type of Review": "Non-Actionable Review", "Platform": "Play Store","Month": "Jan 2024", "Sentiment": "Positive", "Platforma": "Play Store","Montha": "Jan 2024", "Sentimenta": "Positive", "Review Content": "Too many ads, very annoying. Lorem ipsum  orem ipsum  orem ipsum  orem ipsum  orem ipsum  orem ipsum   " },
  { "S.no.": 2, "Type of Review": "Non-Actionable Review", "Platform": "App Store","Month": "Jan 2024", "Sentiment": "Negative", "Platforma": "Play Store","Montha": "Jan 2024", "Sentimenta": "Positive", "Review Content": "Too many ads, very annoying. Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum  " },
  { "S.no.": 3, "Type of Review": "Actionable Review", "Platform": "Play Store","Month": "Jan 2024", "Sentiment": "Neutral", "Platforma": "Play Store","Montha": "Jan 2024", "Sentimenta": "Positive", "Review Content": "The app crashes frequently." },
];
