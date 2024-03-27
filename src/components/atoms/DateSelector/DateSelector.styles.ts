import { StyleSheet } from 'react-native';
import { midnightBlue } from '../../../theme';

export default StyleSheet.create({
  btn: {
    backgroundColor: midnightBlue,
    borderRadius: 999,
    height: 65,
    padding: 5,
    width: 65,
  },
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 18,
  },
  img: {
    height: '60%',
    width: '60%',
  },
  txtDate: {
    fontSize: 24,
  },
});
