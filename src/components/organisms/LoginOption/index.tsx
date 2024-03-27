import React, { useState } from 'react';
import styles from './LoginOption.styles';
import Button from '../../atoms/buttons/Button';
import Text from '../../atoms/Text';
import Modal from '../../atoms/Modal';
import { View } from 'react-native';
import Title from '../../atoms/Title';
import { darkSlateBlue, royalBlue } from '../../../theme';

interface Props {
  buttonName: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  onAcept: (onError: () => void) => void;
}

const LoginOption = ({
  buttonName,
  icon,
  title,
  description,
  onAcept,
}: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Button onPress={() => setIsModalOpen(true)}>
        <Text>{buttonName}</Text>
      </Button>

      <Modal
        isTemplate={true}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}>
        <View style={styles.container}>
          <View style={styles.infoContainer}>
            {icon}

            <Title size="xs" color={darkSlateBlue} style={styles.title}>
              {title}
            </Title>
            <Text color={darkSlateBlue} style={styles.txtDescription}>
              {description}
            </Text>

            <Button
              onPress={() => onAcept(() => setIsModalOpen(false))}
              backgroundColor={royalBlue}
              w="100%">
              <Text isBold={true}>Aceptar</Text>
            </Button>
          </View>

          <Button onPress={() => setIsModalOpen(false)}>
            <Text isBold={true}>No, gracias</Text>
          </Button>
        </View>
      </Modal>
    </>
  );
};

export default LoginOption;
