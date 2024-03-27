import React from 'react';
import styles, { Styles } from './ContactCard.styles';
import { View } from 'react-native';
import Button from '../../atoms/buttons/Button';
import Image from '../../atoms/Image';
import Text from '../../atoms/Text';
import { IContact } from '../../../types/contact';

interface Props extends Styles {
  item: IContact;
  onPress?: () => void;
  disabled?: boolean;
}

const ContactCard = ({
  item,
  onPress,
  backgroundColor,
  mx,
  disabled = false,
}: Props) => {
  const { name, relation, profilePhoto } = item;

  return (
    <>
      <Button
        onPress={onPress}
        style={styles(backgroundColor, mx).container}
        disabled={disabled}>
        <View style={styles().imgContainer}>
          <Image style={styles().img} source={profilePhoto} />
        </View>

        <View style={styles().dataContainer}>
          <Text style={styles().title}>{name}</Text>
          <Text style={styles().txtRelation}>{relation}</Text>
        </View>
      </Button>
    </>
  );
};

export default React.memo(ContactCard);
