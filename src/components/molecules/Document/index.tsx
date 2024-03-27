import React from 'react';
import styles from './Document.styles';
import { View } from 'react-native';
import Text from '../../atoms/Text';
import Icon from '../../atoms/Icon';
import { pastelLilac } from '../../../theme';

interface Props {
  isLast: boolean;
  title: string;
}

const Document = ({ isLast, title }: Props) => {
  return (
    <View style={styles(isLast).container}>
      <Icon
        width="16"
        height="20"
        viewBox="0 0 16 20"
        d="M2 20C1.45 20 0.979167 19.8042 0.5875 19.4125C0.195833 19.0208 0 18.55 0 18V2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0H10L16 6V18C16 18.55 15.8042 19.0208 15.4125 19.4125C15.0208 19.8042 14.55 20 14 20H2ZM9 7H14L9 2V7Z"
        fill={pastelLilac}
      />
      <Text style={styles().title}>{title}</Text>
    </View>
  );
};

export default Document;
