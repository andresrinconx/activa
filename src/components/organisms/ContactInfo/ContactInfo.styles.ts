import { StyleSheet } from 'react-native';
import { black, fieryRed } from '../../../theme';

export default (backgroundColor?: string) =>
  StyleSheet.create({
    btn: {
      backgroundColor,
      height: 130,
      marginTop: 25,
    },
    container: {
      paddingHorizontal: 20,
      paddingVertical: 35,
    },
    icon: {
      marginBottom: 10,
    },
    title: {
      color: black,
      textAlign: 'center',
    },
    txt: {
      color: fieryRed,
      fontSize: 19,
      fontWeight: 'bold',
      marginTop: 30,
      textAlign: 'center',
    },
  });
