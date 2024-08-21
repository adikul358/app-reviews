import DashboardContainer from '../DashboardContainer';

const data = [
  {
    keyword: "Buffering",
    tally: 40
  },
  {
    keyword: "Download",
    tally: 30
  },
  {
    keyword: "Recommendation",
    tally: 35
  },
  {
    keyword: "Price",
    tally: 28
  },
  {
    keyword: "Account",
    tally: 25
  },
  {
    keyword: "Cast",
    tally: 20
  },
  {
    keyword: "Subtitles",
    tally: 18
  },
  {
    keyword: "Freezing",
    tally: 22
  },
  {
    keyword: "Offline",
    tally: 15
  },
  {
    keyword: "Interface",
    tally: 27
  },
]

export default function KeywordTable() {
  return (
    <DashboardContainer title="Keyword Tally">
      <table className="table pb-20">
        <thead>
          <tr className="text-white/50">
            <th>Keyword</th>
            <th>Tally</th>
          </tr>
        </thead>
        <tbody>
          {data.map((v,i) => (
            <tr key={i}>
              <td>{v.keyword}</td>
              <td className="text-right mr-4">{v.tally}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </DashboardContainer>
  )
}