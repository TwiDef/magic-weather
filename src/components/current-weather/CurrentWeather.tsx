import React from 'react';
import { BsFillSunriseFill, BsFillSunsetFill } from "react-icons/bs";
import { FaArrowUp, FaArrowDown } from "react-icons/fa6";

const CurrentWeather: React.FC = () => {
    return (
        <div className='current-weather bg-slate-200 mt-5 text-gray-600 rounded-3xl w-full h-44 p-1'>
            <h1 className='text-center text-lg font-bold'>London</h1>
            <h3 className='text-center text-sm'>Partly cloudy</h3>
            <div className='flex items-center justify-around pt-3'>
                <div className='w-28 flex items-center justify-center'>
                    <img className=' w-16' src="//cdn.weatherapi.com/weather/64x64/day/116.png" alt="" />
                </div>
                <h3 className='w-28 text-5xl flex items-center justify-center'>50*</h3>
                <ul className='flex w-28 flex-col items-center justify-center'>
                    <li className='font-semibold text-sm'>Real felt <span>5*</span></li>
                    <li className='font-semibold text-sm'>Humidity <span>65%</span></li>
                    <li className='font-semibold text-sm'>Wind <span>10km/h</span></li>
                </ul>
            </div>
            <ul className='flex items-center justify-between px-2 mt-4'>
                <li className='font-bold text-xs flex items-center gap-2'>
                    <BsFillSunriseFill />
                    Rise: 04:50 AM
                </li> |
                <li className='font-bold text-xs flex items-center gap-2'>
                    <BsFillSunsetFill />
                    Set: 04:50 AM
                </li> |
                <li className='font-bold text-xs flex items-center gap-2'>
                    <FaArrowUp />
                    High: 68*
                </li> |
                <li className='font-bold text-xs flex items-center gap-2'>
                    <FaArrowDown />
                    Low 54*
                </li>
            </ul>
        </div>
    );
};

export default CurrentWeather;