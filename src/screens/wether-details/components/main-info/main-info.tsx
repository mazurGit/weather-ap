import React,{FC} from "react";
import {Image, Text, View} from '~/components/components';
import {images} from "~/assets/asset";
import {styles} from "./styles";
import {ParsedForecastDto} from "~/common/types/types";
import {dayNames, monthNames} from '~/common/constants/constants'
import {checkDateEqualToday} from "~/helpers/helpers";

type Props = {
  data: ParsedForecastDto;
}

const MainInfo:FC<Props> = ({data}) => {
  const {date, avgTemp, condition, iconUrl} = data
  const [dayName, day] = [dayNames[date.getDay()], `${monthNames[date.getMonth()]} ${date.getDate()}`]
  const isTodayDate = checkDateEqualToday(date)

  return(
    <View style={styles.wrapper}>
      <Text style={styles.mainText} >{isTodayDate ? 'Today' : dayName}</Text>
      <Text style={styles.secondaryText} >{day}</Text>
      <Text style={styles.mainText} >{avgTemp}</Text>
      <Text>Average temperature</Text>
      <Text style={styles.secondaryText} >{condition}</Text>
      <Image source={{uri: iconUrl}} style={styles.icon}/>
    </View>
  )
}

export {MainInfo};
