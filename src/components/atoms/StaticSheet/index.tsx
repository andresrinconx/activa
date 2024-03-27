import React from 'react';
import styles, { Styles } from './StaticSheet.styles';
import { View } from 'react-native';

interface Props extends Styles {
  children: React.ReactNode;
  showTopBar?: boolean;
}

const StaticSheet = ({ children, showTopBar = true, marginTop }: Props) => {
  return (
    <View style={styles(marginTop).container}>
      {showTopBar && <View style={styles().grayBar} />}
      <View style={styles().sheet}>{children}</View>
    </View>
  );
};

export default StaticSheet;
