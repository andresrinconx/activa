import { DimensionValue, StyleSheet } from 'react-native';
import { royalBlue } from '../../../theme';

export interface Styles {
  h?: DimensionValue;
  w?: DimensionValue;
}

export default (h?: DimensionValue, w?: DimensionValue) =>
  StyleSheet.create({
    btn: {
      alignItems: 'center',
      backgroundColor: royalBlue,
      flexDirection: 'row',
      height: h || 65,
      justifyContent: 'center',
      width: w || '50%',
    },
    txt: {
      fontWeight: 'bold',
      marginLeft: 10,
    },
  });
