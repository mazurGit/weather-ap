import {StyleSheet} from "react-native";
import { colors } from "~/common/constants/constants";
import {SHADOW_STYLE, FONT_STYLES} from "~/styles/styles";

const styles = StyleSheet.create({
  wrapper:{
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 4,
    backgroundColor: colors.white,
    ...SHADOW_STYLE.boxShadow,
    width: '90%',
  },
  image: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  temperatureWrapper:{
    flexDirection: 'row',
  },
  bar:{
    width: 40,
    height: 1,
    alignSelf: 'center',
    marginHorizontal: 5,
  },
  text:{
    fontSize: 18,
  },
  minTemp: {
    color: colors.blue,
  },
  maxTemp: {
    color: colors.red
  },
})

export {styles};
