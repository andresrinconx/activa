import { DimensionValue, StyleSheet } from 'react-native';

export interface Styles {
  justifyContent?: 'flex-start' | 'flex-end' | 'center';
  marginBottom?: DimensionValue;
  marginTop?: DimensionValue;
}

export default (styles: Styles) => {
  const { justifyContent, marginBottom, marginTop } = styles;

  return StyleSheet.create({
    container: {
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: justifyContent || 'flex-start',
      marginBottom: marginBottom || 15,
      marginTop: marginTop || 0,
      width: '100%',
    },
    txt: {
      width: '100%',
    },
  });
};
