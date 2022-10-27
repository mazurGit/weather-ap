import React, {FC} from 'react';
import {observer} from 'mobx-react-lite';
import {useRoute, useStore, useEffect} from '~/hooks/hooks';
import {View, ScreenWrapper, ScrollView} from '~/components/components';
import {MainInfo, WeatherParameter} from './components/components';
import {styles} from './styles';
import {RootNavigationParamList} from '~/common/types/types';
import {RootScreenName} from '~/common/enums/navigation';
import {RouteProp} from '@react-navigation/core';
import {weatherInfo} from '~/common/constants/constants';

const WeatherDetails: FC = observer(() => {
  const {weather:{updateCurrentForecast, currentForecastDay}} = useStore()
  const {params:{id}} = useRoute<RouteProp<RootNavigationParamList, RootScreenName.WEATHER_DETAILS>>()
  useEffect(() =>{
    updateCurrentForecast(id)
  },[])
  if('condition' in currentForecastDay){
    return (
      <ScreenWrapper>
        <ScrollView showsVerticalScrollIndicator={false}>
          <MainInfo data={currentForecastDay}/>
          <View style={styles.infoWrapper}>
            {weatherInfo.map(({name, value}, iter) => (
              <>
                <WeatherParameter
                  title={value}
                  value={String(currentForecastDay[name])}
                  key={name}
                />
                {weatherInfo.length-1 !== iter && <View style={styles.divider}/>}
              </>
            ))}
          </View>
        </ScrollView>
      </ScreenWrapper>
    );
  }

  return null

});

export {WeatherDetails};
