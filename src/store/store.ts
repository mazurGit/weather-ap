import { createContext } from "react";
import { WeatherStore } from "./weather-store";

const store = {
  weather: new WeatherStore(),
};

const StoreContext = createContext(store);

export { store, StoreContext };
