import React, { useState } from 'react';
import * as Yup from 'yup';
import styles from './AddMemberForm.styles';
import useNavigation from '../../../hooks/useNavigation';
import useHttp from '../../../hooks/useHttp';
import useNotification from '../../../hooks/useNotification';
import { useFormik } from 'formik';
import { View } from 'react-native';
import ButtonText from '../../atoms/buttons/ButtonText';
import { Box } from '@gluestack-ui/themed';
import FormControlMaat from '../../../utils/FormControl';
import Text from '../../atoms/Text';
import ProgressBar from '../../atoms/ProgressBar';
import { progressData } from '../../../helpers/auth/progressData';
import { redCoral, steelBlue } from '../../../theme';
import Title from '../../atoms/Title';
import BaseInput from '../../atoms/inputs/BaseInput';

const addMemberFormSchema = Yup.object().shape({
  username: Yup.string().required('El usuario es requerido'),
  name: Yup.string().required('El nombre es requerido'),
  surname: Yup.string().required('El apellido paterno es requerido'),
  cellphone: Yup.string().required('El teléfono es requerido'),
  password: Yup.string().required('La contraseña es requerida'),
});

const AddMemberForm: React.FC = () => {
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();
  const { showToast } = useNotification();
  const { post } = useHttp(navigation);

  const onSubmit = async (values: any) => {
    setLoading(true);
    // const res = await post('', {}, values, {});
    // if (res) {
    //   navigation.goBack();
    //   showToast('Miembro agregado correctamente', 'success');
    // }
    setLoading(false);
  };

  const formik = useFormik({
    initialValues: {
      username: '',
      name: '',
      surname: '',
      cellphone: '',
      password: '',
    },
    validationSchema: addMemberFormSchema,
    onSubmit: async values => onSubmit(values),
  });

  return (
    <View style={styles().container}>
      <Title size="sm" style={styles().title}>
        Añadir miembro
      </Title>
      <View style={styles().scrollContainer}>
        <Box
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          width="$full"
          gap="$4">
          <FormControlMaat
            error={formik.errors.username}
            colorError={redCoral}
            errorMessage={formik.errors.username}>
            <BaseInput
              textAlign="center"
              id="username"
              placeholder="Usuario"
              style={styles().input}
              onChange={(event: any) =>
                formik.setFieldValue('username', event.nativeEvent.text)
              }
              value={formik.values.username}
            />
          </FormControlMaat>
          <FormControlMaat
            error={formik.errors.name}
            colorError={redCoral}
            errorMessage={formik.errors.name}>
            <BaseInput
              textAlign="center"
              id="name"
              placeholder="Nombre"
              style={styles().input}
              onChange={(event: any) =>
                formik.setFieldValue('name', event.nativeEvent.text)
              }
              value={formik.values.name}
            />
          </FormControlMaat>
          <FormControlMaat
            error={formik.errors.surname}
            colorError={redCoral}
            errorMessage={formik.errors.surname}>
            <BaseInput
              textAlign="center"
              id="surname"
              placeholder="Apellido paterno"
              style={styles().input}
              onChange={(event: any) =>
                formik.setFieldValue('surname', event.nativeEvent.text)
              }
              value={formik.values.surname}
            />
          </FormControlMaat>
          <FormControlMaat
            error={formik.errors.cellphone}
            colorError={redCoral}
            errorMessage={formik.errors.cellphone}>
            <BaseInput
              keyboardType="numeric"
              textAlign="center"
              id="cellphone"
              placeholder="Teléfono"
              style={styles().input}
              onChange={(event: any) =>
                formik.setFieldValue('cellphone', event.nativeEvent.text)
              }
              value={formik.values.cellphone}
            />
          </FormControlMaat>
          <FormControlMaat
            error={formik.errors.password}
            colorError={redCoral}
            errorMessage={formik.errors.password}>
            <BaseInput
              textAlign="center"
              id="password"
              secureTextEntry={true}
              style={styles().input}
              placeholder="Contraseña"
              onChange={(event: any) =>
                formik.setFieldValue('password', event.nativeEvent.text)
              }
              value={formik.values.password}
            />
          </FormControlMaat>
          {formik.values.password ? (
            <View style={styles().passwordLevel}>
              <Text size={17} style={styles().txtPasswordLabel}>
                Nivel: {progressData(formik.values.password).label}
              </Text>
              <ProgressBar
                width="100%"
                height={7}
                bgColor={steelBlue}
                value={progressData(formik.values.password).value}
                fillColor={progressData(formik.values.password).color}
                isRadius={true}
              />
            </View>
          ) : null}
        </Box>
      </View>
      <ButtonText
        onPress={() => formik.handleSubmit()}
        disabled={!formik.isValid}
        loading={loading}
        style={styles(!formik.isValid).btnRegister}>
        Añadir
      </ButtonText>
    </View>
  );
};

export default AddMemberForm;
