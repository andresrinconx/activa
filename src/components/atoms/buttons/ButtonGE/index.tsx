import React from 'react';
import {
  Button as ButtonGE,
  ButtonText,
  ButtonIcon,
  ButtonSpinner,
} from '@gluestack-ui/themed';

const Button = ({
  children,
  icon = '',
  loading = false,
  disabled,
  onPress,
  color = 'white',
  variant = 'outline',
  bg = '',
}: any) => {
  return (
    <ButtonGE
      isDisabled={disabled || loading}
      borderRadius="$3xl"
      backgroundColor={bg}
      variant={variant}
      width="$full"
      height="$16"
      onPress={() => onPress()}>
      {loading && <ButtonSpinner size="large" />}
      {icon && <ButtonIcon as={icon} />}
      {!loading && (
        <ButtonText fontWeight="$bold" fontSize="$lg" color={color}>
          {children}
        </ButtonText>
      )}
    </ButtonGE>
  );
};

export default Button;
