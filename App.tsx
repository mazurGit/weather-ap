import React, {FC} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Navigation} from './src/navigation/navigation';
import {useFonts, useCallback} from '~/hooks/hooks';
import {store, StoreContext} from '~/store/store';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

const App: FC = () => {
  let [fontsLoaded] =  useFonts({
    'Inter-Regular': require('./assets/fonts/Inter-Regular.ttf'),
    'Inter-Medium': require('./assets/fonts/Inter-Medium.ttf'),
    'Inter-SemiBold': require('./assets/fonts/Inter-SemiBold.ttf'),
    'Inter-Bold': require('./assets/fonts/Inter-Bold.ttf'),
    'Inter-ExtraBold': require('./assets/fonts/Inter-ExtraBold.ttf')
  })

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <StoreContext.Provider value={store}>
      <NavigationContainer onReady={onLayoutRootView}>
        <Navigation />
      </NavigationContainer>
    </StoreContext.Provider>
  );
};

export default App;

