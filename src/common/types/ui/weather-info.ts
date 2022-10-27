import {ParsedForecastDto} from '../dto/dto'

type KeyWeatherInfo = {
  name: keyof ParsedForecastDto;
  value: string;
}

export type {KeyWeatherInfo};
