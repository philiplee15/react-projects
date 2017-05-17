//middleware: functions that take action and depending on factors, let's action pass through, manipulate, log it or stop it
import axios from 'axios';

const API_KEY = '92eb35deaf6ab80ee4e1cc337fd70334'
const RURL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city){
  const url = `${RURL}&q=${city},us`;
  const request = axios.get(url);
  return{
    type: FETCH_WEATHER
    payload: request
  };
}
