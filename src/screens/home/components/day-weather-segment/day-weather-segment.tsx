import React, {FC} from "react";
import {View, Text, Image, LinearGradient, TouchableOpacity} from "~/components/components";
import {StyleProp, ViewStyle} from "react-native";
import {images} from "~/assets/asset";
import {styles} from "./styles";
import {colors} from "~/common/constants/constants";
import {useNavigation} from  "~/hooks/hooks"
import {RootNavigationProps} from "~/common/types/types";
import {RootScreenName} from "~/common/enums/navigation";

type Props = {
  contentContainerStyle?: StyleProp<ViewStyle>;
}

const DayWeatherSegment:FC<Props> = ({contentContainerStyle}) =>{
  const navigation = useNavigation<RootNavigationProps>()
  const onDayPress =() =>{
    navigation.navigate(RootScreenName.WEATHER_DETAILS)
  }

  return(
    <TouchableOpacity
      style={[styles.wrapper, contentContainerStyle]}
      onPress={onDayPress}
    >
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
    </TouchableOpacity>
  )
}

export {DayWeatherSegment};
