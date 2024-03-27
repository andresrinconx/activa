import { StyleSheet } from 'react-native';
import { black, pearlWhite } from '../../../theme';

export default (isLast?: boolean) =>
  StyleSheet.create({
    container: {
      alignItems: 'center',
      borderBottomColor: pearlWhite,
      borderBottomWidth: isLast ? 0 : 1,
      flexDirection: 'row',
      paddingVertical: 20,
    },
    title: {
      color: black,
      fontSize: 18,
      fontWeight: 'bold',
      marginLeft: 20,
    },
  });
