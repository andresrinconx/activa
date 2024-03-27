import React from 'react';
import styles from './HorizontalSelector';
import { FlatList } from 'react-native';
import Button from '../../atoms/buttons/Button';
import Text from '../../atoms/Text';

interface Props {
  items: string[];
  selectedItem: string;
  setSelectedItem: (selectedItem: string) => void;
}

const HorizontalSelector = ({
  items,
  selectedItem,
  setSelectedItem,
}: Props) => {
  return (
    <FlatList
      horizontal={true}
      overScrollMode="never"
      data={items}
      numColumns={1}
      contentContainerStyle={styles().list}
      showsHorizontalScrollIndicator={false}
      renderItem={({ item, index }) => {
        const isLast = index === items.length - 1;
        const isFirst = index === 0;
        const isSelected = item === selectedItem;

        return (
          <Button
            onPress={() => setSelectedItem(item)}
            style={styles(isSelected, isLast, isFirst).btn}>
            <Text style={styles(isSelected).txt}>{item}</Text>
          </Button>
        );
      }}
    />
  );
};

export default HorizontalSelector;
