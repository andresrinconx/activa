import React from 'react';
import styles from './SectionCard.styles';
import Button from '../../atoms/buttons/Button';
import Text from '../../atoms/Text';
import { View } from 'react-native';

interface Props {
  title: string;
  icon: React.ReactNode;
  backgroundColor: string;
  onPress: () => void;
  isUnique: boolean;
}

const SectionCard = ({
  title,
  icon,
  backgroundColor,
  onPress,
  isUnique,
}: Props) => {
  return (
    <Button onPress={onPress} style={styles(backgroundColor, isUnique).btn}>
      <View style={styles().iconContainer}>{icon}</View>
      <View style={styles().textContainer}>
        <Text style={styles().txt}>{title}</Text>
      </View>
    </Button>
  );
};

export default SectionCard;
