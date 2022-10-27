import {HourWeather} from './hour-weather';

type ParsedCurrentDto = {
  city: string;
  condition: string;
  iconUrl: string;
  temperature: string;
}

type ParsedForecastDto = {
  id: string,
  sunRise: number;
  sunSet: number;
  date: Date;
  maxTemp: string;
  minTemp: string;
  rainChance: string;
  snowChance: string;
  humidity: string;
  wind: string;
  condition: string;
  iconUrl: string;
  hours: HourWeather[];
  avgTemp: string;
}

export type{ParsedCurrentDto, ParsedForecastDto};
