import React, {FC} from 'react';
import {View, Text, ScreenWrapper} from '~/components/components';
import { DayWeatherSegment } from './components/components';

const Home: FC = () => {
  return (
    <ScreenWrapper>
      <DayWeatherSegment/>
    </ScreenWrapper>
  );
};

export {Home};
