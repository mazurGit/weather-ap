import React,{FC} from 'react';
import {ActivityIndicator, ColorValue} from 'react-native';
import {styles} from './styles'

type Props = {
  size?: number;
  color?: ColorValue;
};

const Spinner: FC<Props> = ({size = 60, color}) => {
  return <ActivityIndicator size={size} color={color} style={styles.spinner}/>;
};

export {Spinner};
