import { StyleSheet } from 'react-native';
import { black, white } from '../../../theme';

export default (backgroundColor?: string, isUnique?: boolean) =>
  StyleSheet.create({
    btn: {
      backgroundColor,
      height: 210,
      marginBottom: 16,
      width: isUnique ? '100%' : '47.5%',
    },
    iconContainer: {
      alignItems: 'center',
      height: '70%',
      justifyContent: 'center',
      width: '100%',
    },
    textContainer: {
      alignItems: 'center',
      backgroundColor: white,
      borderBottomLeftRadius: 25,
      borderBottomRightRadius: 25,
      height: '30%',
      justifyContent: 'center',
      overflow: 'hidden',
      width: '100%',
    },
    txt: {
      color: black,
    },
  });
