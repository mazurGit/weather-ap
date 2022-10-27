import {RootScreenName} from '~/common/enums/enums';

type RootNavigationParamList = {
  [RootScreenName.HOME]: undefined;
  [RootScreenName.WEATHER_DETAILS]: {id: string};
};

export type {RootNavigationParamList};
