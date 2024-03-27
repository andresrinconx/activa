import React, { useState } from 'react';
import { View } from 'react-native';
import styles from './LoginForm.styles';
import Image from '../../atoms/Image';
import Text from '../../atoms/Text';
import Title from '../../atoms/Title';
import TextInput from '../../atoms/inputs/TextInput';
import ButtonText from '../../atoms/buttons/ButtonText';
import LoginOption from '../LoginOption';
import useNavigation from '../../../hooks/useNavigation';
import useBiometrics from '../../../hooks/useBiometrics';
import Fingerprint from '../../atoms/svg/Fingerprint';
import FaceID from '../../atoms/svg/FaceID';
import useUser from '../../../hooks/useUser';
import { useUserStore } from '../../../store';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import FormControlMaat from '../../../utils/FormControl';
import { Box } from '@gluestack-ui/themed';

const loginFormSchema = Yup.object().shape({
  username: Yup.string().required('El campo es requerido'),
  password: Yup.string().required('La contraseña es requerida'),
});

const LoginForm = () => {
  const { hasFingerprint, hasFaceID, registerBiometrics, authenticate } =
    useBiometrics();
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const { handleSignIn } = useUser(navigation);
  const { setToken, setUser } = useUserStore();

  const onSubmit = async (values: any) => {
    setLoading(true);
    const response = await handleSignIn(values.username, values.password);
    if (response) {
      setUser(response.data);
      setToken(response.data.token);
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
      password: '',
    },
    validationSchema: loginFormSchema,
    onSubmit: async values => onSubmit(values),
  });

  return (
    <View style={styles().container}>
      <Image
        style={styles().img}
        source={require('../../../assets/images/logo.png')}
        isContain={true}
      />

      <View style={styles().formContainer}>
        <View style={styles().txts}>
          <Title>¡Hola!</Title>
          <Text>Ingrese con sus datos</Text>
        </View>
        <Box
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          width="$full"
          gap="$4">
          <FormControlMaat
            error={formik.errors.username}
            errorMessage={formik.errors.username}>
            <TextInput
              id="username"
              name="username"
              placeholder="Usuario"
              onChange={(event: any) =>
                formik.setFieldValue('username', event.nativeEvent.text)
              }
              value={formik.values.username}
            />
          </FormControlMaat>
          <FormControlMaat
            error={formik.errors.password}
            errorMessage={formik.errors.password}>
            <TextInput
              id="password"
              name="password"
              type="password"
              placeholder="Contraseña"
              onChange={(event: any) =>
                formik.setFieldValue('password', event.nativeEvent.text)
              }
              value={formik.values.password}
            />
          </FormControlMaat>
          <ButtonText
            onPress={() => formik.handleSubmit()}
            disabled={!formik.isValid}
            loading={loading}
            style={styles(!formik.isValid).btnLogin}>
            Iniciar sesión
          </ButtonText>
        </Box>

        {hasFingerprint || hasFaceID ? (
          <LoginOption
            buttonName={
              hasFingerprint ? 'Usar detector de huella' : 'Usar Face ID'
            }
            icon={hasFingerprint ? <Fingerprint /> : <FaceID />}
            title={hasFingerprint ? 'Detector de huella' : 'Face ID'}
            description={
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in lorem eu quam auctor viverra. Interdum et malesuada fames ac ante ipsum primis in faucibus.'
            }
            onAcept={onError => authenticate(onError)}
          />
        ) : null}
      </View>

      <Box
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        width="$full"
        gap="$4"
        mb="$10">
        <ButtonText
          style={styles().btnCreateAccount}
          onPress={() => navigation.navigate('Register')}>
          Crear una cuenta
        </ButtonText>
        <ButtonText style={styles().btnNeedHelp} onPress={() => ''}>
          ¿Necesitas ayuda?
        </ButtonText>
      </Box>
    </View>
  );
};

export default LoginForm;
