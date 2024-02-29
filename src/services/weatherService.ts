import axios from "axios";
import { API_KEY } from "../API_KEY";
import { TCondition } from "../redux/slices/currentSlice";

/* Location */
export type TLocationInfo = {
    name: string,
    localtime_epoch: number | null,
    localtime: string | null,
    country: string,
    region: string
}

const getLocationInfo = async (cityname: string) => {
    const { data } = await axios
        .get(`http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${cityname}`, {
            withCredentials: false
        })

    const { name, localtime_epoch, localtime, country, region }: TLocationInfo = data.location

    return { name, localtime_epoch, localtime, country, region }
}
/* Location */


/* Current */
export type TCurrentInfo = {
    condition: TCondition[],
    feelslike_c: number,
    feelslike_f: number,
    humidity: number,
    pressure_mb: number,
    temp_c: number,
    temp_f: number,
    wind_kph: number,
}
const getCurrentInfo = async (cityname: string) => {
    const { data } = await axios
        .get(`http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${cityname}`, {
            withCredentials: false
        })

    const { condition, feelslike_c, feelslike_f,
        humidity, pressure_mb, temp_c,
        temp_f, wind_kph }: TCurrentInfo = data.current

    return {
        condition, feelslike_c, feelslike_f,
        humidity, pressure_mb,
        temp_c, temp_f, wind_kph
    }
}
/* Current */


/* Forecast */

export type TForecastInfo = {
    astro: [],
    hour: [],
    condition: TCondition[]
}

const getForecastInfo = async (cityname: string) => {
    const { data } = await axios
        .get(`http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${cityname}`, {
            withCredentials: false
        })

    const { astro, hour }: TForecastInfo = data.forecast.forecastday[0]
    const { condition }: TForecastInfo = data.forecast.forecastday[0].day

    return {
        astro, hour, condition
    }
}
/* Forecast */

const weatherService = {
    getLocationInfo,
    getCurrentInfo,
    getForecastInfo
}

export default weatherService

