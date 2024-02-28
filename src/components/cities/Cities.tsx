import React, { useState } from 'react';
import { useAppDispatch } from '../../redux/hooks';
import { setCity } from '../../redux/slices/citySlice';

import './Cities.css';

const Cities: React.FC = () => {
    const [cities, setCities] = useState([
        { name: 'Paris', active: false },
        { name: 'Sydney', active: false },
        { name: 'Berlin', active: false },
        { name: 'Sochi', active: true },
        { name: 'Alaska', active: false }
    ])

    const dispatch = useAppDispatch()


    const onSetActiveCity = (city: any) => {
        dispatch(setCity(city.name))

        cities.forEach(city => city.active = false)
        city.active = true
    }

    return (
        <ul className='cities flex justify-between flex-wrap  w-full'>
            {
                cities.map((city, i: number) => {
                    return (
                        <li key={i}
                            onClick={() => onSetActiveCity(city)}
                            className={`${city.active ? 'active-city' : ''}
                            text-lg font-bold cursor-pointer`}>
                            {city.name}
                        </li>
                    )
                })
            }
        </ul>
    );
};

export default Cities;