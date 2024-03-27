import { StyleSheet } from 'react-native';
import { lightGray, periwinkleGray, royalBlue } from '../../../theme';

export default (disabled?: boolean) =>
  StyleSheet.create({
    btnRegister: {
      backgroundColor: disabled ? periwinkleGray : royalBlue,
      marginBottom: 12,
      marginTop: 8,
    },
    container: {
      justifyContent: 'space-between',
      paddingBottom: 15,
    },
    createAccount: {
      marginBottom: 8,
    },
    form: {
      alignItems: 'center',
      flex: 1,
    },
    link: {
      textDecorationLine: 'underline',
    },
    scrollContainer: {
      flex: 1,
    },
    termsContainer: {
      alignItems: 'center',
      marginVertical: 10,
    },
    text: {
      color: lightGray,
      fontSize: 15,
      textAlign: 'center',
    },
    title: {
      marginVertical: 20,
      textAlign: 'center',
    },
  });
