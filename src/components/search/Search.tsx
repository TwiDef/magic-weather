import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import axios from 'axios';
import { API_KEY } from '../../API_KEY';
import { toggleTempType } from '../../redux/slices/currentSlice';
import { setCity, setSearchValue, clearSearchValue } from '../../redux/slices/citySlice';
import { fetchLocationInfo } from '../../redux/slices/locationSlice'
import { fetchCurrentInfo } from '../../redux/slices/currentSlice'
import { fetchForecastInfo } from '../../redux/slices/forecastSlice'
import { setGeoCoords } from '../../redux/slices/citySlice';

import { FaSearch } from "react-icons/fa";
import { BsFillGeoAltFill } from "react-icons/bs";
import { RiCelsiusLine } from "react-icons/ri";
import { RiFahrenheitFill } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import { TCity } from '../../App';

import './Search.css';

type PropsType = {
    cities: TCity[]
    removeActiveCity: Function
}

const Search = (props: PropsType) => {
    const { temp_type } = useAppSelector(state => state.currentInfo)
    const { searchValue } = useAppSelector(state => state.city)
    const { coords } = useAppSelector(state => state.city)
    const dispatch = useAppDispatch()

    const onChangeTempType = (type: string) => {
        dispatch(toggleTempType(type))
    }

    const onGetCoords = async () => {
        navigator.geolocation.getCurrentPosition(position => {
            const { latitude, longitude } = position.coords
            dispatch(setGeoCoords({ latitude, longitude }))
        })

        const { data } = await axios
            .get(`https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${coords.latitude},${coords.longitude}`)
        const { name } = data.location
        dispatch(setCity(name))
    }

    const onSearchInfo = () => {
        if (searchValue) {
            dispatch(fetchLocationInfo(searchValue))
            dispatch(fetchCurrentInfo(searchValue))
            dispatch(fetchForecastInfo(searchValue))
            dispatch(setCity(searchValue))
            dispatch(clearSearchValue())
            props.removeActiveCity(props.cities)
        }
    }

    const onHandleKeyDown = (e: any) => {
        e.keyCode === 13 ? onSearchInfo() : null
    }

    return (
        <div className='search-block flex pt-4 gap-8
        max-sm:gap-0 max-2xl:gap-4'>
            <div className='flex items-center gap-4
             max-sm:gap-0 max-2xl:gap-4'>
                <div className='relative'>
                    <input
                        className='city-input w-60 bg-slate-200 p-1 px-2 rounded-lg text-lg text-black placeholder:text-lg max-sm:w-44'
                        value={searchValue}
                        onChange={(e) => dispatch(setSearchValue(e.target.value))}
                        onKeyDown={(e) => onHandleKeyDown(e)}
                        type="text"
                        placeholder='Enter city...' />
                    {searchValue ?
                        <button
                            onClick={() => dispatch(clearSearchValue())}
                            className='remove-input__btn'>
                            <RxCross2 className='w-6 h-6' />
                        </button> : null}
                </div>
                <div className='search-icons flex px-2 gap-3'>
                    <button className='search-btn' onClick={onSearchInfo}><FaSearch /></button>
                    <button className='geo-btn' onClick={onGetCoords}><BsFillGeoAltFill /></button>
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