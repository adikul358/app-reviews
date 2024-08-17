import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSelection } from '../redux/dropdownSlice';
import { MdRefresh } from "react-icons/md";

export default function TopMenu() {
  const dispatch = useDispatch();
  const selection = useSelector(state => state.dropdown.selection);

  const handleChange = (event) => {
    dispatch(setSelection(event.target.value));
  };

  return (
    <div className="flex justify-end items-center pt-3 px-3 space-x-3" >
      <div className="bg-slate-800 rounded-full pr-2">
        <select
          value={selection}
          onChange={handleChange}
          className="flex items-center justify-center w-[160px] h-12 bg-slate-800 rounded-full shadow-md text-white focus:outline-none px-3 text-sm"
        >
          <option value="Play Store">Play Store</option>
          <option value="App Store">App Store</option>
          <option value="Combined">Combined</option>
        </select>
      </div>
      <button className="flex flex-row items-center justify-center h-12 bg-slate-800 rounded-full shadow-md text-white focus:outline-none text-sm space-x-1 px-5">
        <MdRefresh size={24}/>
        <span>Refresh</span>
      </button>

    </div>
  );
};