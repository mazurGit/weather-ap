import React, {FC} from 'react';
import {observer} from "mobx-react-lite"
import {useMemo} from 'react';
import {ScreenWrapper, ScrollView, View} from '~/components/components';
import {DayWeatherSegment, MainInfo} from './components/components';
import {useStore, useEffect} from '~/hooks/hooks';
import {DataStatus} from '~/common/enums/data-status';
import {ParsedForecastDto} from '~/common/types/types';
import {styles} from './styles';

const Home: FC = observer(() => {
  const {weather:{currentWeather, dataStatus, getWeather, forecast}} = useStore();
  useEffect(() => {
    getWeather()
  },[])
  const renderItem = useMemo(() => (
    forecast.map(day => (
      <DayWeatherSegment
        data={day}
        contentContainerStyle={styles.daySegment}
        key={day.id}
      />
    ))
  ),[forecast])

  const isLoaded = DataStatus.FULFILLED == dataStatus


  return (
    <ScreenWrapper>
      <ScrollView style={styles.wrapper}>
      {isLoaded && (
        <>
          <MainInfo data={currentWeather}/>
          <View style={styles.daysWrapper}>
            {renderItem}
          </View>

        </>
      )}
       </ScrollView>
    </ScreenWrapper>
  );
});

export {Home};
