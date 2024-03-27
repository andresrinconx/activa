import { StyleSheet } from 'react-native';
import { white } from '../../../theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  infoContainer: {
    alignItems: 'center',
    backgroundColor: white,
    borderRadius: 25,
    paddingHorizontal: 30,
    paddingVertical: 60,
    width: '100%',
  },
  title: {
    marginBottom: 20,
    marginTop: 30,
  },
  txtDescription: {
    marginBottom: 30,
    textAlign: 'center',
  },
});
