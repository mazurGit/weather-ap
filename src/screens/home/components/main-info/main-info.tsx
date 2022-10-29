import React, { FC } from "react";
import { Image, Text, View, HourTemperatureBar } from "~/components/components";
import { styles } from "./styles";
import { ParsedCurrentDto } from "~/common/types/types";

type Props = {
  data: ParsedCurrentDto;
};
const MainInfo: FC<Props> = ({ data }) => {
  const { city, condition, temperature, iconUrl, hours } = data;

  return (
    <View style={styles.wrapper}>
      <Text style={styles.mainText}>{city}</Text>
      <Text style={styles.mainText}>{temperature}</Text>
      <Text style={styles.secondaryText}>{condition}</Text>
      <Image source={{ uri: iconUrl }} style={styles.image} />
      <HourTemperatureBar
        data={hours}
        contentContainerStyle={styles.hoursList}
      />
    </View>
  );
};

export { MainInfo };
