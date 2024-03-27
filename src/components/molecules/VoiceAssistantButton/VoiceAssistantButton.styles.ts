import { StyleSheet } from 'react-native';
import { periwinkleGray, royalBlue } from '../../../theme';

export default (isListening?: boolean) =>
  StyleSheet.create({
    btn: {
      alignItems: 'center',
      backgroundColor: isListening ? periwinkleGray : royalBlue,
      flexDirection: 'row',
      flex: 1,
      height: 85,
    },
    container: {
      alignItems: 'center',
      flexDirection: 'row',
    },
    icon: {
      position: 'absolute',
      right: 0,
    },
    iconContainer: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    txt: {
      fontSize: 22,
      fontWeight: 'bold',
    },
  });
