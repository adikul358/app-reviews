import React, { useEffect } from 'react';

import SecondGraph from '../components/Problem/SecondGraph';
import ThirdGraph from '../components/Problem/ThirdGraph';
import PieGraph from '../components/Problem/PieGraph';
import TvsSGraph from '../components/Problem/TvsSGraph';
import SideNav from '../components/SideNav/SideNav';
import TopMenu from '../components/TopMenu';

export default function Problem() {

	useEffect(() => {
		document.title = 'Problem | App Reviews';
	}, []);

	return (
		<div className="flex bg-slate-700">

			<SideNav active="Problem" />

			<div className="flex flex-col flex-grow">
				{/* <TopMenu /> */}

				<div className="grid p-8 grid-rows-6 grid-cols-4 grid-flow-row gap-8 h-full">

					<div className="row-span-6 col-span-2">
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
					</div>

				</div>
			</div>
		</div>
	);
}
