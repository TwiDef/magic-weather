import React from 'react';

import { useAppDispatch } from '../../redux/hooks';
import { toggleTempType } from '../../redux/slices/currentSlice';

import { FaSearch } from "react-icons/fa";
import { BsFillGeoAltFill } from "react-icons/bs";
import { RiCelsiusLine } from "react-icons/ri";
import { RiFahrenheitFill } from "react-icons/ri";

const Search: React.FC = () => {

    const dispatch = useAppDispatch()

    const onChangeTempType = (type: string) => {
        dispatch(toggleTempType(type))
    }

    return (
        <div className='search-block flex pt-4 gap-8'>
            <div className='flex  items-center gap-4'>
                <input className='bg-slate-200 p-1 px-2 rounded-lg text-lg text-black placeholder:text-lg ' type="text" placeholder='Enter city...' />
                <div className='search-icons flex px-2 gap-3'>
                    <button><FaSearch /></button>
                    <button><BsFillGeoAltFill /></button>
                </div>
            </div>
            <div className='search-converter flex items-center'>
                <button onClick={() => onChangeTempType('c')}><RiCelsiusLine /></button>
                <span className=' px-2'>/</span>
                <button onClick={() => onChangeTempType('f')}><RiFahrenheitFill /></button>
            </div>
        </div>
    );
};

export default Search;