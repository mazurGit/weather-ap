import {HttpServices} from '../http/http';
import {HttpUrlPath} from '~/common/enums/enums';
import {getCurrentCity, parseDtoObject} from '~/helpers/helpers';
import {WeatherDto} from '~/common/types/types';

class WeatherServices {
  private http: HttpServices = new HttpServices();
  async getWeather(requestParams = {}) {
    const city = await getCurrentCity()
    const data = await this.http.load<WeatherDto>(`${HttpUrlPath.BASE}`, {
      params: {...requestParams, q:city, days:7},
    });
    return parseDtoObject(data)
  }
}

export {WeatherServices};
