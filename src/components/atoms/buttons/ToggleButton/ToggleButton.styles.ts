import { ColorValue, StyleSheet } from 'react-native';
import { periwinkleGray, royalBlue, white } from '../../../../theme';

export interface Style {
  enabledColor?: ColorValue;
}

export default (disabled?: boolean, enabledColor?: ColorValue) =>
  StyleSheet.create({
    btn: {
      backgroundColor: disabled ? periwinkleGray : enabledColor || royalBlue,
    },
    txt: {
      color: white,
      fontWeight: 'bold',
    },
  });
