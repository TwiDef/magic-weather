import { useAppDispatch } from '../../redux/hooks';
import { setCity } from '../../redux/slices/citySlice';
import { TCity } from '../../App';

import './Cities.css';

type PropsType = {
    cities: TCity[],
    removeActiveCity: Function
}

const Cities = (props: PropsType) => {

    const dispatch = useAppDispatch()

    const onSetActiveCity = (city: any) => {
        dispatch(setCity(city.name))
        props.removeActiveCity(props.cities)
        city.active = true
    }

    return (
        <ul className='cities flex justify-between flex-wrap  w-full'>
            {
                props.cities.map((city, i: number) => {
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