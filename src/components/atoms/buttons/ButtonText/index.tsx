import React from 'react';
import styles, { Styles } from './ButtonText.styles';
import { Pressable, PressableProps, ViewStyle } from 'react-native';
import Spinner from '../../Spinner';
import Text from '../../Text';

interface Props extends PressableProps, Styles {
  children: React.ReactNode;
  style?: ViewStyle;
  loading?: boolean;
}

const ButtonText = ({
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
      {loading ? <Spinner color="white" /> : <Text size={20}>{children}</Text>}
    </Pressable>
  );
};

export default ButtonText;
