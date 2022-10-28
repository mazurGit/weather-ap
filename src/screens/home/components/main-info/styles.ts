import {StyleSheet} from "react-native";
import {FONT_STYLES} from "~/styles/styles";
const styles = StyleSheet.create({
  wrapper: {
    alignSelf: 'center',
    alignItems: 'center',
  },
  mainText: {
    ...FONT_STYLES.fontWeightBold,
    fontSize: 30,
    marginTop: 30,
  },
  secondaryText: {
    ...FONT_STYLES.fontWeightMedium,
    fontSize: 20,
  },
  image: {
    width: 70,
    height: 70,
    resizeMode: 'contain',
  },
  hoursList: {
    marginTop: 30,
  },
})

export {styles};
