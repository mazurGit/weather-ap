import { ParsedForecastDto } from "~/common/types/types"

type Key = {
  name: keyof ParsedForecastDto;
  value: string;
}
const weatherInfo: Key[]  = [
  {name: 'sunRise', value: 'Sunrise'},
  {name: 'sunSet', value: 'Sunrise'},
  {name: 'wind', value: 'Wind'},
  {name: 'humidity', value: 'Humidity'},
  {name: 'maxTemp', value: 'Max.temperature'},
  {name: 'minTemp', value: 'Min.temperature'},
  {name: 'rainChance', value: 'Rain'},
  {name: 'snowChance', value: 'Snow'},
]

export {weatherInfo};
