import React from 'react';
import styles, { Styles } from './AnyButton.styles';
import { Pressable, PressableProps, ViewStyle } from 'react-native';

interface Props extends PressableProps, Styles {
  children: React.ReactNode;
  style?: ViewStyle;
}

const AnyButton = ({ children, style, w, h, ...props }: Props) => {
  const buttonStyles = { w, h };

  return (
    <Pressable
      {...props}
      style={({ pressed }) => ({
        ...styles(pressed, buttonStyles).btn,
        ...style,
      })}>
      {children}
    </Pressable>
  );
};

export default AnyButton;
