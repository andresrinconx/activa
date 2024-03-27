import React, { useState } from 'react';
import styles from './RegisterForm.styles';
import { View } from 'react-native';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Title from '../../atoms/Title';
import ButtonText from '../../atoms/buttons/ButtonText';
import Text from '../../atoms/Text';
import useNavigation from '../../../hooks/useNavigation';
import { useUserStore } from '../../../store/index';
import useUser from '../../../hooks/useUser';
import RegisterFormFields from '../../molecules/RegisterFormFields';

const registerFormSchema = Yup.object().shape({
  username: Yup.string().required('El campo es requerido'),
  name: Yup.string().required('El campo es requerido'),
  surname: Yup.string().required('El campo es requerido'),
  cellphone: Yup.string().required('El campo es requerido'),
  password: Yup.string().required('La contraseña es requerida'),
  type: Yup.string().required('El campo es requerido'),
});

const RegisterForm = () => {
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();
  const { handleSignUp } = useUser(navigation);
  const { setToken, setUser } = useUserStore();

  const onSubmit = async (values: any) => {
    setLoading(true);
    const response = await handleSignUp(values);
    if (response) {
      setUser(response);
      setToken(response.token);
      navigation.reset({
        index: 0,
        routes: [{ name: 'Home' }],
      });
    }
    setLoading(false);
  };

  const formik = useFormik({
    initialValues: {
      username: '',
      name: '',
      surname: '',
      cellphone: '',
      password: '',
      type: '',
    },
    validationSchema: registerFormSchema,
    onSubmit: async values => onSubmit(values),
  });

  return (
    <View style={styles().container}>
      <Title style={styles().title}>Regístrate</Title>
      <View style={styles().scrollContainer}>
        <RegisterFormFields formik={formik} />
      </View>
      <View style={styles().termsContainer}>
        <Text style={styles().text}>
          Creando esta cuenta, acepto los{' '}
          <Text style={{ ...styles().text, ...styles().link }}>
            Términos y condiciones
          </Text>{' '}
          y la{' '}
          <Text style={{ ...styles().text, ...styles().link }}>
            Política de privacidad
          </Text>
        </Text>
      </View>
      <ButtonText
        onPress={() => formik.handleSubmit()}
        disabled={!formik.isValid}
        loading={loading}
        style={styles(!formik.isValid).btnRegister}>
        Crear cuenta
      </ButtonText>
    </View>
  );
};

export default RegisterForm;
