import React from 'react';
import styles, { Styles } from './ErrorText.styles';
import { ColorValue, View } from 'react-native';
import { Icon, InfoIcon } from '@gluestack-ui/themed';
import Text from '../Text';

interface Props extends Styles {
  children: React.ReactNode;
  isVisible: boolean;
  color: ColorValue;
}

const ErrorText = ({
  children,
  isVisible,
  color,
  justifyContent = 'flex-start',
  marginBottom,
  marginTop,
}: Props) => {
  return (
    <>
      {isVisible && (
        <View
          style={styles({ justifyContent, marginBottom, marginTop }).container}>
          <Icon
            as={InfoIcon}
            w={20}
            h={20}
            color={color as string}
            marginRight={7}
          />
          <Text color={color} size={16.5}>
            {children}
          </Text>
        </View>
      )}
    </>
  );
};

export default ErrorText;
