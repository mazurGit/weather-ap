import {StyleSheet} from "react-native";
import {colors} from "~/common/constants/colors";

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  text: {
    flex: 1,
    fontSize: 18,
    color: colors.textSecondary
  },
  textValue: {
    flex: 0.5
  }
});

export {styles};
