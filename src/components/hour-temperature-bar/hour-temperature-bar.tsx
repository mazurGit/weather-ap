import React,{FC} from "react";
import {StyleProp, ViewStyle} from 'react-native'
import {FlatList} from 'react-native';
import {HourTemperatureSegment} from './components/components';
import {styles} from "./styles";
import {ParsedHourWeather} from "~/common/types/types";

type Props = {
  data: ParsedHourWeather[] | [];
  contentContainerStyle?: StyleProp<ViewStyle>;
}

const HourTemperatureBar:FC<Props> = ({data, contentContainerStyle}) => {
    const renderItem = (({item}:{item:ParsedHourWeather}) => (
      <HourTemperatureSegment
        data={item}
        contentContainerStyle={styles.hourSegment}
      />
    ))

  return(
      <FlatList
        showsHorizontalScrollIndicator= {false}
        horizontal={true}
        data={data}
        keyExtractor={item => item.time.toString()}
        renderItem = {renderItem}
        style = {[styles.hoursList, contentContainerStyle]}
      />
  )
}

export {HourTemperatureBar};
