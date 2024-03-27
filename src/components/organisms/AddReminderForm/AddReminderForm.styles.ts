import { StyleSheet } from 'react-native';
import { black, periwinkleGray, royalBlue } from '../../../theme';

export default (disabledBtn?: boolean, md?: boolean) =>
  StyleSheet.create({
    btnAcept: {
      backgroundColor: disabledBtn ? periwinkleGray : royalBlue,
      marginVertical: 10,
    },
    container: {
      marginTop: 30,
    },
    pickerContainer: {
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 30,
    },
    pickers: {
      flexDirection: md ? 'row' : 'column',
      justifyContent: 'space-between',
    },
    textarea: {
      marginBottom: 10,
    },
    title: {
      color: black,
      marginBottom: 50,
      textAlign: 'center',
    },
    txt: {
      color: black,
      fontSize: 21,
      paddingRight: md ? 20 : 0,
    },
    txtAcept: {
      fontWeight: 'bold',
    },
  });
