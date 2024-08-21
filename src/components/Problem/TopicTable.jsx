import DashboardContainer from '../DashboardContainer';

const data = [
  {
    topic: "Content Library and Variety",
    tally: 35
  },
  {
    topic: "Streaming Quality",
    tally: 28
  },
  {
    topic: "User Interface and Navigation",
    tally: 20
  },
  {
    topic: "Pricing and Subscription Plans",
    tally: 25
  },
  {
    topic: "Offline Viewing and Downloads",
    tally: 18
  },
  {
    topic: "Recommendations and Algorithm",
    tally: 22
  },
  {
    topic: "App Stability and Performance",
    tally: 30
  },
  {
    topic: "Customer Support",
    tally: 10
  },
  {
    topic: "Account Management and Profiles",
    tally: 15
  },
  {
    topic: "New Features and Updates",
    tally: 12
  },
  {
    topic: "Compatibility with Devices",
    tally: 17
  },
  {
    topic: "Casting and Smart TV Integration",
    tally: 14
  },
  {
    topic: "Audio and Subtitles",
    tally: 13
  },
  {
    topic: "Ads and Promotions",
    tally: 8
  },
  {
    topic: "Parental Controls",
    tally: 6
  },
  {
    topic: "Social Features (Watch Parties)",
    tally: 5
  },
]

export default function TopicTable() {
  return (
    <DashboardContainer title="Topic Tally">
      <table className="table pb-20">
        <thead>
          <tr className="text-white/50">
            <th>Topic</th>
            <th>Tally</th>
          </tr>
        </thead>
        <tbody>
          {data.map((v,i) => (
            <tr key={i}>
              <td>{v.topic}</td>
              <td className="text-right mr-4">{v.tally}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </DashboardContainer>
  )
}