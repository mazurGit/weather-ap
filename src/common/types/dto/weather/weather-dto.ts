import {Condition} from './condition';
import {ForecastDayDto} from './forecast-day-dto';

type WeatherDto = {
  location: {
    name: string,
    localtime: string,
  },
  current: {
    temp_c: number,
    condition: {
      text: string,
      icon: string,
    },
    wind_kph: number,
    humidity: number,
    cloud: number,
    feelslike_c: number,
  },
  forecast: {
    forecastday: ForecastDayDto[],
  },
}


export {WeatherDto};
