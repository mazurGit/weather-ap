import {ParsedCurrentDto, ParsedForecastDto, WeatherDto} from "~/common/types/types"

const parseDtoObject = (obj:WeatherDto):[ParsedCurrentDto, ParsedForecastDto[]] => {
  const current = {
    city: obj.location.name,
    condition: obj.current.condition.text,
    icon: `https:${obj.current.condition.icon}`,
    temperature: `${obj.current.temp_c}°C`
  }
  const forecast = obj.forecast.forecastday.map(item => {
    return {
      sunRise: item.astro.sunrise,
      sunSet: item.astro.sunset,
      date: item.date,
      maxTemp: `${item.day.maxtemp_c}°C`,
      minTemp: `${item.day.mintemp_c}°C`,
      rainChance: `${item.day.daily_chance_of_rain}%`,
      snowChance: `${item.day.daily_chance_of_snow}%`,
      humidity: `${item.day.avghumidity}%`,
      wind: `${item.day.maxwind_kph}km/h`,
      condition: item.day.condition.text,
      icon: `https:${item.day.condition.icon}`,
      hours: item.hour
    }
  })
  return [current, forecast]
}

export {parseDtoObject};
