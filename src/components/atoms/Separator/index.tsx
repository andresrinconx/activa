import React from 'react';
import styles, { Styles } from './Separator.styles';
import { View } from 'react-native';

const Separator = ({ marginVertical }: Styles) => {
  return <View style={styles(marginVertical).separator} />;
};

export default Separator;
