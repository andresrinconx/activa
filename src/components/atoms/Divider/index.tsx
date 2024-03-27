import React from 'react';
import styles from './Divider.styles';
import { DimensionValue, View } from 'react-native';

const Divider = ({ marginVertical }: { marginVertical?: DimensionValue }) => {
  return <View style={styles(marginVertical).divider} />;
};

export default Divider;
