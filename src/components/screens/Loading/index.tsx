import React, { useEffect } from 'react';
import styles from './Loading.styles';
import Background from '../../templates/Background';
import Title from '../../atoms/Title';
import Text from '../../atoms/Text';
import { View } from 'react-native';
import useNavigation from '../../../hooks/useNavigation';
import Image from '../../atoms/Image';

const Loading = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.reset({
        index: 0,
        routes: [{ name: 'Home' }],
      });
    }, 2000);
  }, []);

  return (
    <Background>
      <View style={styles.content}>
        <Title size="base">Ingresando</Title>
        <Text style={styles.txt}>
          Estamos configurando tu sesión de usuario. ¡Gracias por tu paciencia!
        </Text>
        <Image
          source={require('../../../assets/images/loader.png')}
          isContain={true}
          style={styles.img}
        />
      </View>
    </Background>
  );
};

export default Loading;
