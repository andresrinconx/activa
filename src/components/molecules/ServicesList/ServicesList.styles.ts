import { StyleSheet } from 'react-native';
import { black, white } from '../../../theme';

export default StyleSheet.create({
  btnItem: {
    backgroundColor: white,
    flexDirection: 'row',
    height: 85,
    justifyContent: 'space-between',
    marginBottom: 18,
    paddingHorizontal: 35,
  },
  container: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  listContainer: {
    paddingBottom: 75,
  },
  txtItem: {
    color: black,
    fontSize: 24,
  },
});
