import { ColorValue, DimensionValue, StyleSheet } from 'react-native';

export interface Styles {
  backgroundColor?: ColorValue;
  w?: DimensionValue;
  h?: DimensionValue;
}

export default (pressed: boolean, styles: Styles) => {
  const { backgroundColor, w, h } = styles;

  return StyleSheet.create({
    btn: {
      alignItems: 'center',
      backgroundColor: backgroundColor,
      borderRadius: 25,
      height: h || 75,
      justifyContent: 'center',
      opacity: pressed ? 0.8 : 1,
      width: w || '100%',
    },
  });
};
