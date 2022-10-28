import { StyleSheet } from "react-native";
import { colors } from "~/common/constants/colors";
import { SHADOW_STYLE } from "~/styles/styles";

const styles = StyleSheet.create({
  hoursList: {
    backgroundColor: colors.white,
    borderColor: colors.gray,
    borderRadius: 5,
    borderWidth: 1,
    ...SHADOW_STYLE.boxShadow,
    flexGrow: 0,
  },
  hourSegment: {
    marginHorizontal: 7,
  },
});

export { styles };
