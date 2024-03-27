import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  btn: {
    flexDirection: 'row',
  },
  btnOption: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  container: {
    flex: 1,
    paddingHorizontal: 40,
    paddingVertical: 20,
  },
  iconContainer: {
    position: 'absolute',
    right: 12,
  },
  txt: {
    maxWidth: '60%',
  },
});
