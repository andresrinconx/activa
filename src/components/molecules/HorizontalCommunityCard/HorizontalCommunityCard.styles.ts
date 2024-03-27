import { StyleSheet } from 'react-native';
import { black, white } from '../../../theme';

const SCALE = 120;

export default StyleSheet.create({
  container: {
    alignItems: 'flex-start',
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
    borderRadius: 25,
    height: SCALE,
    width: SCALE,
  },
  imgVertical: {
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    height: 190,
    width: '100%',
  },
  title: {
    color: black,
    fontSize: 18,
  },
  verticalContainer: {
    backgroundColor: white,
    height: 280,
    marginBottom: 16,
  },
  verticalDataContainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
});
