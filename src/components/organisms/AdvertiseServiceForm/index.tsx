import React from 'react';
import styles from './AdvertiseServiceForm.styles';
import { TextInput, Vibration, View } from 'react-native';
import Title from '../../atoms/Title';
import Text from '../../atoms/Text';
import Button from '../../atoms/buttons/Button';
import Textarea from '../../atoms/Textarea';
import { darkSlateBlue, lushGreen, redCoral } from '../../../theme';
import useForm from '../../../hooks/useForm';
import useNavigation from '../../../hooks/useNavigation';
import Icon from '../../atoms/Icon';
import ToggleButton from '../../atoms/buttons/ToggleButton';
import ErrorText from '../../atoms/ErrorText';
import useFile from '../../../hooks/useFile';
import useNotification from '../../../hooks/useNotification';
import { servicesList } from '../../../constants/tests';
import { defaultVibrationTime } from '../../../constants/durations';

const AdvertiseServiceForm = () => {
  const navigation = useNavigation();
  const { setShowHeaderAlert } = useNotification();
  const { file, openGallery } = useFile();

  const { handleSubmit, setForm, title, description, price, error } = useForm({
    initialValues: {
      title: '',
      description: '',
      price: 'S/--',
      error: '',
    },
    onSubmit: async ({ price }) => {
      try {
        // const cleanPrice = price.substring(2);
        // throw new Error('Hubo un error');

        setShowHeaderAlert(true);
        Vibration.vibrate(defaultVibrationTime);
        navigation.replace('CategoryServices', { service: servicesList[0] });
      } catch (error) {
        setForm({ error: (error as Error).message });
      }
    },
  });

  const maxLength = 50;
  const disabled =
    !title ||
    !description ||
    isNaN(Number(price.substring(2))) ||
    Number(price.substring(2)) === 0 ||
    !file;

  return (
    <View style={styles.container}>
      <View>
        <Title size="xs" style={styles.title}>
          Anunciar servicio
        </Title>

        <Textarea
          style={styles.textareaTitle}
          placeholder="Título"
          value={title}
          onChangeText={text => setForm({ title: text })}
          maxLength={maxLength}
        />

        <Textarea
          style={styles.textareaDescription}
          placeholder="Descripción"
          value={description}
          onChangeText={text => setForm({ description: text })}
        />

        <View style={styles.priceContainer}>
          <Text style={styles.txtPrice}>Precio servicio:</Text>
          <TextInput
            keyboardType="numeric"
            value={price}
            onChangeText={text =>
              setForm({ price: `S/${text.replace(/[^\d]/g, '')}` })
            }
            style={styles.inputPrice}
          />
        </View>

        <Button onPress={openGallery} style={styles.btnUpload}>
          <Icon
            width="30"
            height="22"
            viewBox="0 0 30 22"
            d="M14.0007 21.6667H7.36732C5.41176 21.6667 3.75065 20.9834 2.38398 19.6167C1.01732 18.25 0.333984 16.5889 0.333984 14.6334C0.333984 12.9 0.88954 11.3778 2.00065 10.0667C3.11176 8.75559 4.52287 7.9667 6.23398 7.70003C6.67843 5.54448 7.72287 3.78337 9.36732 2.4167C11.0118 1.05003 12.9118 0.366699 15.0673 0.366699C17.5562 0.366699 19.6562 1.27225 21.3673 3.08337C23.0784 4.89448 23.934 7.0667 23.934 9.60003V10.4C25.534 10.3556 26.8895 10.8723 28.0007 11.95C29.1118 13.0278 29.6673 14.3889 29.6673 16.0334C29.6673 17.5667 29.1118 18.8889 28.0007 20C26.8895 21.1111 25.5673 21.6667 24.034 21.6667H16.0007V11.0667L18.7673 13.8334L20.2007 12.4L15.0007 7.20003L9.80065 12.4L11.234 13.8334L14.0007 11.0667V21.6667Z"
            fill={darkSlateBlue}
          />
          <Text isBold={true} color={darkSlateBlue} style={styles.txtBtn}>
            {file ? file?.name : 'Subir foto'}
          </Text>
        </Button>

        <ErrorText isVisible={error !== ''} color={redCoral} marginBottom={20}>
          {error}
        </ErrorText>
      </View>

      <ToggleButton
        onPress={handleSubmit}
        text="Publicar"
        enabledColor={lushGreen}
        disabled={disabled}
      />
    </View>
  );
};

export default AdvertiseServiceForm;
