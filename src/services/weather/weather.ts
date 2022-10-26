import {HttpServices} from '../http/http';
import {HttpUrlPath} from '~/common/enums/enums';

class WeatherServices {
  private http: HttpServices = new HttpServices();
  getWeather(requestParams = {}) {
    return this.http.load(`${HttpUrlPath.BASE}`, {
      params: {...requestParams},
    });
  }
}

export {WeatherServices};
