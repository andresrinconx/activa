import { StyleSheet } from 'react-native';
import {
  lightGray,
  midnightNavy,
  sapphireBlue,
  steelBlue,
  white,
} from '../../../theme';

export default (
  isOptionSelected?: boolean,
  isFirst?: boolean,
  isLast?: boolean,
) =>
  StyleSheet.create({
    btnSelector: {
      backgroundColor: isOptionSelected ? sapphireBlue : midnightNavy,
      borderBottomLeftRadius: isFirst ? 25 : 0,
      borderBottomRightRadius: isLast ? 25 : 0,
      borderColor: steelBlue,
      borderLeftWidth: 2,
      borderRightWidth: isFirst ? 0 : 2,
      borderTopLeftRadius: isFirst ? 25 : 0,
      borderTopRightRadius: isLast ? 25 : 0,
      borderWidth: 2,
      width: '50%',
    },
    selector: {
      flexDirection: 'row',
      paddingBottom: 20,
      width: '100%',
    },
    txtSelector: {
      color: isOptionSelected ? white : lightGray,
      fontSize: 17,
      fontWeight: isOptionSelected ? '500' : 'normal',
      textAlign: 'center',
    },
  });
