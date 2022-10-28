import {StyleSheet} from "react-native";
import { colors } from "~/common/constants/constants";
import {SHADOW_STYLE, FONT_STYLES} from "~/styles/styles";

const styles = StyleSheet.create({
  wrapper:{
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 4,
    backgroundColor: colors.white,
    ...SHADOW_STYLE.boxShadow,
    width: '99%',
  },
  image: {
    alignSelf: 'center',
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  temperatureWrapper:{
    flexDirection: 'row',
    width: '45%'
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
  title:{
    width: '33%',
    ...FONT_STYLES.fontWeightRegular,
  },
  minTemp: {
    color: colors.textMinTemp,
    ...FONT_STYLES.fontWeightRegular,
    textAlign: 'right',
    flex: 1,
  },
  maxTemp: {
    color: colors.textMaxTemp,
    ...FONT_STYLES.fontWeightRegular,
    textAlign: 'right',
    flex: 1,
  },
})

export {styles};
