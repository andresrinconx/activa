import React, { useState } from 'react';
import styles from './FontSelector.styles';
import Slider from '../../atoms/Slider';
import { View } from 'react-native';
import Text from '../../atoms/Text';
import { tranquilIndigo } from '../../../theme';

const FontSelector = () => {
  const [value, setValue] = useState(30);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Fuente</Text>

      <View style={styles.referencesContainer}>
        <Text style={styles.txtMin}>Aa</Text>
        <Text style={styles.txtMax}>Aa</Text>
      </View>

      <Slider value={value} setValue={setValue} color={tranquilIndigo} />
    </View>
  );
};

export default FontSelector;
