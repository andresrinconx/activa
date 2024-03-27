import React, { useState } from 'react';
import styles from './ServiceDetails.styles';
import ScrollableBackground from '../../templates/ScrollableBackground';
import Text from '../../atoms/Text';
import { Vibration, View } from 'react-native';
import ButtonText from '../../atoms/buttons/ButtonText';
import { black, royalBlue } from '../../../theme';
import useRoute from '../../../hooks/useRoute';
import { ITaxi } from '../../../types/services';
import HelpFAB from '../../atoms/fabs/HelpFAB';
import { defaultVibrationTime } from '../../../constants/durations';
import HeaderAlert from '../../atoms/HeaderAlert';
import useHttp from '../../../hooks/useHttp';
import useNavigation from '../../../hooks/useNavigation';

const ServiceDetails: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const navigation = useNavigation();
  const { post } = useHttp(navigation);
  const params = useRoute('ServiceDetails');
  const { title, origin, destination, price, id } = params?.item as ITaxi;

  const handleAskForTaxi = async () => {
    setIsLoading(true);
    const res = await post('/service/taxi/', {
      id,
    });
    if (res.status === 200) {
      Vibration.vibrate(defaultVibrationTime);
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
      }, 3000);
    }
    setIsLoading(false);
  };

  return (
    <>
      {showAlert && <HeaderAlert text="Se le llamará en breve" />}
      <ScrollableBackground>
        <View>
          <Text size={26} style={styles.title}>
            Pedirás un TAXI a:
          </Text>

          <View style={styles.dataContainer}>
            <Text color={black} size={36} isBold={true}>
              {title}
            </Text>
            <Text color={black} size={24} isBold={true} style={styles.subtitle}>
              Origen:
            </Text>
            <Text color={black} size={20}>
              {origin}
            </Text>
            <Text color={black} size={24} isBold={true} style={styles.subtitle}>
              Destino:
            </Text>
            <Text color={black} size={20}>
              {destination}
            </Text>
            <Text color={black} size={24} isBold={true} style={styles.subtitle}>
              Importe a pagar:
            </Text>
            <Text color={black} size={24} isBold={true}>
              S/{price}
            </Text>
          </View>

          <ButtonText
            backgroundColor={royalBlue}
            loading={isLoading}
            onPress={handleAskForTaxi}>
            Pedir Ahora
          </ButtonText>
          <Text style={styles.txtTime} size={15}>
            Normalmente el taxi llegará entre 5 y 10 min
          </Text>
        </View>

        <HelpFAB screen={`${params?.category} - ${title}`} />
      </ScrollableBackground>
    </>
  );
};

export default ServiceDetails;
