import { StyleSheet } from "react-native";
import { colors } from "~/common/constants/colors";
import { SHADOW_STYLE } from "~/styles/styles";

const styles = StyleSheet.create({
  screenWrapper: {
    paddingHorizontal: 20,
  },
  infoWrapper: {
    alignSelf: "center",
    width: "99%",
    marginTop: 30,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: colors.gray,
    backgroundColor: colors.white,
    ...SHADOW_STYLE.boxShadow,
  },
  divider: {
    backgroundColor: colors.gray,
    width: "100%",
    height: 1,
    marginVertical: 10,
  },
});

export { styles };
