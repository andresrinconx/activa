import React from 'react';
import styles from './RegisterOptions.styles';
import { View } from 'react-native';
import { userTypes } from '../../../constants/auth';
import Button from '../../atoms/buttons/Button';
import Text from '../../atoms/Text';
import { IAuthUserType } from '../../../types/auth';

interface Props {
  value: string;
  onChange: (id: IAuthUserType) => void;
}

const UserTypeSelector = ({ value, onChange }: Props) => {
  return (
    <View style={styles().selector}>
      {userTypes.map((item, index) => {
        const { id, name } = item;
        const isOptionSelected = value === id;
        const isFirst = index === 0;
        const isLast = index === userTypes.length - 1;

        return (
          <Button
            key={id}
            onPress={() => onChange(id)}
            style={{
              ...styles(isOptionSelected, isFirst, isLast).btnSelector,
            }}>
            <Text style={styles(isOptionSelected).txtSelector}>Soy {name}</Text>
          </Button>
        );
      })}
    </View>
  );
};

export default UserTypeSelector;
