import React from 'react';
import styles from './LogOut.styles';
import Button from '../../atoms/buttons/Button';
import Text from '../../atoms/Text';
import { redCoral } from '../../../theme';
import Image from '../../atoms/Image';
import useNavigation from '../../../hooks/useNavigation';
import { useUserStore } from '../../../store';

const LogOut = () => {
  const navigation = useNavigation();
  const { setToken, setUser, setCurrentPAM } = useUserStore();

  const logOut = () => {
    setUser(null);
    setToken('');
    navigation.reset({
      index: 0,
      routes: [{ name: 'Login' }],
    });
    setCurrentPAM('');
  };

  return (
    <Button onPress={logOut} style={styles.btn} h={45}>
      <Image
        source={require('../../../assets/icons/logout.png')}
        style={styles.icon}
        resizeMode="contain"
      />
      <Text color={redCoral} isBold={true}>
        Cerrar Sesión
      </Text>
    </Button>
  );
};

export default LogOut;
