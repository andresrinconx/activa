import { DimensionValue, StyleSheet } from 'react-native';

export interface Styles {
  w: DimensionValue;
  h: DimensionValue;
}

export default (pressed: boolean, styles: Styles) => {
  const { w, h } = styles;

  return StyleSheet.create({
    btn: {
      height: h,
      opacity: pressed ? 0.8 : 1,
      width: w,
    },
  });
};
