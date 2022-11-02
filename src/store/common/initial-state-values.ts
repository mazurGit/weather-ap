import { ParsedCurrentDto, ParsedForecastDto } from "~/common/types/types";

const initialCurrentWeather: ParsedCurrentDto = {
  city: "",
  condition: "",
  iconUrl: "",
  temperature: "",
  hours: [],
};

const initialCurrentForecastDay: ParsedForecastDto = {
  id: "",
  sunRise: 0,
  sunSet: 0,
  date: new Date(),
  maxTemp: "",
  minTemp: "",
  rainChance: "",
  snowChance: "",
  humidity: "",
  wind: "",
  condition: "",
  iconUrl: "",
  hours: [],
  avgTemp: "",
};

export { initialCurrentWeather, initialCurrentForecastDay };
