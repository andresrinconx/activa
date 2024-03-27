import { StyleSheet } from 'react-native';
import { black, silverGray, white } from '../../../theme';

export default StyleSheet.create({
  container: {
    backgroundColor: white,
    borderColor: silverGray,
    borderRadius: 20,
    borderWidth: 1,
    height: 200,
    paddingBottom: 20,
    paddingHorizontal: 14,
    paddingTop: 14,
  },
  input: {
    color: black,
    fontSize: 21,
  },
  wordsCounter: {
    bottom: 12,
    color: silverGray,
    fontSize: 15,
    position: 'absolute',
    right: 12,
  },
});
