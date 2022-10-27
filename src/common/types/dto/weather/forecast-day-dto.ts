import {Condition} from './condition';
import {HourWeather} from './hour-weather';

type ForecastDayDto = {
  date: string,
  day : {
    maxtemp_c: number,
    mintemp_c: number,
    avgtemp_c: number,
    avghumidity: number,
    maxwind_kph: number,
    daily_chance_of_rain: number,
    daily_chance_of_snow: number,
    condition: Condition,
  },
  astro: {
    sunrise: number,
    sunset: number,
  },
  hour : HourWeather[]
}

export type {ForecastDayDto};
