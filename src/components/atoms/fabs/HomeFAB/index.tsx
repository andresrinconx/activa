import React from 'react';
import { Fab, FabLabel } from '@gluestack-ui/themed';
import { sapphireBlue } from '../../../../theme';
import useNavigation from '../../../../hooks/useNavigation';
import Icon from '../../Icon';

const HomeFAB = () => {
  const navigation = useNavigation();

  return (
    <Fab
      onPress={() => navigation.navigate('Home')}
      backgroundColor={sapphireBlue}
      width={82}
      height={82}
      size="lg"
      flexDirection="column">
      <Icon
        width="22"
        height="24"
        viewBox="0 0 22 24"
        d="M2.55545 21.7778H7.22215V13.5556H14.7777V21.7778H19.4444V9.1111L10.9999 2.77777L2.55545 9.1111V21.7778ZM0.333252 24V8L10.9999 0L21.6666 8V24H12.5555V15.7778H9.44435V24H0.333252Z"
      />
      <FabLabel fontSize={12}>Inicio</FabLabel>
    </Fab>
  );
};

export default HomeFAB;
