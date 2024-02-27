import React from 'react';
import { useAppDispatch } from '../../redux/hooks';

import { setCity } from '../../redux/slices/citySlice';

const Cities: React.FC = () => {

    const dispatch = useAppDispatch()

    const cities = ['Paris', 'Sydney', 'Berlin', 'Sochi', 'Alaska']

    return (
        <ul className='cities flex justify-between flex-wrap  w-full'>
            {
                cities.map((city, i: number) => {
                    return (
                        <li key={i}
                            onClick={() => dispatch(setCity(city))}
                            className='text-lg font-bold hover:underline cursor-pointer'>
                            {city}
                        </li>
                    )
                })
            }
        </ul>
    );
};

export default Cities;