import React, { useState } from 'react';
import StarRating from '../StarRating';

import { useSelector, useDispatch } from 'react-redux';
import DashboardContainer from '../DashboardContainer';


export default function TrueRating() {
    const [rating, setRating] = useState(3.12);
    const [type, setType] = useState('True Rating');
    const [isToggled, setIsToggled] = useState(true);
    const selection = useSelector(state => state.dropdown.selection);

    const handleClick = () => {
        setIsToggled(!isToggled);
        if (isToggled) {
            setRating(4.59);
            setType(selection); 
        } else {
            setRating(3.12);
            setType('True Rating');
        }
    };

    const toggleBtn = (
        <div className={`${isToggled ? "bg-slate-700" : "bg-white/50"} cursor-pointer h-max py-1 flex-shrink-0 w-12 rounded-full flex items-center transition-color ease-out duration-200`} onClick={handleClick}>
            <div className={`${isToggled ? "translate-x-6" : "translate-x-1"} w-[20px] h-[20px] rounded-full bg-white/75 transition-[transform] ease-out duration-200`}>                </div>
        </div>
    )

    return (
        <DashboardContainer title="True Rating" rightBtn={toggleBtn}>
            <div className="flex flex-col h-full items-center justify-center cursor-pointer">
                <p className="text-6xl font-semibold mb-3">{rating}</p>
                <StarRating rating={rating} className="text-2xl" />
            </div>
        </DashboardContainer>
    );
}