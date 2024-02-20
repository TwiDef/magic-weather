import axios from "axios";
import { API_KEY } from "../API_KEY";
import { TCondition } from "../redux/slices/currentSlice";

/* ########################################################################### */

/* Location */
export type TLocationInfo = {
    name: string,
    localtime_epoch: number,
    country: string,
    region: string
}

const getLocationInfo = async (cityname: string) => {
    const { data } = await axios
        .get(`http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${cityname}`)

    const { name, localtime_epoch, country, region }: TLocationInfo = data.location
    console.log(data)

    return { name, localtime_epoch, country, region }
}
/* Location */

/* ########################################################################### */

/* Current */
export type TCurrentInfo = {
    condition: TCondition[],
    feelslike_c: number,
    feelslike_f: number,
    humidity: number,
    is_day: number,
    pressure_mb: number,
    temp_c: number,
    temp_f: number,
    wind_kph: number,
}
const getCurrentInfo = async (cityname: string) => {
    const { data } = await axios
        .get(`http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${cityname}`)

    const { condition, feelslike_c, feelslike_f,
        humidity, is_day, pressure_mb, temp_c,
        temp_f, wind_kph }: TCurrentInfo = data.current

    console.log(data)

    return {
        condition, feelslike_c, feelslike_f,
        humidity, is_day, pressure_mb,
        temp_c, temp_f, wind_kph
    }
}
/* Current */

/* ########################################################################### */

const weatherService = {
    getLocationInfo,
    getCurrentInfo
}

export default weatherService

