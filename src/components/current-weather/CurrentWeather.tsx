import React, { useEffect, useState } from 'react';
import { useAppSelector } from '../../redux/hooks'

import { BsFillSunriseFill, BsFillSunsetFill } from "react-icons/bs";
import { FaArrowUp, FaArrowDown, FaDroplet } from "react-icons/fa6";
import { FaThermometerEmpty } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { Blocks } from 'react-loader-spinner'

import './CurrentWeather.css';

const CurrentWeather: React.FC = () => {
    let [tempOfDayC, setTempOfDayC] = useState<number[]>([])
    let [tempOfDayF, setTempOfDayF] = useState<number[]>([])

    const { temp_type, status } = useAppSelector(state => state.currentInfo)
    const { name, country } = useAppSelector(state => state.locationInfo)
    const { astro } = useAppSelector(state => state.forecast)
    const { hour } = useAppSelector(state => state.forecast)
    const { condition, feelslike_c, feelslike_f, humidity,
        temp_c, temp_f, wind_kph } = useAppSelector(state => state.currentInfo)

    useEffect(() => {
        if (hour) {
            setTempOfDayC(hour.map((h: any) => h.temp_c))
            setTempOfDayF(hour.map((h: any) => h.temp_f))
        }
    }, [hour])

    if (status === 'loading') {
        return <div className='bg-slate-200 mt-5 text-gray-600 rounded-3xl w-full h-48 p-1
        flex items-center justify-center'>
            <Blocks
                height="180"
                width="180"
                color="#3b5f78"
                ariaLabel="blocks-loading"
                wrapperStyle={{}}
                wrapperClass="blocks-wrapper"
                visible={true}
            />
        </div>
    }
    if (status === 'error') {
        return <div className='bg-slate-200 mt-5 text-gray-600 rounded-3xl w-full h-48 p-1
        flex items-center justify-center font-bold text-xl'>Sorry, something went wrong, try later</div>
    }

    return (
        <div className='current-weather bg-slate-200 mt-5 text-gray-600 rounded-3xl w-full h-48 p-1
        max-sm:h-44 max-sm:mt-3'>
            <h1 className='text-center text-lg font-bold mt-2 max-sm:mt-0'>
                {(name.slice(0, 1)).toUpperCase() + name.slice(1)}, {country}
            </h1>

            <h3 className='text-center text-sm'>{condition?.text}</h3>
            <div className='flex items-center justify-around pt-3 gap-4 max-sm:pt-0 max-sm:gap-1'>
                <div className='w-28 flex items-center justify-center'>

                    <img className=' w-20' src={condition?.icon} alt="icon" />
                </div>
                <h3 className='w-28 text-6xl font-bold flex items-center justify-center max-sm:text-5xl'>
                    {temp_type === 'c' ?
                        temp_c ?
                            Math.round(temp_c) + "°c" : 0 : Math.round(temp_f ? temp_f : 0) + "°f"}
                </h3>
                <ul className='flex w-28 flex-col items-start justify-center gap-1'>
                    <li className='font-semibold text-sm flex items-center max-sm:text-xs'>
                        <FaThermometerEmpty />
                        <p className='mx-1'>Real felt:</p>
                        {temp_type === 'c' ?
                            Math.round(feelslike_c ? feelslike_c : 0) + "°c" :
                            Math.round(feelslike_f ? feelslike_f : 0) + "°f"}
                    </li>
                    <li className='font-semibold text-sm flex items-center max-sm:text-xs'>
                        <FaDroplet />
                        <p className='mx-1'>Humidity:</p>
                        <span>{humidity}%</span>
                    </li>
                    <li className='font-semibold text-sm flex items-center max-sm:text-xs'>
                        <SiTailwindcss />
                        <p className='mx-1'>Wind:</p>
                        <span>{wind_kph}km/h</span>
                    </li>
                </ul>
            </div>
            <ul className='additional-info flex items-center justify-evenly px-2 mt-2 max-sm:mt-0'>
                <li className='font-bold text-xs flex items-center gap-2'>
                    <BsFillSunriseFill />
                    Rise: {astro ? astro.sunrise : '00:00'}
                </li> <span className='max-sm:hidden'>|</span>
                <li className='font-bold text-xs flex items-center gap-2'>
                    <BsFillSunsetFill />
                    Set: {astro ? astro.sunset : '00:00'}
                </li> <span className='max-sm:hidden'>|</span>
                <li className='font-bold text-xs flex items-center gap-2'>
                    <FaArrowUp />
                    High: {temp_type === 'c' ?
                        tempOfDayC ? Math.max(...tempOfDayC) + "°c" : 0 :
                        tempOfDayF ? Math.max(...tempOfDayF) + "°f" : 0}
                </li> <span className='max-sm:hidden'>|</span>
                <li className='font-bold text-xs flex items-center gap-2'>
                    <FaArrowDown />
                    Low: {temp_type === 'c' ?
                        tempOfDayC ? Math.min(...tempOfDayC) + "°c" : 0 :
                        tempOfDayF ? Math.min(...tempOfDayF) + "°f" : 0}
                </li>
            </ul>
        </div>
    );
};

export default CurrentWeather;