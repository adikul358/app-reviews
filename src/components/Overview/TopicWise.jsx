import React, { useState } from 'react';
import DashboardContainer from '../DashboardContainer';

const data = [
  {
    topic: "Content Library and Recommendations",
    content: "Customers praise Netflix for its extensive content library, with a wide variety of movies, TV shows, and documentaries to suit different tastes. Many users appreciate the personalized recommendations based on their viewing history, which helps them discover new shows and movies. The algorithm is generally seen as a strong feature that keeps users engaged by suggesting content they might like.\nOn the downside, some users feel that the recommendations can become repetitive and that the algorithm sometimes fails to suggest new or diverse content. There are also complaints about the removal of certain popular titles, leaving users frustrated when their favorite shows disappear without notice."
  },
  {
    topic: "Offline Viewing and Downloads",
    content: "Many customers find Netflix's offline viewing feature incredibly useful, especially for travel or areas with poor internet connectivity. The ability to download content and watch it without needing an internet connection is often cited as a major plus, particularly for long commutes or flights.\nHowever, some users have reported issues with the download functionality, such as content failing to download or disappearing before they can watch it. Others are frustrated by the limitations on the number of downloads or the restrictions that prevent some content from being available offline. Additionally, recent updates have made offline viewing more cumbersome, with users complaining that the app is less reliable when they are not connected to Wi-Fi."
  },
  {
    topic: "Price Increases and Subscription Plans",
    content: "Customers appreciate that Netflix offers different subscription plans to cater to various budgets, allowing flexibility in terms of video quality and the number of simultaneous streams. Some users believe that the service provides good value for money, given the breadth of content available.\nHowever, price increases have been a significant point of contention. Many users feel that Netflix has raised its prices too frequently without corresponding improvements in the service. There are also complaints that the higher subscription tiers do not offer enough additional value to justify the cost. The introduction of additional charges for sharing accounts across households has particularly upset long-time subscribers, with some threatening to cancel their subscriptions."
  },
]

export default function TopicWise() {

  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const toggleDropdown = () => setIsOpen(!isOpen);
  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const TopicBtn = (
    <div className="bg-slate-700 rounded-full pr-2">
      <select
        className="flex items-center justify-center w-[200px] bg-slate-700 rounded-full shadow-md text-white focus:outline-none px-3 py-1 text-sm text-ellipsis" 
        onChange={(e) => setSelectedOption(e.target.value)}
      >
        <option value="" disabled selected>Select Topic</option>
        {data.map(v => (
          <option value={v.topic}>{v.topic}</option>
        ))}
      </select>
    </div>
  )

  const parseContent = (topic) => {
    let raw_text = data[data.findIndex(v => v.topic == topic)].content

    return (
      <div className="space-y-3 leading-6 opacity-90">
        {raw_text.split("\n").map(v => <p>{v}</p>)}
      </div>
    )
  }

  return (
    <DashboardContainer title="Topic Wise" rightBtn={TopicBtn}>
        {selectedOption ? parseContent(selectedOption) : "Select a topic to view its analysis."}
    </DashboardContainer>

  );
}
