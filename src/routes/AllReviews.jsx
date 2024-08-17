import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import SideNav from '../components/SideNav/SideNav';
import TopMenu from '../components/TopMenu';
import AllReviewsTable from '../components/AllReviews/AllReviewsTable'; // Updated path

export default function AllReviews() {
  

  useEffect(() => {
    document.title = 'Overview | App Reviews';
  }, []);

  return (
    <div className="flex bg-slate-700"> {/* left right division */}
      <SideNav active="All Reviews" />

      <div className="flex flex-col flex-grow">
        <TopMenu />

        <div className="grid p-8 h-full overflow-x-scroll">
          <AllReviewsTable />
        </div>

      </div>
    </div>
  );
}