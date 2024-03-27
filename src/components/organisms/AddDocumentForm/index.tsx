import React from 'react';
import styles from './AddDocumentForm.styles';
import { Pressable, Vibration, View } from 'react-native';
import Title from '../../atoms/Title';
import Text from '../../atoms/Text';
import Button from '../../atoms/buttons/Button';
import useDimensions from '../../../hooks/useDevice';
import Icon from '../../atoms/Icon';
import {
  black,
  deepNavy,
  electricBlue,
  redCoral,
  silverGray,
} from '../../../theme';
import useFile from '../../../hooks/useFile';
import useForm from '../../../hooks/useForm';
import ErrorText from '../../atoms/ErrorText';
import ToggleButton from '../../atoms/buttons/ToggleButton';
import useNavigation from '../../../hooks/useNavigation';
import useNotification from '../../../hooks/useNotification';
import { defaultVibrationTime } from '../../../constants/durations';
import BaseInput from '../../atoms/inputs/BaseInput';
import ButtonPicker from '../../atoms/buttons/ButtonPicker';

interface Props {
  addDocument: (data: any) => Promise<any>;
}

const AddDocumentForm = ({ addDocument }: Props) => {
  const navigation = useNavigation();
  const { md } = useDimensions();
  const { setShowHeaderAlert } = useNotification();
  const { file, openCamera, openSelectFile, cleanData } = useFile();

  const { setForm, handleSubmit, name, date, error, loading } = useForm({
    initialValues: {
      name: '',
      date: new Date(),
      error: '',
      loading: false,
    },
    onSubmit: async values => {
      setForm({ loading: true });
      const { name, date } = values;
      try {
        const res = await addDocument({
          name,
          document: file,
          date,
        });
        if (res) {
          navigation.goBack();
          Vibration.vibrate(defaultVibrationTime);
          setShowHeaderAlert(true);
          setForm({ loading: false });
        }
      } catch (error) {
        setForm({ error: (error as Error).message });
      }
    },
  });

  return (
    <View style={styles().container}>
      <Title size="sm" style={styles().title}>
        Añadir documento
      </Title>

      {file ? (
        <View style={styles().spaceContainer}>
          <View style={styles(md).dataContainer}>
            <View style={styles(md).itemContainer}>
              <View style={styles().rowContainer}>
                <Icon
                  scale="14"
                  viewBox="0 0 14 14"
                  d="M1.5 14C1.0875 14 0.734375 13.8507 0.440625 13.5521C0.146875 13.2535 0 12.9028 0 12.5V1.5C0 1.09722 0.146875 0.746528 0.440625 0.447917C0.734375 0.149306 1.0875 0 1.5 0H12.5C12.9125 0 13.2656 0.149306 13.5594 0.447917C13.8531 0.746528 14 1.09722 14 1.5V12.5C14 12.9028 13.8531 13.2535 13.5594 13.5521C13.2656 13.8507 12.9125 14 12.5 14H1.5ZM1.5 12.5H12.5V1.5H1.5V12.5ZM3.25 11H10.754C10.9041 11 11.0139 10.9306 11.0833 10.7917C11.1528 10.6528 11.1389 10.5208 11.0417 10.3958L8.79167 7.39583C8.71875 7.28472 8.62153 7.22917 8.5 7.22917C8.37847 7.22917 8.28125 7.28472 8.20833 7.39583L6.25 10L5.04167 8.39583C4.96875 8.28472 4.87153 8.22917 4.75 8.22917C4.62847 8.22917 4.53125 8.28472 4.45833 8.39583L2.96213 10.3964C2.86238 10.521 2.84896 10.6528 2.92188 10.7917C2.99479 10.9306 3.10417 11 3.25 11Z"
                  fill={deepNavy}
                />
                <Text style={styles().txtFile} numberOfLines={1}>
                  {name}
                </Text>
              </View>

              <Pressable onPress={cleanData} style={styles().rowContainer}>
                <Icon
                  width="10"
                  height="11"
                  viewBox="0 0 10 11"
                  d="M5.00013 6.56283L1.58346 9.97949C1.43068 10.1323 1.25707 10.2052 1.06263 10.1982C0.868183 10.1913 0.694572 10.1114 0.541794 9.95866C0.389016 9.80588 0.312627 9.6288 0.312627 9.42741C0.312627 9.22602 0.389016 9.04894 0.541794 8.89616L3.93763 5.50033L0.520961 2.08366C0.368183 1.93088 0.295266 1.7538 0.302211 1.55241C0.309155 1.35102 0.389016 1.17394 0.541794 1.02116C0.694572 0.868381 0.871655 0.791992 1.07304 0.791992C1.27443 0.791992 1.45152 0.868381 1.60429 1.02116L5.00013 4.43783L8.41679 1.02116C8.56957 0.868381 8.74665 0.791992 8.94804 0.791992C9.14943 0.791992 9.32652 0.868381 9.47929 1.02116C9.63207 1.17394 9.70846 1.35102 9.70846 1.55241C9.70846 1.7538 9.63207 1.93088 9.47929 2.08366L6.06263 5.50033L9.47929 8.91699C9.63207 9.06977 9.70846 9.24338 9.70846 9.43783C9.70846 9.63227 9.63207 9.80588 9.47929 9.95866C9.32652 10.1114 9.14943 10.1878 8.94804 10.1878C8.74665 10.1878 8.56957 10.1114 8.41679 9.95866L5.00013 6.56283Z"
                  fill={electricBlue}
                />
                <Text style={styles().txtDelete}>Eliminar</Text>
              </Pressable>
            </View>

            <View style={styles().nameContainer}>
              <BaseInput
                style={styles(md).input}
                placeholder="Nombre del documento"
                placeholderTextColor={silverGray}
                selectionColor={black}
                onChangeText={text => setForm({ name: text })}
              />

              <ErrorText
                isVisible={error !== ''}
                color={redCoral}
                marginTop={20}>
                {error}
              </ErrorText>
            </View>

            <View style={styles().pickerContainer}>
              <Text style={styles(md).txtPicker}>Fecha:</Text>
              <ButtonPicker
                value={date}
                pickerMode="date"
                onConfirm={date => setForm({ date })}
              />
            </View>
          </View>

          <ToggleButton
            onPress={handleSubmit}
            loading={loading}
            text="Aceptar"
            disabled={name === ''}
          />
        </View>
      ) : (
        <View style={styles(md).dataContainer}>
          <View style={styles(md).option}>
            <Text style={styles().txt}>Para añadir tu documento, puedes:</Text>
            <Button onPress={openCamera} style={styles().btn}>
              <Icon
                width="40"
                height="36"
                viewBox="0 0 40 36"
                d="M20 28.65C22.4 28.65 24.4167 27.8333 26.05 26.2C27.6833 24.5667 28.5 22.55 28.5 20.15C28.5 17.7167 27.6833 15.6917 26.05 14.075C24.4167 12.4583 22.4 11.65 20 11.65C17.5667 11.65 15.5417 12.4583 13.925 14.075C12.3083 15.6917 11.5 17.7167 11.5 20.15C11.5 22.55 12.3083 24.5667 13.925 26.2C15.5417 27.8333 17.5667 28.65 20 28.65ZM20 25.65C18.4 25.65 17.0833 25.125 16.05 24.075C15.0167 23.025 14.5 21.7167 14.5 20.15C14.5 18.55 15.0167 17.2333 16.05 16.2C17.0833 15.1667 18.4 14.65 20 14.65C21.5667 14.65 22.875 15.1667 23.925 16.2C24.975 17.2333 25.5 18.55 25.5 20.15C25.5 21.7167 24.975 23.025 23.925 24.075C22.875 25.125 21.5667 25.65 20 25.65ZM3 36C2.2 36 1.5 35.7 0.9 35.1C0.3 34.5 0 33.8 0 33V7.35C0 6.58333 0.3 5.89167 0.9 5.275C1.5 4.65833 2.2 4.35 3 4.35H10.35L14 0H26L29.65 4.35H37C37.7667 4.35 38.4583 4.65833 39.075 5.275C39.6917 5.89167 40 6.58333 40 7.35V33C40 33.8 39.6917 34.5 39.075 35.1C38.4583 35.7 37.7667 36 37 36H3Z"
                fill={deepNavy}
              />
              <Text style={styles().txtBtn}>Tomar una foto</Text>
            </Button>
          </View>

          <View style={styles(md).option}>
            <Text style={styles().txt}>o también puedes</Text>
            <Button onPress={openSelectFile} style={styles().btn}>
              <Icon
                width="44"
                height="32"
                viewBox="0 0 44 32"
                d="M20.5 31.9998H10.55C7.61667 31.9998 5.125 30.9748 3.075 28.9248C1.025 26.8748 0 24.3831 0 21.4498C0 18.8498 0.833333 16.5665 2.5 14.5998C4.16667 12.6331 6.28333 11.4498 8.85 11.0498C9.51667 7.81647 11.0833 5.1748 13.55 3.1248C16.0167 1.0748 18.8667 0.0498047 22.1 0.0498047C25.8333 0.0498047 28.9833 1.40814 31.55 4.1248C34.1167 6.84147 35.4 10.0998 35.4 13.8998V15.0998C37.8 15.0331 39.8333 15.8081 41.5 17.4248C43.1667 19.0415 44 21.0831 44 23.5498C44 25.8498 43.1667 27.8331 41.5 29.4998C39.8333 31.1665 37.85 31.9998 35.55 31.9998H23.5V16.0998L27.65 20.2498L29.8 18.0998L22 10.2998L14.2 18.0998L16.35 20.2498L20.5 16.0998V31.9998Z"
                fill={deepNavy}
              />
              <Text style={styles().txtBtn}>Subir archivo</Text>
            </Button>
          </View>
        </View>
      )}
    </View>
  );
};

export default AddDocumentForm;
