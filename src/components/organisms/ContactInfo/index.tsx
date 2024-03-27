import React from 'react';
import styles from './ContactInfo.styles';
import { Pressable, View, Linking } from 'react-native';
import { IContact } from '../../../types/contact';
import Title from '../../atoms/Title';
import Text from '../../atoms/Text';
import Button from '../../atoms/buttons/Button';
import { vibrantBlue, vibrantGreen } from '../../../theme';
import Icon from '../../atoms/Icon';

interface Props {
  item: IContact;
  onClose: () => void;
}

const ContactInfo = ({ item, onClose }: Props) => {
  const { name } = item;

  const handleCall = async () => await Linking.openURL(`tel:${item.phone}`);
  const handleWhatsApp = async () =>
    await Linking.openURL(`https://wa.me/${item.phone}`);

  return (
    <View style={styles().container}>
      <Title style={styles().title} size="xs">
        ¿Qué deseas hacer con {name}?
      </Title>

      <Button onPress={handleCall} style={styles(vibrantBlue).btn}>
        <Icon
          scale="30"
          viewBox="0 0 30 30"
          d="M28.1667 30C24.713 30 21.3032 29.1782 17.9375 27.5347C14.5717 25.8912 11.5625 23.7431 8.90971 21.0903C6.25693 18.4375 4.10879 15.4283 2.46529 12.0625C0.821764 8.69675 0 5.28703 0 1.83333C0 1.31481 0.175931 0.879625 0.527792 0.527791C0.879625 0.17593 1.31481 0 1.83333 0H7.97221C8.3611 0 8.70369 0.129625 9 0.388875C9.29628 0.648153 9.48146 0.99075 9.55554 1.41667L10.6667 6.86108C10.7222 7.24997 10.7153 7.60414 10.6458 7.92358C10.5764 8.24303 10.4259 8.5185 10.1944 8.75L6.08333 12.9167C7.50925 15.3056 9.1574 17.4306 11.0278 19.2917C12.8982 21.1528 15 22.7408 17.3333 24.0556L21.2778 20.0278C21.5463 19.7408 21.8681 19.5348 22.2431 19.4098C22.6181 19.2848 22.9908 19.2593 23.3611 19.3333L28.5833 20.4445C28.9908 20.5278 29.3287 20.7292 29.5972 21.0486C29.8657 21.3681 30 21.7408 30 22.1667V28.1667C30 28.6852 29.8241 29.1204 29.4722 29.4722C29.1204 29.8241 28.6852 30 28.1667 30Z"
          styles={styles().icon}
        />
        <Title size="xs">Llamar por teléfono</Title>
      </Button>

      <Button onPress={handleWhatsApp} style={styles(vibrantGreen).btn}>
        <Title size="xs">Escribirle por Whatsapp</Title>
      </Button>

      <Pressable onPress={onClose}>
        <Text style={styles().txt}>Ya no deseo comunicarme</Text>
      </Pressable>
    </View>
  );
};

export default ContactInfo;
