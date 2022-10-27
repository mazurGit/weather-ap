type ParsedHourWeather = {
  time: Date;
  temperature: string;
  iconUrl: string;
  condition: string;
}

type ParsedCurrentDto = {
  city: string;
  condition: string;
  iconUrl: string;
  temperature: string;
  hours: ParsedHourWeather[],
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
  hours: ParsedHourWeather[];
  avgTemp: string;
}

export type{ParsedCurrentDto, ParsedForecastDto, ParsedHourWeather};
