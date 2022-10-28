import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  spinner: {
    width,
    height,
    alignSelf: "center",
    zIndex: 1,
    elevation: 1,
  },
});

export { styles };
