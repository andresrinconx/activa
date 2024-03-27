import React, { useEffect, useState } from 'react';
import styles from './SendSOSInfo.styles';
import { View } from 'react-native';
import Title from '../../atoms/Title';
import Button from '../../atoms/buttons/Button';
import Text from '../../atoms/Text';
import Image from '../../atoms/Image';
import ProgressBar from '../../atoms/ProgressBar';
import { gentleBlue, lavenderGray } from '../../../theme';

interface Props {
  onClose: () => void;
}

const SendSOSInfo = ({ onClose }: Props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(10);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prevProgress => {
        if (prevProgress === 90) {
          setIsLoading(false);
          clearInterval(interval);
          return prevProgress + 10;
        }
        return prevProgress + 10;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {isLoading ? (
        <View style={styles().topContainer}>
          <Title size="xs" style={styles(isLoading).title}>
            {isLoading ? 'Enviando alerta...' : '¡Alerta enviada!'}
          </Title>

          <View>
            <Image
              style={styles(isLoading).img}
              source={{
                uri: 'https://www.perfocal.com/blog/content/images/2021/01/Perfocal_17-11-2019_TYWFAQ_100_standard-3.jpg',
              }}
            />
          </View>

          <View style={styles(isLoading).nameContainer}>
            <Title size="xs" style={styles().txtName}>
              Daniela Salinas
            </Title>
            <Text style={styles().txtRelation}>Hija</Text>
          </View>

          <View style={styles(isLoading).progressContainer}>
            <ProgressBar
              width="100%"
              height={65}
              value={progress}
              bgColor={gentleBlue}
              fillColor={lavenderGray}
              txt="Enviando en 10 seg."
            />
            <View style={styles().barContainer} />
          </View>
        </View>
      ) : (
        <View style={styles(isLoading).gradient}>
          <View style={styles(isLoading).thirdColor}>
            <View style={styles(isLoading).secondColor}>
              <View style={styles(isLoading).firstColor}>
                <Image
                  style={styles(isLoading).img}
                  source={{
                    uri: 'https://www.perfocal.com/blog/content/images/2021/01/Perfocal_17-11-2019_TYWFAQ_100_standard-3.jpg',
                  }}
                />
              </View>
            </View>
          </View>

          <Title size="xs" style={styles().title}>
            {isLoading ? 'Enviando alerta...' : '¡Alerta enviada!'}
          </Title>

          <View style={styles().nameContainer}>
            <Title size="xs" style={styles().txtName}>
              Daniela Salinas
            </Title>
            <Text style={styles().txtRelation}>Hija</Text>
          </View>
        </View>
      )}

      <View style={styles().bottomContainer}>
        <Button style={styles().btn} onPress={onClose}>
          <Text style={styles().txtBtn}>
            {isLoading ? 'Cancelar alerta' : 'Detener alerta'}
          </Text>
        </Button>
      </View>
    </>
  );
};

export default SendSOSInfo;
