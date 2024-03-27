import React, { useEffect, useState } from 'react';
import styles from './EnvironmentInfo.styles';
import { View } from 'react-native';
import Image from '../../atoms/Image';
import Text from '../../atoms/Text';
import Button from '../../atoms/buttons/Button';
import { black, royalBlue } from '../../../theme';

interface Props {
  onAccept: (name: string) => void;
}

const EnvironmentInfo = ({ onAccept }: Props) => {
  const [PAMName, setPAMName] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getPAM = async () => {
      setTimeout(() => {
        setPAMName('Carmen');
        setIsLoading(false);
      }, 2000);
    };
    getPAM();
  }, []);

  return (
    <View style={styles.container}>
      {isLoading ? (
        <Image
          source={require('../../../assets/images/loader.png')}
          isContain={true}
          style={styles.img}
        />
      ) : (
        <>
          <Text size={22} color={black} style={styles.txt}>
            <Text size={22} color={black} isBold={true}>
              {`"${PAMName}"`}
            </Text>{' '}
            quiere que seas parte de su entorno
          </Text>
          <Button
            onPress={() => onAccept(PAMName)}
            backgroundColor={royalBlue}
            w={'100%'}>
            <Text isBold={true}>Aceptar</Text>
          </Button>
        </>
      )}
    </View>
  );
};

export default EnvironmentInfo;
