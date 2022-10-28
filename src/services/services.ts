import { WeatherServices } from "./weather/weather";
import { HttpServices } from "./http/http";

const weatherServices = new WeatherServices();
const httpServices = new HttpServices();

export { weatherServices, httpServices };
