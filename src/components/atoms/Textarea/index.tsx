import React from 'react';
import styles from './Textarea.styles';
import { TextInput, TextInputProps, TextStyle, View } from 'react-native';
import { black, silverGray } from '../../../theme';
import Text from '../Text';

interface Props extends TextInputProps {
  style?: TextStyle;
  value: string;
  maxLength?: number;
}

const Textarea = ({ style, value, maxLength, ...props }: Props) => {
  return (
    <View style={{ ...styles.container, ...style }}>
      <TextInput
        {...props}
        maxLength={maxLength}
        style={styles.input}
        multiline={true}
        placeholderTextColor={silverGray}
        selectionColor={black}
        value={value}
      />
      {maxLength && (
        <Text style={styles.wordsCounter}>
          {value.length}/{maxLength}
        </Text>
      )}
    </View>
  );
};

export default Textarea;
