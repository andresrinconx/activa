import { StyleSheet } from 'react-native';
import { darkSlateBlue, white } from '../../../theme';

export default (isTemplate?: boolean) =>
  StyleSheet.create({
    modal: {
      backgroundColor: isTemplate ? darkSlateBlue : white,
      borderRadius: 25,
      height: isTemplate ? '100%' : 'auto',
      paddingHorizontal: isTemplate ? 20 : 0,
      width: '100%',
    },
    scroll: {
      flexGrow: 1,
    },
  });
