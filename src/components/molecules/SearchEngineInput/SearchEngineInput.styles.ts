import { StyleSheet } from 'react-native';
import { midnightNavy, softLavender, white } from '../../../theme';

export default StyleSheet.create({
  container: {
    justifyContent: 'center',
  },
  icon: {
    position: 'absolute',
    right: 30,
  },
  input: {
    backgroundColor: midnightNavy,
    borderColor: softLavender,
    borderWidth: 2,
    color: white,
    paddingHorizontal: 30,
  },
});
