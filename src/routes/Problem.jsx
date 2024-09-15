import React, { useEffect } from 'react';

import SecondGraph from '../components/Problem/SecondGraph';
import ThirdGraph from '../components/Problem/ThirdGraph';
import PieGraph from '../components/Problem/PieGraph';
import TvsSGraph from '../components/Problem/TvsSGraph';
import SideNav from '../components/SideNav/SideNav';
import TopMenu from '../components/TopMenu';
import DashboardContainer from '../components/DashboardContainer';
import TopicTrendline from '../components/Problem/TopicTrendline';
import KeywordTrendline from '../components/Problem/KeywordTrendline';
import TopicTable from '../components/Problem/TopicTable';
import KeywordTable from '../components/Problem/KeywordTable';
import UniqueProblemsTable from '../components/Problem/UniqueProblemsTable';
import TopicVsSentiment from '../components/Vibe/TopicVsSentiment';

export default function Problem() {

	useEffect(() => {
		document.title = 'Problem | App Reviews';
	}, []);

	return (
		<div className="flex bg-slate-700">

			<SideNav active="Problem" />

			<div className="flex flex-col flex-grow">
				{/* <TopMenu /> */}

				<div className="grid p-8 grid-rows-3 grid-cols-2 grid-flow-row gap-8 h-[1280px]">
					<div>
						<TopicTable />
					</div>
					<div>
						<TopicTrendline />
					</div>
					<div>
						<KeywordTable />
					</div>
					<div>
						<KeywordTrendline />
					</div>
					<div>
						<TopicVsSentiment />
					</div>
					<div>
						<UniqueProblemsTable />
					</div>

					{/* <div className="row-span-6 col-span-2">
						<TvsSGraph />
					</div>
					<div className="row-span-3 col-span-2">
						<SecondGraph />
					</div>
					<div className="row-span-3 col-span-1">
						<ThirdGraph />
					</div>
					<div className="row-span-3 col-span-1">
						<PieGraph />
					</div> */}

				</div>
			</div>
		</div>
	);
}
