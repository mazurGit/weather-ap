import React, {FC} from 'react';
import {ScreenWrapper, ScrollView} from '~/components/components';
import {DayWeatherSegment, MainInfo} from './components/components';

const Home: FC = () => {
  return (
    <ScreenWrapper>
      <ScrollView>
        <MainInfo/>
        <DayWeatherSegment contentContainerStyle={{marginTop: 10}}/>
        <DayWeatherSegment contentContainerStyle={{marginTop: 10}}/>
        <DayWeatherSegment contentContainerStyle={{marginTop: 10}}/>
        <DayWeatherSegment contentContainerStyle={{marginTop: 10}}/>
        <DayWeatherSegment contentContainerStyle={{marginTop: 10}}/>
        <DayWeatherSegment contentContainerStyle={{marginTop: 10}}/>
        <DayWeatherSegment contentContainerStyle={{marginTop: 10}}/>
        <DayWeatherSegment contentContainerStyle={{marginTop: 10}}/>
      </ScrollView>
    </ScreenWrapper>
  );
};

export {Home};
