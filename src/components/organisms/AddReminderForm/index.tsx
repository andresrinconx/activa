import React, { useState } from 'react';
import styles from './AddReminderForm.styles';
import { Vibration, View } from 'react-native';
import Title from '../../atoms/Title';
import Textarea from '../../atoms/Textarea';
import Text from '../../atoms/Text';
import ButtonPicker from '../../atoms/buttons/ButtonPicker';
import Button from '../../atoms/buttons/ButtonGE';
import useNavigation from '../../../hooks/useNavigation';
import useDimensions from '../../../hooks/useDevice';
import { redCoral, royalBlue } from '../../../theme';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import FormControlMaat from '../../../utils/FormControl';
import useNotification from '../../../hooks/useNotification';
import { defaultVibrationTime } from '../../../constants/durations';

interface Props {
  addReminder: (data: any) => Promise<any>;
}

const reminderSchema = Yup.object().shape({
  date: Yup.date().required('La fecha es obligatoria'),
  description: Yup.string().required('La description es obligatoria'),
  from: Yup.date().required('La hora de inicio es obligatoria'),
  to: Yup.date()
    .required('La hora de finalización es obligatoria')
    .when(
      'from',
      (from, schema) =>
        from &&
        schema.min(
          from,
          'La hora de finalización debe ser después de la hora de inicio',
        ),
    ),
});

const AddReminderForm = ({ addReminder }: Props) => {
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();
  const { setShowHeaderAlert } = useNotification();
  const date = new Date();
  const datePlusOneHour = new Date(date.getTime() + 60 * 60 * 1000);

  const onSubmit = async (values: any) => {
    setLoading(true);
    const response = await addReminder(values);
    if (response) {
      navigation.goBack();
      Vibration.vibrate(defaultVibrationTime);
      setShowHeaderAlert(true);
    }
    setLoading(false);
  };

  const formik = useFormik({
    initialValues: {
      date: date,
      description: '',
      from: date,
      to: datePlusOneHour,
    },
    validationSchema: reminderSchema,
    onSubmit: async values => onSubmit(values),
  });

  const { md } = useDimensions();
  const maxLength = 100;

  return (
    <View style={styles().container}>
      <Title size="xs" style={styles().title}>
        Añadir recordatorio
      </Title>
      <FormControlMaat
        error={formik.errors.to}
        errorMessage={formik.errors.to}
        colorError={redCoral}>
        <View style={styles().pickerContainer}>
          <Text style={styles(undefined, md).txt}>Fecha:</Text>
          <ButtonPicker
            onConfirm={event => formik.setFieldValue('date', event)}
            value={formik.values.date}
            pickerMode="date"
          />
        </View>
      </FormControlMaat>
      <FormControlMaat
        error={formik.errors.description}
        errorMessage={formik.errors.description}
        colorError={redCoral}>
        <Textarea
          style={styles().textarea}
          placeholder="Ingrese su recordatorio"
          value={formik.values.description}
          onChangeText={(event: string) =>
            formik.setFieldValue('description', event)
          }
          maxLength={maxLength}
        />
      </FormControlMaat>

      <View style={styles(undefined, md).pickers}>
        <FormControlMaat
          error={formik.errors.from}
          errorMessage={formik.errors.from}
          colorError={redCoral}>
          <View style={styles().pickerContainer}>
            <Text style={styles(undefined, md).txt}>Empieza a las:</Text>
            <ButtonPicker
              onConfirm={event => formik.setFieldValue('from', event)}
              value={formik.values.from}
            />
          </View>
        </FormControlMaat>
        <FormControlMaat
          error={formik.errors.to}
          errorMessage={formik.errors.to}
          colorError={redCoral}>
          <View style={styles().pickerContainer}>
            <Text style={styles(undefined, md).txt}>Termina a las:</Text>
            <ButtonPicker
              onConfirm={event => formik.setFieldValue('to', event)}
              value={formik.values.to}
            />
          </View>
        </FormControlMaat>
      </View>
      <Button
        onPress={formik.handleSubmit}
        disabled={!formik.isValid}
        loading={loading}
        color="$white"
        variant="solid"
        bg={royalBlue}>
        Aceptar
      </Button>
    </View>
  );
};

export default AddReminderForm;
