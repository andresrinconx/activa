import { ColorValue, DimensionValue, StyleSheet } from 'react-native';
import { black, white } from '../../../theme';

const SCALE = 100;

export interface Styles {
  backgroundColor?: ColorValue;
  mx?: DimensionValue;
}

export default (backgroundColor?: ColorValue, mx?: DimensionValue) =>
  StyleSheet.create({
    container: {
      alignItems: 'flex-start',
      backgroundColor: backgroundColor || white,
      flexDirection: 'row',
      height: SCALE,
      justifyContent: 'space-between',
      marginHorizontal: mx || 0,
    },
    dataContainer: {
      flex: 1,
      height: '100%',
      justifyContent: 'center',
      padding: 16,
    },
    img: {
      borderRadius: 25,
      height: '100%',
      width: '100%',
    },
    imgContainer: {
      height: SCALE,
      padding: 4,
      width: SCALE,
    },
    title: {
      color: black,
      fontSize: 18,
      fontWeight: 'bold',
    },
    txtRelation: {
      color: black,
      fontSize: 16,
    },
  });
