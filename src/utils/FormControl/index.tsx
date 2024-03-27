import React from 'react';
import {
  FormControl,
  FormControlLabel,
  FormControlLabelText,
  FormControlHelper,
  FormControlHelperText,
  FormControlError,
  FormControlErrorIcon,
  FormControlErrorText,
  AlertCircleIcon,
} from '@gluestack-ui/themed';

const FormControlMaat = ({
  label = '',
  error = false,
  errorMessage = '',
  helperText = '',
  colorError = 'white',
  children,
}: any) => {
  return (
    <FormControl
      isDisabled={false}
      isInvalid={error}
      isReadOnly={false}
      isRequired={true}
      width="$full">
      {label ? (
        <FormControlLabel mb="$1">
          <FormControlLabelText>{label}</FormControlLabelText>
        </FormControlLabel>
      ) : null}
      {children}
      {helperText ? (
        <FormControlHelper>
          <FormControlHelperText>{helperText}</FormControlHelperText>
        </FormControlHelper>
      ) : null}
      {error ? (
        <FormControlError>
          <FormControlErrorIcon as={AlertCircleIcon} color={colorError} />
          <FormControlErrorText color={colorError}>
            {errorMessage}
          </FormControlErrorText>
        </FormControlError>
      ) : null}
    </FormControl>
  );
};

export default FormControlMaat;
