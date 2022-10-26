import React, {FC} from 'react';
import {View, Text, ScreenWrapper} from '~/components/components';
import {MainInfo, WeatherParameter} from './components/components';
import {styles} from './styles';

const WeatherDetails: FC = () => {
  return (
    <ScreenWrapper>
      <MainInfo/>
      <View style={styles.infoWrapper}>
        <WeatherParameter title='Fells like' value='15'/>
        <View style={styles.divider}/>
        <WeatherParameter title='Clouds' value='60%'/>
        <View style={styles.divider}/>
        <WeatherParameter title='Wind Speed' value='30km/h'/>
        <View style={styles.divider}/>
        <WeatherParameter title='Min.temperature' value='14'/>
        <View style={styles.divider}/>
        <WeatherParameter title='Max.temperature' value='18'/>
      </View>
    </ScreenWrapper>
  );
};

export {WeatherDetails};
