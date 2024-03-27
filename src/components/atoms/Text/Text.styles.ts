import { ColorValue, StyleSheet } from 'react-native';
import { white } from '../../../theme';
import { TextAlign } from '../../../types/text';

export interface Styles {
  isBold?: boolean;
  size?: number;
  color?: ColorValue;
  textAlign?: TextAlign;
}

export default (styles: Styles) => {
  const { isBold, size, color, textAlign } = styles;

  return StyleSheet.create({
    txt: {
      color: color || white,
      fontSize: size || 18,
      fontWeight: isBold ? 'bold' : 'normal',
      textAlign: textAlign || 'left',
    },
  });
};
