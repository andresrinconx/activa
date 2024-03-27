import { StyleSheet } from 'react-native';
import { ashGray } from '../../../theme';

export default StyleSheet.create({
  container: {
    padding: 20,
  },
  icon: {
    position: 'absolute',
    right: 20,
  },
  img: {
    height: 70,
    width: 90,
  },
  imgContainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    borderColor: ashGray,
    borderRadius: 15,
    borderWidth: 1.5,
    height: 50,
    paddingLeft: 20,
  },
  inputContainer: {
    justifyContent: 'center',
    marginBottom: 20,
  },
});
