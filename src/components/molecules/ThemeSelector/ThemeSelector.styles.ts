import { StyleSheet } from 'react-native';
import { ashGray, darkSlateBlue } from '../../../theme';

export default (isSelected?: boolean) =>
  StyleSheet.create({
    btnOption: {
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    container: {
      marginTop: 50,
      paddingHorizontal: 25,
    },
    optionsContainer: {
      marginTop: 10,
    },
    title: {
      color: ashGray,
      fontSize: 12,
      fontWeight: 'bold',
      textTransform: 'uppercase',
    },
    txtOption: {
      color: darkSlateBlue,
      fontSize: 17,
      fontWeight: isSelected ? 'bold' : 'normal',
    },
  });
