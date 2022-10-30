import React, { FC } from "react";
import { observer } from "mobx-react-lite";
import {
  ScreenWrapper,
  ScrollView,
  View,
  Spinner,
} from "~/components/components";
import { DayWeatherSegment, MainInfo } from "./components/components";
import { useStore, useEffect, useMemo } from "~/hooks/hooks";
import { DataStatus } from "~/common/enums/data-status";
import { styles } from "./styles";

const Home: FC = observer(() => {
  const {
    weather: { currentWeather, dataStatus, getWeather, forecast },
  } = useStore();
  useEffect(() => {
    getWeather();
  }, []);
  const renderItem = useMemo(
    () =>
      forecast.map((day) => (
        <DayWeatherSegment
          data={day}
          contentContainerStyle={styles.daySegment}
          key={day.id}
        />
      )),
    [forecast]
  );

  const isLoaded = DataStatus.FULFILLED === dataStatus;

  return (
    <ScreenWrapper>
      <ScrollView style={styles.wrapper}>
        {isLoaded ? (
          <>
            <MainInfo data={currentWeather} />
            <View style={styles.daysWrapper}>{renderItem}</View>
          </>
        ) : (
          <Spinner />
        )}
      </ScrollView>
    </ScreenWrapper>
  );
});

export { Home };
