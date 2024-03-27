import React, { useEffect, useState } from 'react';
import styles from './SearchEngineInput.styles';
import { View, ViewStyle } from 'react-native';
import Icon from '../../atoms/Icon';
import { softLavender } from '../../../theme';
import useNotification from '../../../hooks/useNotification';
import useDebounce from '../../../hooks/useDebounce';
import BaseInput from '../../atoms/inputs/BaseInput';

interface Props {
  searchTerm?: string;
  setResults?: (results: any) => void;
  editable?: boolean;
  style?: ViewStyle;
}

const SearchEngineInput = ({
  searchTerm,
  setResults = () => null,
  editable = true,
  style,
}: Props) => {
  const [term, setTerm] = useState(searchTerm || '');
  const { showToast } = useNotification();

  useEffect(() => {
    if (term) {
      handleSearch(term);
    }
  }, []);

  const handleSearch = useDebounce(async text => {
    if (text) {
      try {
        // const res = await getSearchData(text);
        setResults([text]);
      } catch (error) {
        showToast('Hubo un error al buscar');
      }
    } else {
      setResults([]);
    }
  }, 400);

  return (
    <View style={styles.container}>
      <BaseInput
        style={{ ...styles.input, ...style }}
        placeholder="Buscar"
        value={term}
        autoFocus={editable}
        onChangeText={text => {
          setTerm(text);
          handleSearch(text);
        }}
        editable={editable}
      />
      <Icon
        scale="18"
        viewBox="0 0 18 18"
        d="M16.6 18L10.3 11.7C9.8 12.1 9.225 12.4167 8.575 12.65C7.925 12.8833 7.23333 13 6.5 13C4.68333 13 3.14583 12.3708 1.8875 11.1125C0.629167 9.85417 0 8.31667 0 6.5C0 4.68333 0.629167 3.14583 1.8875 1.8875C3.14583 0.629167 4.68333 0 6.5 0C8.31667 0 9.85417 0.629167 11.1125 1.8875C12.3708 3.14583 13 4.68333 13 6.5C13 7.23333 12.8833 7.925 12.65 8.575C12.4167 9.225 12.1 9.8 11.7 10.3L18 16.6L16.6 18ZM6.5 11C7.75 11 8.8125 10.5625 9.6875 9.6875C10.5625 8.8125 11 7.75 11 6.5C11 5.25 10.5625 4.1875 9.6875 3.3125C8.8125 2.4375 7.75 2 6.5 2C5.25 2 4.1875 2.4375 3.3125 3.3125C2.4375 4.1875 2 5.25 2 6.5C2 7.75 2.4375 8.8125 3.3125 9.6875C4.1875 10.5625 5.25 11 6.5 11Z"
        fill={softLavender}
        styles={styles.icon}
      />
    </View>
  );
};

export default SearchEngineInput;
