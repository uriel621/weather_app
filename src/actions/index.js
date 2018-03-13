import axios from 'axios';

const API_KEY = '458b52d807bd0d19ee7b1f417d9adee9';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';
export function fetch_weather (city) {
    const url = `${ ROOT_URL }&q=${ city },us`
    const request = axios.get(url)

    return {
        type: FETCH_WEATHER,
        payload: request
    }
}