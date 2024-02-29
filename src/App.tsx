import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from './redux/hooks';

import { fetchCurrentInfo } from './redux/slices/currentSlice';
import { fetchLocationInfo } from './redux/slices/locationSlice';
import { fetchForecastInfo } from './redux/slices/forecastSlice';

import Cities from './components/cities/Cities'
import CurrentWeather from './components/current-weather/CurrentWeather'
import Forecast from './components/forecast/Forecast'
import LocalDate from './components/local-date/LocalDate'
import Search from './components/search/Search'

import './App.css'

export type TCity = {
    name: string, active: boolean
}

const App: React.FC = () => {

    const dispatch = useAppDispatch()
    const { cityName } = useAppSelector(state => state.city)

    const [cities, _] = useState<TCity[]>([
        { name: 'Paris', active: false },
        { name: 'Sydney', active: false },
        { name: 'Berlin', active: false },
        { name: 'Sochi', active: true },
        { name: 'Alaska', active: false }
    ])

    const removeActiveCity = (cities: TCity[]) => {
        cities.forEach(city => city.active = false)
    }

    useEffect(() => {
        dispatch(fetchLocationInfo(cityName))
        dispatch(fetchCurrentInfo(cityName))
        dispatch(fetchForecastInfo(cityName))
    }, [cityName])

    return (
        <>
            <main
                className='mx-auto xl:w-1/3 lg:w-1/2 md:w-2/3'>
                <div className='wrapper'>
                    <Cities cities={cities} removeActiveCity={removeActiveCity} />
                    <Search cities={cities} removeActiveCity={removeActiveCity} />
                    <LocalDate />
                    <CurrentWeather />
                    <Forecast />
                </div>
            </main >
        </>
    )
}

export default App
