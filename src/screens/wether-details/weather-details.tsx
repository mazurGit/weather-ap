import React, { FC, Fragment } from "react";
import { observer } from "mobx-react-lite";
import { useRoute, useStore, useEffect, useMemo } from "~/hooks/hooks";
import {
  View,
  ScreenWrapper,
  ScrollView,
  Spinner,
} from "~/components/components";
import { MainInfo, WeatherParameter } from "./components/components";
import { styles } from "./styles";
import { RootNavigationParamList } from "~/common/types/types";
import { RootScreenName } from "~/common/enums/navigation";
import { RouteProp } from "@react-navigation/core";
import { weatherInfo } from "~/common/constants/constants";

const WeatherDetails: FC = observer(() => {
  const {
    weather: { updateCurrentForecast, currentForecastDay },
  } = useStore();
  const {
    params: { id },
  } =
    useRoute<
      RouteProp<RootNavigationParamList, RootScreenName.WEATHER_DETAILS>
    >();
  useEffect(() => {
    updateCurrentForecast(id);
  }, [id]);
  const renderItem = useMemo(
    () =>
      weatherInfo.map(({ value, name }, iter) => (
        <Fragment key={name}>
          <WeatherParameter
            title={value}
            value={String(currentForecastDay[name])}
          />
          {iter !== weatherInfo.length - 1 && <View style={styles.divider} />}
        </Fragment>
      )),
    [currentForecastDay]
  );
  const isDataReady = currentForecastDay.id === id;

  return (
    <ScreenWrapper>
      <ScrollView style={styles.screenWrapper}>
        {isDataReady ? (
          <>
            <MainInfo data={currentForecastDay} />
            <View style={styles.infoWrapper}>{renderItem}</View>
          </>
        ) : (
          <Spinner />
        )}
      </ScrollView>
    </ScreenWrapper>
  );
});

export { WeatherDetails };
