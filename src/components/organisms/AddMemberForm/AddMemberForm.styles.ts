import { StyleSheet } from 'react-native';
import {
  black,
  lightGray,
  periwinkleGray,
  royalBlue,
  silverGray,
} from '../../../theme';

export default (disabled?: boolean) =>
  StyleSheet.create({
    btnRegister: {
      backgroundColor: disabled ? periwinkleGray : royalBlue,
      marginBottom: 12,
      marginTop: 20,
    },
    container: {
      justifyContent: 'space-between',
      paddingTop: 30,
    },
    createAccount: {
      marginBottom: 8,
    },
    form: {
      alignItems: 'center',
      flex: 1,
    },
    input: {
      borderColor: silverGray,
      borderWidth: 1,
    },
    link: {
      textDecorationLine: 'underline',
    },
    passwordLevel: {
      width: '100%',
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
      color: black,
      marginVertical: 20,
      textAlign: 'center',
    },
    txtPasswordLabel: {
      color: black,
      marginBottom: 10,
      marginTop: 3,
    },
  });
