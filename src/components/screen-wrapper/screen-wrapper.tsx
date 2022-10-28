import React, {FC} from 'react';
import {NativeSafeAreaViewProps} from 'react-native-safe-area-context';
import {StatusBar, SafeAreaView} from 'react-native';
import {styles} from './styles';
import {colors} from '~/common/constants/colors';

const ScreenWrapper: FC<NativeSafeAreaViewProps> = ({children, style}) => {
  return (
    <SafeAreaView style={[styles.wrapper, style]}>
      <StatusBar
        backgroundColor={colors.background}
        translucent={false}
        barStyle="dark-content"
      />
      {children}
    </SafeAreaView>
  );
};

export {ScreenWrapper};
