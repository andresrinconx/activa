import { DimensionValue, StyleSheet } from 'react-native';
import { pastelLilac, white } from '../../../theme';

export interface Styles {
  marginTop?: DimensionValue;
}

export default (marginTop?: DimensionValue) =>
  StyleSheet.create({
    container: {
      alignItems: 'center',
      flex: 1,
      marginTop: marginTop || 0,
    },
    grayBar: {
      backgroundColor: pastelLilac,
      borderTopLeftRadius: 25,
      borderTopRightRadius: 25,
      height: 10,
      width: '88%',
    },
    sheet: {
      backgroundColor: white,
      borderTopLeftRadius: 25,
      borderTopRightRadius: 25,
      flex: 1,
      // paddingHorizontal: 25,
      paddingTop: 30,
      width: '100%',
    },
  });
