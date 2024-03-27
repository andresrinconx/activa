import React from 'react';
import { Input, InputField } from '@gluestack-ui/themed';
import { deepBlue, white } from '../../../../theme';

const TextInput = ({ ...props }: any) => {
  return (
    <Input
      variant="rounded"
      isDisabled={false}
      isInvalid={false}
      isReadOnly={false}
      borderRadius={25}
      height={75}>
      <InputField
        {...props}
        fontSize={19}
        backgroundColor={white}
        color={deepBlue}
        textAlign="center"
      />
    </Input>
  );
};

export default TextInput;
