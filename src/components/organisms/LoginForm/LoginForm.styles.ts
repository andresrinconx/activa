import { StyleSheet } from 'react-native';
import {
  darkSlateBlue,
  midnightNavy,
  periwinkleGray,
  royalBlue,
} from '../../../theme';

export default (disabled?: boolean) =>
  StyleSheet.create({
    btnCreateAccount: {
      backgroundColor: darkSlateBlue,
      borderColor: royalBlue,
      borderWidth: 2,
      marginVertical: 8,
    },
    btnLogin: {
      backgroundColor: disabled ? periwinkleGray : royalBlue,
      marginBottom: 12,
      marginTop: 8,
    },
    btnNeedHelp: {
      backgroundColor: midnightNavy,
      marginVertical: 8,
    },
    buttonsContainer: {
      width: '100%',
    },
    container: {
      alignItems: 'center',
      flex: 1,
      justifyContent: 'space-between',
    },
    formContainer: {
      flex: 1,
      width: '100%',
    },
    img: {
      height: 50,
      marginVertical: 35,
      width: 150,
    },
    input: {
      marginBottom: 10,
    },
    txtLogin: {
      fontWeight: 'bold',
    },
    txtRegister: {
      color: royalBlue,
      fontWeight: 'bold',
    },
    txts: {
      alignItems: 'center',
      marginBottom: 30,
    },
  });
