import React,{FC} from "react";
import {Image, Text, View} from '~/components/components';
import {styles} from "./styles";
import {ParsedCurrentDto} from "~/common/types/types";

type Props = {
  data: ParsedCurrentDto | {}
}
const MainInfo:FC<Props> = ({data}) => {

  if('city' in data) {
    const {city, condition, temperature, iconUrl} = data

    return(
      <View style={styles.wrapper}>
        <Text style={styles.mainText} >{city}</Text>
        <Text style={styles.mainText} >{temperature}</Text>
        <Text style={styles.secondaryText} >{condition}</Text>
        <Image source={{uri: iconUrl}} style={styles.image}/>
      </View>
    )
  }
  return null
}

export {MainInfo};
