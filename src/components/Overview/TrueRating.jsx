import React, { useState } from 'react';
import StarRating from '../StarRating';
import { useSelector } from 'react-redux';
import DashboardContainer from '../DashboardContainer';

const data = {
    trueRating: 3.7,
    "App Store": 4,
    "Play Store": 4.2,
    "Combined": 4.1
}

export default function TrueRating() {
    const [rating, setRating] = useState(data.trueRating);
    const [isToggled, setIsToggled] = useState(true);
    const selection = useSelector(state => state.dropdown.selection);

    const handleClick = () => {
        setIsToggled(!isToggled);
        if (isToggled) {
            setRating(data[selection]);
        } else {
            setRating(data.trueRating);
        }
    };

    const toggleBtn = (
        <div className={`${isToggled ? "bg-slate-700" : "bg-white/50"} cursor-pointer h-max py-1 flex-shrink-0 w-12 rounded-full flex items-center transition-color ease-out duration-200 group`} onClick={handleClick}>
            <div className={`${isToggled ? "translate-x-6" : "translate-x-1"} w-[20px] h-[20px] rounded-full bg-white/75 group-hover:bg-white/90 transition-[transform,background] ease-out duration-200`}></div>
        </div>
    )

    return (
        <DashboardContainer title="True Rating" rightBtn={toggleBtn}>
            <div className="flex flex-col h-full items-center justify-center cursor-pointer">
                <p className="text-7xl font-semibold mb-3">{rating.toFixed(1)}</p>
                <div className="relative w-full flex justify-center">
                    <StarRating rating={rating} className="text-2xl" />
                    {!isToggled && <p className="absolute -bottom-5 inset-x-0 text-sm opacity-75 mt-1 text-nowrap text-center">{selection} Rating</p>}
                </div>
            </div>
        </DashboardContainer>
    );
}