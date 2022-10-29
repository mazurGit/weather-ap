import { StyleSheet } from "react-native";
import { FONT_STYLES } from "~/styles/styles";

const styles = StyleSheet.create({
  wrapper: {
    alignSelf: "center",
    alignItems: "center",
  },
  mainText: {
    ...FONT_STYLES.fontWeightBold,
    fontSize: 30,
  },
  avgTemp: {
    marginTop: 20,
  },
  secondaryText: {
    ...FONT_STYLES.fontWeightMedium,
    fontSize: 20,
    fontWeight: "500",
  },
  icon: {
    width: 70,
    height: 70,
    resizeMode: "contain",
  },
  hoursList: {
    marginTop: 20,
  },
});

export { styles };
