import React from 'react';
import styles, { Styles } from './Button.styles';
import { Pressable, PressableProps, ViewStyle } from 'react-native';
import Spinner from '../../Spinner';

interface Props extends PressableProps, Styles {
  children: React.ReactNode;
  style?: ViewStyle;
  loading?: boolean;
}

const Button = ({
  children,
  style,
  backgroundColor,
  w,
  h,
  loading,
  ...props
}: Props) => {
  const buttonStyles = { backgroundColor, w, h };

  return (
    <Pressable
      {...props}
      style={({ pressed }) => ({
        ...styles(pressed, buttonStyles).btn,
        ...style,
      })}>
      {loading ? <Spinner color="white" /> : children}
    </Pressable>
  );
};

export default Button;
