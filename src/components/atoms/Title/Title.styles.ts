import { ColorValue, StyleSheet } from 'react-native';
import { white } from '../../../theme';

export interface Styles {
  size?: 'sm' | 'base' | 'lg' | 'xl' | 'xs';
  color?: ColorValue;
  textAlign?: 'left' | 'center' | 'right';
}

export default (styles: Styles) => {
  const { size, color, textAlign } = styles;

  const sizeMapping = {
    xs: 22,
    sm: 26,
    base: 28,
    lg: 32,
    xl: 36,
  };

  return StyleSheet.create({
    title: {
      color: color || white,
      fontSize: sizeMapping[size || 'xl'],
      fontWeight: 'bold',
      textAlign: textAlign || 'left',
    },
  });
};
