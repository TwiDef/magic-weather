import React, { useEffect } from 'react';
import { fetchLocationInfo } from '../../redux/slices/locationSlice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

const Cities: React.FC = () => {

    const dispatch = useAppDispatch()
    const { name, localtime, country } = useAppSelector(state => state.locationInfo)

    useEffect(() => {
        dispatch(fetchLocationInfo())
    }, [])

    return (
        <ul className='cities flex justify-between flex-wrap  w-full'>
            <li className='text-lg font-bold hover:underline cursor-pointer'>Paris</li>
            <li className='text-lg font-bold hover:underline cursor-pointer'>Sydney</li>
            <li className='text-lg font-bold hover:underline cursor-pointer'>Tokio</li>
            <li className='text-lg font-bold hover:underline cursor-pointer'>Sochi</li>
            <li className='text-lg font-bold hover:underline cursor-pointer'>Alaska</li>
        </ul>
    );
};

export default Cities;