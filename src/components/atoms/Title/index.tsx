import React from 'react';
import styles, { Styles } from './Title.styles';
import { Text as RNText, TextProps, TextStyle } from 'react-native';

interface Props extends TextProps, Styles {
  children: React.ReactNode;
  style?: TextStyle;
}

const Title = ({
  children,
  style,
  size = 'xl',
  color,
  textAlign,
  ...props
}: Props) => {
  const titleStyles = { size, color, textAlign };

  return (
    <RNText style={{ ...styles(titleStyles).title, ...style }} {...props}>
      {children}
    </RNText>
  );
};

export default Title;
