import React from "react";
import {Image, Text, View} from '~/components/components';
import {images} from "~/assets/asset";
import {styles} from "./styles";

const MainInfo = () => {
  return(
    <View style={styles.wrapper}>
      <Text style={styles.mainText} >Tuesday</Text>
      <Text style={styles.secondaryText} >October 26</Text>
      <Text style={styles.mainText} >17°C</Text>
      <Text style={styles.secondaryText} >Cloudy</Text>
      <Image source={images.cloud} />
    </View>
  )
}

export {MainInfo};
