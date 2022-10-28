import { ParsedCurrentDto, ParsedForecastDto } from "~/common/types/types";

const initialCurrentWeather: ParsedCurrentDto = {
  city: "",
  condition: "string",
  iconUrl: "string",
  temperature: "string",
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
