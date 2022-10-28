import {StyleSheet} from 'react-native';
import {colors} from '~/common/constants/colors';

const styles = StyleSheet.create({
  hoursList: {
    backgroundColor: colors.white,
    borderColor: colors.gray,
    borderRadius: 5,
    borderWidth: 1,
    flexGrow: 0,
  },
  hourSegment: {
    marginHorizontal: 7,
  }
})

export {styles};
