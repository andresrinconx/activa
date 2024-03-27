import { StyleSheet } from 'react-native';
import { black } from '../../../theme';

export default StyleSheet.create({
  by: {
    color: black,
    fontSize: 13,
  },
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    height: 50,
  },
  data: {
    height: '100%',
    justifyContent: 'space-around',
    paddingVertical: 5,
  },
  img: {
    borderRadius: 999,
    height: 50,
    marginRight: 8,
    width: 50,
  },
});
