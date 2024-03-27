import React, { useState } from 'react';
import styles from './ThemeSelector.styles';
import { View } from 'react-native';
import Text from '../../atoms/Text';
import Button from '../../atoms/buttons/Button';
import Icon from '../../atoms/Icon';
import { livelyEmerald } from '../../../theme';

const ThemeSelector = () => {
  const [selectedItem, setSelectedItem] = useState('Automático');

  const themes = ['Claro', 'Oscuro', 'Automático'];

  return (
    <View style={styles().container}>
      <Text style={styles().title}>Temas</Text>

      <View style={styles().optionsContainer}>
        {themes.map(item => {
          const isSelected = item === selectedItem;

          return (
            <Button
              key={item}
              h={45}
              style={styles().btnOption}
              onPress={() => setSelectedItem(item)}>
              <Text style={styles(isSelected).txtOption}>{item}</Text>

              {isSelected && (
                <Icon
                  width="21"
                  height="15"
                  viewBox="0 0 21 15"
                  d="M6.9007 14.6488L0.103516 8.42222L2.17982 6.53255L6.9007 10.8506L18.5561 0.199219L20.6221 2.08889L6.9007 14.6488Z"
                  fill={livelyEmerald}
                />
              )}
            </Button>
          );
        })}
      </View>
    </View>
  );
};

export default ThemeSelector;
