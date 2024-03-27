import React, { useState } from 'react';
import styles from './SearchEngine.styles';
import SearchEngineInput from '../../molecules/SearchEngineInput';
import Background from '../../templates/Background';
import SearchResults from '../../organisms/SearchResults';
import { View } from 'react-native';
import useRoute from '../../../hooks/useRoute';

const SearchEngine = () => {
  const [results, setResults] = useState([]);
  const params = useRoute('SearchEngine');

  return (
    <Background>
      <View style={styles.inputContainer}>
        <SearchEngineInput
          searchTerm={params?.searchTerm}
          setResults={setResults}
        />
      </View>
      <SearchResults results={results} />
    </Background>
  );
};

export default SearchEngine;
