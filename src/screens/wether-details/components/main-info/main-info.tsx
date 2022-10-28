import React, { FC } from "react";
import { StyleProp, ViewStyle } from "react-native";
import { Image, Text, View, HourTemperatureBar } from "~/components/components";
import { styles } from "./styles";
import { ParsedForecastDto } from "~/common/types/types";
import { dayNames, monthNames } from "~/common/constants/constants";
import { checkDateEqualToday } from "~/helpers/helpers";

type Props = {
  data: ParsedForecastDto;
  contentContainerStyle?: StyleProp<ViewStyle>;
};

const MainInfo: FC<Props> = ({ data, contentContainerStyle }) => {
  const { date, avgTemp, condition, iconUrl, hours } = data;
  const [dayName, day] = [
    dayNames[date.getDay()],
    `${monthNames[date.getMonth()]} ${date.getDate()}`,
  ];
  const isTodayDate = checkDateEqualToday(date);

  return (
    <View style={[styles.wrapper, contentContainerStyle]}>
      <Text style={styles.mainText}>{isTodayDate ? "Today" : dayName}</Text>
      <Text style={styles.secondaryText}>{day}</Text>
      <Text style={styles.mainText}>{avgTemp}</Text>
      <Text>Average temperature</Text>
      <Text style={styles.secondaryText}>{condition}</Text>
      <Image source={{ uri: iconUrl }} style={styles.icon} />
      <HourTemperatureBar
        data={hours}
        contentContainerStyle={styles.hoursList}
      />
    </View>
  );
};

export { MainInfo };
