import React, {FC, useEffect} from 'react';
import {ScreenWrapper, ScrollView} from '~/components/components';
import {DayWeatherSegment, MainInfo} from './components/components';
import {useStore} from '~/hooks/useStore';
import {DataStatus} from '~/common/enums/data-status';
import { observer } from "mobx-react-lite"

const Home: FC = observer(() => {
  const {weather:{currentWeather, dataStatus, getWeather}} = useStore();
  useEffect(() => {
    getWeather()
  },[])
  const isLoaded = DataStatus.FULFILLED == dataStatus

  return (
    <ScreenWrapper>
      {isLoaded && (
      <ScrollView>
        <MainInfo data={currentWeather}/>
        <DayWeatherSegment contentContainerStyle={{marginTop: 10}}/>
        <DayWeatherSegment contentContainerStyle={{marginTop: 10}}/>
        <DayWeatherSegment contentContainerStyle={{marginTop: 10}}/>
        <DayWeatherSegment contentContainerStyle={{marginTop: 10}}/>
        <DayWeatherSegment contentContainerStyle={{marginTop: 10}}/>
        <DayWeatherSegment contentContainerStyle={{marginTop: 10}}/>
        <DayWeatherSegment contentContainerStyle={{marginTop: 10}}/>
        <DayWeatherSegment contentContainerStyle={{marginTop: 10}}/>
      </ScrollView>
      )}
    </ScreenWrapper>
  );
});

export {Home};
