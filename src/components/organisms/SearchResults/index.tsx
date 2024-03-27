import React from 'react';
import styles from './SearchResults.styles';
import { Keyboard, ScrollView, View } from 'react-native';
import Text from '../../atoms/Text';
import { testContacts } from '../../../constants/tests';
import Separator from '../../atoms/Separator';
import InteractiveContactCard from '../InteractiveContactCard';

interface Props {
  results: any[];
}

const SearchResults = ({ results }: Props) => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.container}
      onScroll={() => Keyboard.dismiss()}>
      {results?.length > 0 && (
        <>
          <View>
            <Text style={styles.txt}>Contactos</Text>
            <InteractiveContactCard item={testContacts[0]} />
            <Separator marginVertical={8} />
            <InteractiveContactCard item={testContacts[1]} />
          </View>
        </>
      )}
    </ScrollView>
  );
};

export default SearchResults;
