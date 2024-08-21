import React from 'react';
import ReviewsTable from '../ReviewsTable';
import { MdOutlineFileDownload } from "react-icons/md";
import DashboardContainer from '../DashboardContainer';

const data = [
  {
    type: "Actionable",
    platform: "Play Store",
    content: "The streaming quality is excellent, but the app freezes whenever I try to use subtitles."
  },
  {
    type: "Non-actionable",
    platform: "App Store",
    content: "I love Netflix! Always my go-to for a good movie night."
  },
  {
    type: "Actionable",
    platform: "Play Store",
    content: "I enjoy the variety of content, but the app consumes too much battery on my phone."
  },
  {
    type: "Actionable",
    platform: "App Store",
    content: "The download feature is great, but downloaded shows sometimes disappear before I can watch them."
  },
  {
    type: "Non-actionable",
    platform: "Play Store",
    content: "This app is fantastic! I watch something new every day."
  },
  {
    type: "Actionable",
    platform: "App Store",
    content: "Netflix works well most of the time, but recently it has been freezing whenever I pause a show and try to resume. "
  },
  {
    type: "Non-actionable",
    platform: "Play Store",
    content: "Best streaming app ever! So much to watch!"
  },
  {
    type: "Actionable",
    platform: "App Store",
    content: "The interface is easy to use, but I wish it had a better way to track recently watched shows."
  },
  {
    type: "Actionable",
    platform: "Play Store",
    content: "The audio quality is good, but sometimes the subtitles don't sync properly with the video."
  },
  {
    type: "Non-actionable",
    platform: "App Store",
    content: "Great app! I use it every day without any issues."
  },
  {
    type: "Actionable",
    platform: "Play Store",
    content: "Love the content, but the app crashes frequently on my Smart TV."
  },
  {
    type: "Actionable",
    platform: "App Store",
    content: "The new update improved the design, but now I can't cast shows to my TV."
  },
  {
    type: "Non-actionable",
    platform: "Play Store",
    content: "Netflix is awesome! Always find something good to watch."
  },
  {
    type: "Actionable",
    platform: "App Store",
    content: "The recommendations are spot on, but I wish there were more filter options to narrow down what I'm looking for."
  },
  {
    type: "Actionable",
    platform: "Play Store",
    content: "Streaming works well on Wi-Fi, but it's very slow on mobile data."
  },
  {
    type: "Non-actionable",
    platform: "App Store",
    content: "I can’t imagine my life without Netflix!"
  },
  {
    type: "Actionable",
    platform: "Play Store",
    content: "I appreciate the download feature, but the app should notify when a download is about to expire."
  },
  {
    type: "Actionable",
    platform: "App Store",
    content: "The content is good, but I’m frustrated that the app doesn’t let me skip intros consistently across all shows."
  },
  {
    type: "Non-actionable",
    platform: "Play Store",
    content: "Love the variety of shows and movies on Netflix!"
  },
  {
    type: "Actionable",
    platform: "App Store",
    content: "The app design is nice, but it keeps logging me out every time I close it."
  },
]

const headers = [
  { key: "type", val: "Type of Review" },
  { key: "platform", val: "Platform" },
  { key: "content", val: "Review Content" },
]

export default function Distractions() {
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
      className="bg-slate-700 text-white hover:bg-slate-600 focus:outline-none rounded-full px-4 py-1 text-sm flex items-center space-x-1 transition-color ease-out duration-150"
      onClick={downloadCSV}
    >
      <span className="text-xl"><MdOutlineFileDownload /></span>
      <span>Export to CSV</span>
    </button>
  )

  return (
    <DashboardContainer title="Distractions Table" rightBtn={CSVBtn}>
      <ReviewsTable data={data} headers={headers} serialize />
    </DashboardContainer>
  );
}
