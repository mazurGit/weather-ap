import {HttpServices} from '../http/http';
import {HttpUrlPath} from '~/common/enums/enums';
import {getCurrentCity} from '~/helpers/helpers';

class WeatherServices {
  private http: HttpServices = new HttpServices();
  async getWeather(requestParams = {}) {
    const city = await getCurrentCity()
    return this.http.load(`${HttpUrlPath.BASE}`, {
      params: {...requestParams, q:city, days:7},
    });
  }
}

export {WeatherServices};
