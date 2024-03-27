import React, { useState } from 'react';
import styles from './HelpFAB.styles';
import { Fab, FabLabel } from '@gluestack-ui/themed';
import { babyBlue, black, oceanBlue, royalBlue } from '../../../../theme';
import Image from '../../Image';
import Modal from '../../Modal';
import Text from '../../Text';
import ButtonText from '../../buttons/ButtonText';
import { View } from 'react-native';
import useHttp from '../../../../hooks/useHttp';
import useNavigation from '../../../../hooks/useNavigation';
import useNotification from '../../../../hooks/useNotification';

interface Props {
  screen: string;
  details?: string;
}

const HelpFAB: React.FC<Props> = ({ screen, details }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const navigation = useNavigation();
  const { post } = useHttp(navigation);
  const { showToast } = useNotification();

  const handleAccept = async () => {
    setIsLoading(true);
    const res = await post('/help/', {}, { scream: screen, details }, {});
    if (res) {
      showToast('Solicitud enviada correctamente', 'success');
      setIsModalOpen(false);
    }
  };

  return (
    <>
      <Fab
        onPress={() => setIsModalOpen(true)}
        backgroundColor={babyBlue}
        borderWidth={2}
        borderColor={oceanBlue}
        width={82}
        height={82}
        size="lg"
        flexDirection="column">
        <Image
          source={require('../../../../assets/images/help.png')}
          style={styles.img}
        />
        <FabLabel fontSize={14} color={black}>
          Ayuda
        </FabLabel>

        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          paddingHorizontal={20}>
          <View style={styles.container}>
            <Text size={28} color={black} style={styles.txt}>
              Te contactaremos para ayudarte con tu solicitud
            </Text>
            <ButtonText
              onPress={handleAccept}
              backgroundColor={royalBlue}
              loading={isLoading}
              w="100%">
              Aceptar
            </ButtonText>
          </View>
        </Modal>
      </Fab>
    </>
  );
};

export default HelpFAB;
