import {ParsedCurrentDto, ParsedForecastDto, WeatherDto} from "~/common/types/types";
import uuid from 'react-native-uuid';

const parseDtoObject = (obj:WeatherDto):[ParsedCurrentDto, ParsedForecastDto[]] => {
  const current = {
    city: obj.location.name,
    condition: obj.current.condition.text,
    iconUrl: `https:${obj.current.condition.icon}`,
    temperature: `${Math.round(obj.current.temp_c)}°C`
  }
  const forecast = obj.forecast.forecastday.map(item => {
    return {
      id: String(uuid.v4()),
      sunSet: item.astro.sunset,
      sunRise: item.astro.sunrise,
      date: new Date(item.date),
      maxTemp: `${Math.round(item.day.maxtemp_c)}°C`,
      minTemp: `${Math.round(item.day.mintemp_c)}°C`,
      rainChance: `${Math.round(item.day.daily_chance_of_rain)}%`,
      snowChance: `${Math.round(item.day.daily_chance_of_snow)}%`,
      humidity: `${Math.round(item.day.avghumidity)}%`,
      wind: `${Math.round(item.day.maxwind_kph)} km/h`,
      condition: item.day.condition.text,
      iconUrl: `https:${item.day.condition.icon}`,
      hours: item.hour,
      avgTemp: `${Math.round((item.day.maxtemp_c + item.day.mintemp_c)/2)}°C`
    }
  })

  return [current, forecast]
}

export {parseDtoObject};
