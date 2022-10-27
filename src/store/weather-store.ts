import {makeAutoObservable} from "mobx";
import {weatherServices} from '~/services/services';
import {ParsedCurrentDto, ParsedForecastDto} from '~/common/types/types';
import {DataStatus} from '~/common/enums/enums';

class WeatherStore {
  currentWeather: ParsedCurrentDto | {} = {};
  forecast: ParsedForecastDto[] | [] = [];
  dataStatus:DataStatus = DataStatus.IDLE;

  constructor (){
    this.getWeather = this.getWeather.bind(this)
    makeAutoObservable(this)
  }

  updateStatus(dataStatus:DataStatus){
    this.dataStatus = dataStatus
  }
  updateData(data:[ParsedCurrentDto, ParsedForecastDto[]]){
    [this.currentWeather, this.forecast] = data;
  }

  async getWeather() {
    this.updateStatus(DataStatus.PENDING)
    try {
      const data = await weatherServices.getWeather()
      this.updateData(data)
      this.updateStatus(DataStatus.FULFILLED);
    } catch {
      this.updateStatus(DataStatus.REJECTED);
    }
  }

}

export {WeatherStore};
