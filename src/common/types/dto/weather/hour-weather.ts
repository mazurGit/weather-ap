import { Condition } from "./condition";

type HourWeather = {
  time: string;
  condition: Condition;
  temp_c: number;
};

export type { HourWeather };
