import React from "react";
import {View, Text, Image, LinearGradient} from "~/components/components";
import {images} from "~/assets/asset";
import {styles} from "./styles";
import { colors } from "~/common/constants/constants";

const DayWeatherSegment = () =>{
  return(
    <View style={styles.wrapper}>
      <Text style={styles.text} >Today</Text>
      <Image source={images.cloud} style={styles.image}/>
      <View style={styles.temperatureWrapper}>
        <Text style={[styles.text, styles.minTemp]} >16°</Text>
        <LinearGradient
          colors={[colors.blue, colors.orange]}
          start={[0, 0.5]}
          end={[0.5, 0]}
          style={styles.bar}
        />
        <Text style={[styles.text, styles.maxTemp]}>18°</Text>
      </View>
    </View>
  )
}

export {DayWeatherSegment};
