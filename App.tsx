import React, {FC} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Navigation} from './src/navigation/navigation';
import {store, StoreContext} from '~/store/store';

const App: FC = () => {
  return (
    <StoreContext.Provider value={store}>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </StoreContext.Provider>
  );
};

export default App;

