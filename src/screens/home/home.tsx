import React, {FC, useEffect} from 'react';
import {ScreenWrapper, ScrollView} from '~/components/components';
import {DayWeatherSegment, MainInfo} from './components/components';
import {weatherServices} from '~/services/services';
import { HttpUrlPath } from '~/common/enums/enums';

const Home: FC = () => {
  useEffect(() => {
    weatherServices.getWeather()
    .then(res => console.log(res))
  },[])

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
