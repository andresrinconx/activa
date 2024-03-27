import { StyleSheet } from 'react-native';
import { black, white } from '../../../theme';

const SCALE = 120;

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: white,
    flexDirection: 'row',
    height: SCALE,
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  dataContainer: {
    flex: 1,
    padding: 16,
  },
  img: {
    height: 90,
    width: 90,
  },
  imgContainer: {
    alignItems: 'center',
    borderRadius: 25,
    height: SCALE,
    justifyContent: 'center',
    width: SCALE,
  },
  title: {
    color: black,
    fontSize: 18,
    fontWeight: 'bold',
  },
});
