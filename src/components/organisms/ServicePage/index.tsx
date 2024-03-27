import React from 'react';
import styles from './ServicePage.styles';
import { View } from 'react-native';
import Text from '../../atoms/Text';
import { IService } from '../../../types/services';
import Image from '../../atoms/Image';
import Button from '../../atoms/buttons/Button';
import Title from '../../atoms/Title';
import { Divider } from '@gluestack-ui/themed';
import { lightSilver } from '../../../theme';

const ServicePage = ({ service }: { service: IService }) => {
  const { title, description, price } = service;

  return (
    <>
      <Image
        style={styles.img}
        source={{ uri: 'https://media.timeout.com/images/105846896/image.jpg' }}
      />

      <View style={styles.content}>
        <Title style={styles.title} size="base">
          {title}
        </Title>
        {/* <Text style={styles.txtSlogan}>{slogan}</Text> */}

        {/* <View style={styles.profileContainer}>
          <Profile logo={logo} by={by} stars={stars} />
        </View> */}

        <Divider bgColor={lightSilver} />

        <Text style={styles.txtDescription}>{description}</Text>
      </View>

      <View style={styles.actionContainer}>
        <View style={styles.priceContainer}>
          <Text style={styles.txtPrice}>
            S/{price?.split('.')[0]}.
            <Text style={styles.txtCents}>{price?.split('.')[1]}</Text>
          </Text>
        </View>
        <Button style={styles.btnAction}>
          <Text style={styles.txtAction}>Hacer pedido</Text>
        </Button>
      </View>
    </>
  );
};

export default ServicePage;
