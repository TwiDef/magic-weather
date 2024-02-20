import axios from "axios";
import { API_KEY } from "../API_KEY";

export const getLocationInfo = async () => {
    const { data } = await axios
        .get(`http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=sochi`)
    const { name, localtime, country, region } = data.location

    return { name, localtime, country, region }
}

