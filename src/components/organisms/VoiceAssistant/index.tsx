import React, { useState } from 'react';
import styles from './VoiceAssistant.styles';
import Button from '../../atoms/buttons/Button';
import Text from '../../atoms/Text';
import Sheet from '../../atoms/Sheet';
import Icon from '../../atoms/Icon';
import useVoice from '../../../hooks/useVoice';
import useNavigation from '../../../hooks/useNavigation';
import { View } from 'react-native';
import Title from '../../atoms/Title';
import VoiceAssistantButton from '../../molecules/VoiceAssistantButton';
import Waveform from '../../atoms/svg/Waveform';
import { keyPhrases, mainCategories } from '../../../constants/services';
import { IServiceMainCategory } from '../../../types/services';

const VoiceAssistant = () => {
  const [isActionSheetOpen, setIsActionSheetOpen] = useState(false);
  const {
    isListening,
    pitch,
    message,
    startListening,
    stopListening,
    cleanData,
  } = useVoice();
  const navigation = useNavigation();

  const sendMessage = () => {
    let serviceName = '';

    // key phrases
    if (
      keyPhrases.taxi.some(item =>
        message.toLowerCase().includes(item.toLowerCase()),
      )
    ) {
      serviceName = 'taxi';
    }
    if (
      keyPhrases.meals.some(item =>
        message.toLowerCase().includes(item.toLowerCase()),
      )
    ) {
      serviceName = 'meals';
    }
    if (
      keyPhrases.pay.some(item =>
        message.toLowerCase().includes(item.toLowerCase()),
      )
    ) {
      serviceName = 'pay';
    }

    // Go to screen
    setIsActionSheetOpen(false);
    if (serviceName) {
      navigation.navigate('CategoryServices', {
        service: mainCategories.find(
          item => item.name === serviceName,
        ) as IServiceMainCategory,
        categories: mainCategories,
      });
    } else {
      navigation.navigate('SearchEngine', { searchTerm: message });
    }
    cleanData();
  };

  return (
    <>
      <Button onPress={() => setIsActionSheetOpen(true)} style={styles.btn}>
        <Icon
          width="15"
          height="19"
          viewBox="0 0 15 19"
          d="M7.50006 12C6.66673 12 5.95839 11.7083 5.37506 11.125C4.79173 10.5417 4.50006 9.83333 4.50006 9V3C4.50006 2.16667 4.79173 1.45833 5.37506 0.875C5.95839 0.291667 6.66673 0 7.50006 0C8.33339 0 9.04173 0.291667 9.62506 0.875C10.2084 1.45833 10.5001 2.16667 10.5001 3V9C10.5001 9.83333 10.2084 10.5417 9.62506 11.125C9.04173 11.7083 8.33339 12 7.50006 12ZM7.50006 19C7.21673 19 6.97923 18.9042 6.78756 18.7125C6.59589 18.5208 6.50006 18.2833 6.50006 18V15.9C4.95006 15.7 3.63339 15.0583 2.55006 13.975C1.46673 12.8917 0.808392 11.5917 0.575059 10.075C0.525059 9.79167 0.600059 9.54167 0.800059 9.325C1.00006 9.10833 1.26673 9 1.60006 9C1.83339 9 2.04173 9.0875 2.22506 9.2625C2.40839 9.4375 2.52506 9.65 2.57506 9.9C2.79173 11.0667 3.35839 12.0417 4.27506 12.825C5.19173 13.6083 6.26673 14 7.50006 14C8.73339 14 9.80839 13.6083 10.7251 12.825C11.6417 12.0417 12.2084 11.0667 12.4251 9.9C12.4751 9.65 12.5959 9.4375 12.7876 9.2625C12.9792 9.0875 13.1917 9 13.4251 9C13.7417 9 14.0001 9.10833 14.2001 9.325C14.4001 9.54167 14.4751 9.79167 14.4251 10.075C14.1917 11.5917 13.5334 12.8917 12.4501 13.975C11.3667 15.0583 10.0501 15.7 8.50006 15.9V18C8.50006 18.2833 8.40423 18.5208 8.21256 18.7125C8.02089 18.9042 7.78339 19 7.50006 19Z"
        />
        <Text style={styles.txt}>Asistente de voz</Text>
      </Button>

      <Sheet
        isOpen={isActionSheetOpen}
        setIsOpen={setIsActionSheetOpen}
        onClose={cleanData}
        height="62%"
        backdrop={true}>
        <View style={styles.container}>
          <Title size="base" style={styles.title}>
            ¡Cuéntanos qué necesitas!
          </Title>

          {(!isListening && !message) || isListening ? (
            <Waveform pitch={pitch} />
          ) : (
            <Text style={styles.txtMessage} numberOfLines={4}>
              {message}
            </Text>
          )}

          <VoiceAssistantButton
            isListening={isListening}
            message={message}
            startListening={startListening}
            stopListening={stopListening}
            sendMessage={sendMessage}
          />
        </View>
      </Sheet>
    </>
  );
};

export default VoiceAssistant;
