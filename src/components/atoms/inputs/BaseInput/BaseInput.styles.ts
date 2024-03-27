import { StyleSheet } from 'react-native';
import { deepBlue, white } from '../../../../theme';

export interface Styles {
  textAlign?: 'left' | 'center' | 'right';
}

export default (styles: Styles) => {
  const { textAlign } = styles;

  return StyleSheet.create({
    input: {
      backgroundColor: white,
      borderRadius: 25,
      color: deepBlue,
      fontSize: 19,
      height: 75,
      textAlign: textAlign || 'left',
    },
  });
};
