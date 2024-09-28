import React, { useState } from 'react';
import DashboardContainer from '../DashboardContainer';

const data = [
  {
    version: "v7.5.0",
    content: "Customers appreciate the enhanced streaming quality and reduced buffering times in Version 7.5.0. The app now loads faster, and many users have noticed a smoother playback experience, especially on older devices. The update also introduced a more intuitive interface, making it easier to navigate and find content.\nHowever, some users reported that the update broke the casting feature, preventing them from streaming content to their TVs via Chromecast. Others found that certain shows they had downloaded for offline viewing before the update were no longer accessible, causing frustration. Additionally, some users noted that the app occasionally freezes when switching between profiles, which disrupted their experience."
  },
  {
    version: "v8.1.2",
    content: "Users were pleased with the new customization options introduced in Version 8.1.2. The ability to rearrange their “Continue Watching” list and create personalized categories for their favorite shows was well-received. Many also appreciated improvements to the search functionality, which made it easier to find obscure or niche content.\nOn the downside, some users experienced issues with the audio sync, where the sound would lag behind the video during playback. The update also seemed to increase the app’s battery usage, particularly on older smartphones, leading to quicker battery drain. Additionally, a few users reported glitches in the subtitles, where they would disappear or display incorrectly during shows."
  },
  {
    version: "v9.0.0",
    content: "Customers were excited about the new features in Version 9.0.0, especially the introduction of interactive content that allowed them to make choices within certain shows. The app's performance was also improved, with faster load times and fewer crashes, leading to a more stable viewing experience. The update also included new parental controls, which parents found helpful for managing what their kids can watch.\nDespite these positives, some users found the new user interface to be less intuitive, with complaints about the placement of certain buttons and menus. The update also introduced more aggressive ads promoting Netflix’s own content, which annoyed some subscribers. Additionally, a portion of users reported that their watch history was partially wiped out after the update, losing track of where they left off in shows."
  },
]

export default function VersionWise() {

  const [selectedOption, setSelectedOption] = useState("");
  
  const VersionBtn = (
    <div className="bg-slate-700 rounded-full pr-2">
      <select
        className="flex items-center justify-center w-[120px] bg-slate-700 rounded-full shadow-md text-white focus:outline-none px-3 py-1 text-sm text-ellipsis" 
        onChange={(e) => setSelectedOption(e.target.value)}
      >
        <option value="" disabled selected>Select Version</option>
        {data.map(v => (
          <option value={v.version}>{v.version}</option>
        ))}
      </select>
    </div>
  )

  const parseContent = (version) => {
    let raw_text = data[data.findIndex(v => v.version == version)].content

    return (
      <div className="space-y-3 leading-6 opacity-90">
        {raw_text.split("\n").map((v,i) => <p key={i}>{v}</p>)}
      </div>
    )
  }

  return (
    <DashboardContainer title="Version Wise" rightBtn={VersionBtn}>
        {selectedOption ? parseContent(selectedOption) : "Select a version to view its analysis."}
    </DashboardContainer>

  );
}
