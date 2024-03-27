import { DimensionValue, StyleSheet } from 'react-native';
import { ashGray } from '../../../theme';

export default (marginVertical?: DimensionValue) =>
  StyleSheet.create({
    divider: {
      borderTopColor: ashGray,
      borderTopWidth: 0.5,
      marginVertical,
    },
  });
