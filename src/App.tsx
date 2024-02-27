import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from './redux/hooks';

import styles from './App.module.css'
import Cities from './components/cities/Cities'
import CurrentWeather from './components/current-weather/CurrentWeather'
import Forecast from './components/forecast/Forecast'
import LocalDate from './components/local-date/LocalDate'
import Search from './components/search/Search'

import { fetchCurrentInfo } from './redux/slices/currentSlice';
import { fetchLocationInfo } from './redux/slices/locationSlice';
import { fetchForecastInfo } from './redux/slices/forecastSlice';

const App: React.FC = () => {

    const dispatch = useAppDispatch()
    const { cityName } = useAppSelector(state => state.city)

    useEffect(() => {
        dispatch(fetchLocationInfo(cityName))
        dispatch(fetchCurrentInfo(cityName))
        dispatch(fetchForecastInfo(cityName))
    }, [cityName])

    return (
        <>
            <main className='mx-auto xl:w-1/3 sm:w-1/2'>
                <div className={styles.wrapper}>
                    <Cities />
                    <Search />
                    <LocalDate />
                    <CurrentWeather />
                    <Forecast />
                </div>
            </main >
        </>
    )
}

export default App
