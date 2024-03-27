import React from 'react';
import styles, { Styles } from './BaseInput.styles';
import {
  TextInput as RNTextInput,
  TextInputProps,
  TextStyle,
} from 'react-native';
import { deepBlue, periwinkleBlue } from '../../../../theme';

interface Props extends TextInputProps, Styles {
  style?: TextStyle;
}

const BaseInput = ({ style, textAlign, ...props }: Props) => {
  const textInputStyles = {
    textAlign,
  };

  return (
    <RNTextInput
      {...props}
      style={{ ...styles(textInputStyles).input, ...style }}
      placeholderTextColor={periwinkleBlue}
      selectionColor={deepBlue}
    />
  );
};

export default BaseInput;
