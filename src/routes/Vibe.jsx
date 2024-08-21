import React, { useEffect } from 'react';
import SideNav from "../components/SideNav/SideNav"
import TopMenu from "../components/TopMenu"
import ReviewsVSMonth from '../components/Vibe/ReviewsVSMonth';
import VersionVsSentiments from '../components/Vibe/VersionVsSentiments';
import TopicVsSentiment from '../components/Vibe/TopicVsSentiment';


export default function Vibe() {

    useEffect(() => {
        document.title = 'Vibe | App Reviews';
    }, []);

    return (
        <>
            <div className="flex bg-slate-700">

                <SideNav active="Vibe" />

                <div className="flex flex-col flex-grow">
                    {/* <TopMenu /> */}

                    <div className="grid p-8 grid-rows-7 grid-cols-6 grid-flow-row gap-8 h-full">
                        <div className="col-span-3 row-span-3">
                            <ReviewsVSMonth />
                        </div>
                        <div className="col-span-3 row-span-3">
                            <VersionVsSentiments />
                        </div>
                        <div className="col-span-6 row-span-4">
                            <TopicVsSentiment />
                        </div>
                    </div>

                </div>

            </div>

        </>
    )
}