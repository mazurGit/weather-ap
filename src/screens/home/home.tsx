import React, {FC} from 'react';
import { observer } from "mobx-react-lite"
import {ScreenWrapper, FlatList} from '~/components/components';
import {DayWeatherSegment, MainInfo} from './components/components';
import {useStore, useEffect} from '~/hooks/hooks';
import {DataStatus} from '~/common/enums/data-status';
import {ParsedForecastDto} from '~/common/types/types';


const Home: FC = observer(() => {
  const {weather:{currentWeather, dataStatus, getWeather, forecast}} = useStore();
  useEffect(() => {
    getWeather()
  },[])
  const renderItem = ({item}:{item: ParsedForecastDto}) => (
    <DayWeatherSegment
      data={item}
      contentContainerStyle = {{marginTop: 10}}
      />
  );
  const isLoaded = DataStatus.FULFILLED == dataStatus

  return (
    <ScreenWrapper>
      {isLoaded && (
      <FlatList
        showsHorizontalScrollIndicator={false}
        ListHeaderComponent={() => <MainInfo data={currentWeather}/>}
        data={forecast}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      )}
    </ScreenWrapper>
  );
});

export {Home};
