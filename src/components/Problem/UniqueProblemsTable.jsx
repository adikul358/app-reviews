import DashboardContainer from '../DashboardContainer';

const data = [
  {
    keyword: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
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

export default function UniqueProblemsTable() {
  return (
    <DashboardContainer title="Unique Problems">
      <table className="table table-fixed pb-20">
        <thead>
          <tr className="text-white/50">
            <th className='w-3/4'>Problem</th>
            <th>Tally</th>
          </tr>
        </thead>
        <tbody>
          {data.map((v,i) => (
            <tr key={i}>
            <td className="w-full text-ellipsis overflow-hidden" style={{whiteSpace: "nowrap"}} title={v.keyword}>{v.keyword}</td>
              <td className="text-right mr-4">{v.tally}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </DashboardContainer>
  )
}