import { StyleSheet } from 'react-native';
import { duskBlue, vibrantBlue } from '../../../theme';

export default (isSelected?: boolean, isLast?: boolean, isFirst?: boolean) =>
  StyleSheet.create({
    btn: {
      backgroundColor: isSelected ? vibrantBlue : duskBlue,
      height: 32,
      marginLeft: isFirst ? 20 : 0,
      marginRight: isLast ? 20 : 10,
      paddingHorizontal: 12,
    },
    list: {
      overflow: 'visible',
      paddingBottom: 30,
    },
    txt: {
      fontSize: 15,
      fontWeight: isSelected ? 'bold' : 'normal',
    },
  });
