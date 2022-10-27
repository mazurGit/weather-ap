import {HourWeather} from './hour-weather';

type ParsedCurrentDto = {
  city: string;
  condition: string;
  icon: string;
  temperature: string;
}

type ParsedForecastDto = {
  sunRise: number;
  sunSet: number;
  date: string;
  maxTemp: string;
  minTemp: string;
  rainChance: string;
  snowChance: string;
  humidity: string;
  wind: string;
  condition: string;
  icon: string;
  hours: HourWeather[];
}

export type{ParsedCurrentDto, ParsedForecastDto};
