import React from 'react';
import styles, { Styles } from './Text.styles';
import { Text as RNText, TextProps, TextStyle } from 'react-native';

interface Props extends TextProps, Styles {
  children: React.ReactNode;
  style?: TextStyle;
}

const Text = ({
  children,
  style,
  isBold,
  size,
  color,
  textAlign,
  ...props
}: Props) => {
  const textStyles = {
    isBold,
    size,
    color,
    textAlign,
  };

  return (
    <RNText style={{ ...styles(textStyles).txt, ...style }} {...props}>
      {children}
    </RNText>
  );
};

export default Text;
