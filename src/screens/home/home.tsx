import React, {FC} from 'react';
import { observer } from "mobx-react-lite"
import {ScreenWrapper, FlatList, View} from '~/components/components';
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
  const renderItem = ({item}:{item: ParsedForecastDto}) => (
    <DayWeatherSegment
      data={item}
      contentContainerStyle = {{marginTop: 10}}
      />
  );
  const isLoaded = DataStatus.FULFILLED == dataStatus

  return (
    <ScreenWrapper>
      <View style={styles.wrapper}>
      {isLoaded && (
        <FlatList
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={() => <MainInfo data={currentWeather}/>}
          data={forecast}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
        )}
       </View>
    </ScreenWrapper>
  );
});

export {Home};
