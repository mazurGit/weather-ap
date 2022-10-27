import React, {FC} from "react";
import {View, Text, Image, LinearGradient, TouchableOpacity} from "~/components/components";
import {StyleProp, ViewStyle} from "react-native";
import {styles} from "./styles";
import {colors} from "~/common/constants/constants";
import {useNavigation} from  "~/hooks/hooks"
import {ParsedForecastDto, RootNavigationProps} from "~/common/types/types";
import {RootScreenName} from "~/common/enums/navigation";
import {dayNames} from '~/common/constants/constants';
import {checkDateEqualToday} from '~/helpers/helpers';

type Props = {
  contentContainerStyle?: StyleProp<ViewStyle>;
  data: ParsedForecastDto;
}

const DayWeatherSegment:FC<Props> = ({contentContainerStyle, data}) =>{
  const {minTemp, maxTemp, iconUrl, date, id} = data
  const navigation = useNavigation<RootNavigationProps>()
  const onDayPress =() =>{
    navigation.navigate(RootScreenName.WEATHER_DETAILS,{id})
  }
  const isTodaysDate = checkDateEqualToday(date)

  return(
    <TouchableOpacity
      style={[styles.wrapper, contentContainerStyle]}
      onPress={onDayPress}
    >
      <Text style={[styles.text, styles.title]} >{isTodaysDate ? 'Today' :  dayNames[date.getDay()]}</Text>
      <Image source={{uri: iconUrl}} style={styles.image}/>
      <View style={styles.temperatureWrapper}>
        <Text style={[styles.text, styles.minTemp]} >{minTemp}</Text>
        <LinearGradient
          colors={[colors.blue, colors.orange]}
          start={[0, 0.5]}
          end={[0.5, 0]}
          style={styles.bar}
        />
        <Text style={[styles.text, styles.maxTemp]}>{maxTemp}</Text>
      </View>
    </TouchableOpacity>
  )
}

export {DayWeatherSegment};
