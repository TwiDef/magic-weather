import React from 'react';

import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { toggleTempType } from '../../redux/slices/currentSlice';
import { setCity, setSearchValue, clearSearchValue } from '../../redux/slices/citySlice';
import { fetchLocationInfo } from '../../redux/slices/locationSlice'
import { fetchCurrentInfo } from '../../redux/slices/currentSlice'
import { fetchForecastInfo } from '../../redux/slices/forecastSlice'

import { FaSearch } from "react-icons/fa";
import { BsFillGeoAltFill } from "react-icons/bs";
import { RiCelsiusLine } from "react-icons/ri";
import { RiFahrenheitFill } from "react-icons/ri";

import './Search.css';

const Search: React.FC = () => {
    const { temp_type } = useAppSelector(state => state.currentInfo)
    const { searchValue } = useAppSelector(state => state.city)
    const dispatch = useAppDispatch()

    const onChangeTempType = (type: string) => {
        dispatch(toggleTempType(type))
    }

    const onSearchInfo = () => {
        dispatch(fetchLocationInfo(searchValue))
        dispatch(fetchCurrentInfo(searchValue))
        dispatch(fetchForecastInfo(searchValue))
        dispatch(setCity(searchValue))
        dispatch(clearSearchValue())
    }


    return (
        <div className='search-block flex pt-4 gap-8
        max-sm:gap-0'>
            <div className='flex items-center gap-4
             max-sm:gap-0'>
                <input
                    className='bg-slate-200 p-1 px-2 rounded-lg text-lg text-black placeholder:text-lg'
                    value={searchValue}
                    onChange={(e) => dispatch(setSearchValue(e.target.value))}
                    type="text"
                    placeholder='Enter city...' />
                <div className='search-icons flex px-2 gap-3'>
                    <button onClick={onSearchInfo}><FaSearch /></button>
                    <button><BsFillGeoAltFill /></button>
                </div>
            </div>
            <div className='search-converter flex items-center'>
                <button
                    className={`${temp_type === 'c' ? 'temp__btn-active' : ''}`}
                    onClick={() => onChangeTempType('c')}><RiCelsiusLine /></button>

                <span className=' px-2'>/</span>

                <button
                    className={`${temp_type === 'f' ? 'temp__btn-active' : ''}`}
                    onClick={() => onChangeTempType('f')}><RiFahrenheitFill /></button>
            </div>
        </div>
    );
};

export default Search;