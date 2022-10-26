import React, {FC} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootNavigationParamList} from '~/common/types/types';
import {RootScreenName} from '~/common/enums/navigation';
import {Home, WeatherDetails} from '~/screens/screens';

const NativeStack = createNativeStackNavigator<RootNavigationParamList>();

const Navigation: FC = () => {
  return (
    <NativeStack.Navigator screenOptions={{headerShown: false }}>
      <NativeStack.Screen component={Home} name={RootScreenName.HOME} />
      <NativeStack.Screen component={WeatherDetails} name={RootScreenName.WEATHER_DETAILS} />
    </NativeStack.Navigator>
  );
};

export {Navigation};
