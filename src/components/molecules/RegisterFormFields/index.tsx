import React from 'react';
import TextInput from '../../atoms/inputs/TextInput';
import { Box } from '@gluestack-ui/themed';
import FormControlMaat from '../../../utils/FormControl';
import UserTypeSelector from '../RegisterOptions';
import { progressData } from '../../../helpers/auth/progressData';
import { steelBlue } from '../../../theme';
import { View } from 'react-native';
import Text from '../../atoms/Text';
import ProgressBar from '../../atoms/ProgressBar';
import styles from './RegisterFormFields.styles';

const RegisterFormFields: React.FC<any> = ({ formik }) => {
  if (!formik) return null;

  return (
    <Box
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      width="$full"
      gap="$4">
      <FormControlMaat
        error={formik.errors.type}
        errorMessage={formik.errors.type}>
        <UserTypeSelector
          value={formik.values.type}
          onChange={event => formik.setFieldValue('type', event)}
        />
      </FormControlMaat>
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
        error={formik.errors.name}
        errorMessage={formik.errors.name}>
        <TextInput
          id="name"
          name="name"
          placeholder="Nombre"
          onChange={(event: any) =>
            formik.setFieldValue('name', event.nativeEvent.text)
          }
          value={formik.values.name}
        />
      </FormControlMaat>
      <FormControlMaat
        error={formik.errors.surname}
        errorMessage={formik.errors.surname}>
        <TextInput
          id="surname"
          name="surname"
          placeholder="Apellido paterno"
          onChange={(event: any) =>
            formik.setFieldValue('surname', event.nativeEvent.text)
          }
          value={formik.values.surname}
        />
      </FormControlMaat>
      <FormControlMaat
        error={formik.errors.cellphone}
        errorMessage={formik.errors.cellphone}>
        <TextInput
          id="cellphone"
          keyboardType="numeric"
          name="cellphone"
          placeholder="Teléfono"
          onChange={(event: any) =>
            formik.setFieldValue('cellphone', event.nativeEvent.text)
          }
          value={formik.values.cellphone}
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
      {formik.values.password ? (
        <View style={styles.passwordLevel}>
          <Text size={17} style={styles.txtPasswordLabel}>
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
  );
};

export default RegisterFormFields;
