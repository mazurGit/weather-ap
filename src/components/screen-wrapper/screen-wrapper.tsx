import React, {FC} from 'react';
import {NativeSafeAreaViewProps} from 'react-native-safe-area-context';
import {StatusBar, SafeAreaView} from 'react-native';
import {styles} from './styles';

const ScreenWrapper: FC<NativeSafeAreaViewProps> = ({children, style}) => {
  return (
    <SafeAreaView style={[styles.wrapper, style]}>
      <StatusBar
        backgroundColor={'white'}
        translucent={false}
        barStyle="dark-content"
      />
      {children}
    </SafeAreaView>
  );
};

export {ScreenWrapper};
