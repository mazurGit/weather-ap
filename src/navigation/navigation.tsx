import React, { FC } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootNavigationParamList } from "~/common/types/types";
import { RootScreenName } from "~/common/enums/navigation";
import { Home, WeatherDetails } from "~/screens/screens";
import { colors } from "~/common/constants/colors";

const NativeStack = createNativeStackNavigator<RootNavigationParamList>();

const Navigation: FC = () => {
  return (
    <NativeStack.Navigator>
      <NativeStack.Screen
        component={Home}
        name={RootScreenName.HOME}
        options={{ headerShown: false }}
      />
      <NativeStack.Screen
        component={WeatherDetails}
        name={RootScreenName.WEATHER_DETAILS}
        options={{
          title: "",
          headerStyle: {
            backgroundColor: colors.background,
          },
          headerShadowVisible: false,
        }}
      />
    </NativeStack.Navigator>
  );
};

export { Navigation };
