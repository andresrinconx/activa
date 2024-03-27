import React from 'react';
import { Spinner as GSSpinner } from '@gluestack-ui/themed';
import { darkSlateBlue } from '../../../theme';
import { ColorValue, DimensionValue } from 'react-native';

interface Props {
  margin?: DimensionValue;
  color?: ColorValue;
}

const Spinner = ({ margin, color }: Props) => {
  return <GSSpinner color={color || darkSlateBlue} size={35} margin={margin} />;
};

export default Spinner;
