import { DimensionValue, StyleSheet } from 'react-native';

export interface Styles {
  marginVertical?: DimensionValue;
}

export default (marginVertical?: DimensionValue) =>
  StyleSheet.create({
    separator: {
      marginVertical: marginVertical || 4,
    },
  });
