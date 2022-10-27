import {StyleSheet} from "react-native";
import { colors } from "~/common/constants/colors";
import { SHADOW_STYLE } from "~/styles/styles";

const styles = StyleSheet.create({
  wrapper: {
    alignSelf: 'center',
    alignItems: 'center',
    height: 400,
  },
  mainText: {
    fontSize: 30,
    fontWeight: '700',
    marginTop: 30,
  },
  secondaryText: {
    fontSize: 20,
    fontWeight: '500',
  },
  icon: {
    width: 70,
    height: 70,
    resizeMode: 'contain',
  },
  hoursList: {
    marginTop: 20,
  },
})

export {styles};
