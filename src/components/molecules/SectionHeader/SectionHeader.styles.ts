import { StyleSheet } from 'react-native';
import { black, white } from '../../../theme';

export default (backgroundColor?: string, textWhite?: boolean) =>
  StyleSheet.create({
    btnBack: {
      alignItems: 'center',
      height: 50,
      justifyContent: 'center',
      paddingLeft: 10,
      paddingRight: 20,
    },
    container: {
      alignItems: 'center',
      backgroundColor,
      flexDirection: 'row',
      height: 70,
      justifyContent: 'space-between',
      paddingHorizontal: 15,
    },
    title: {
      color: textWhite ? white : black,
      fontSize: 22,
      fontWeight: 'bold',
    },
    titleContainer: {
      alignItems: 'center',
      flexDirection: 'row',
    },
  });
