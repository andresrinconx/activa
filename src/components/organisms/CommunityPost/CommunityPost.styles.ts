import { StyleSheet } from 'react-native';
import { black } from '../../../theme';

export default StyleSheet.create({
  content: {
    paddingBottom: 40,
    paddingHorizontal: 20,
    paddingTop: 25,
  },
  img: {
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    height: 190,
    width: '100%',
  },
  title: {
    color: black,
    marginBottom: 25,
  },
  txtDescription: {
    color: black,
    fontSize: 18,
    lineHeight: 30,
  },
});
