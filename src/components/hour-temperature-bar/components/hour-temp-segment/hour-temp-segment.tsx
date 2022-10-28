import React, { FC } from "react";
import { StyleProp, ViewStyle } from "react-native";
import { View, Text, Image } from "react-native";
import { styles } from "./styles";
import { ParsedHourWeather } from "~/common/types/types";

type Props = {
  data: ParsedHourWeather;
  contentContainerStyle?: StyleProp<ViewStyle>;
};
const HourTemperatureSegment: FC<Props> = ({ data, contentContainerStyle }) => {
  const { time, iconUrl, temperature } = data;
  const getHour = (date: Date) => {
    const hour = date.getHours();
    return hour < 10 ? `0${hour}` : hour;
  };

  return (
    <View style={[styles.wrapper, contentContainerStyle]}>
      <Text style={styles.text}>{getHour(time)}</Text>
      <Image source={{ uri: iconUrl }} style={styles.icon} />
      <Text style={styles.text}>{temperature}</Text>
    </View>
  );
};

export { HourTemperatureSegment };
