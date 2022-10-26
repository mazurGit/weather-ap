import React, {FC} from "react";
import {StyleProp, ViewStyle} from "react-native";
import {View, Text} from '~/components/components';
import {styles} from './styles';

type Props = {
  title: string;
  value: string;
  contentContainerStyle?: StyleProp<ViewStyle>
}
const WeatherParameter:FC<Props> = ({title, value, contentContainerStyle}) => {
  return(
    <View style={[styles.wrapper, contentContainerStyle]}>
      <Text style={styles.text} >{title}</Text>
      <Text style={styles.text}>{value}</Text>
    </View>
  )
};

export {WeatherParameter};
