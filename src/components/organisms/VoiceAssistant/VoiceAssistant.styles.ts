import { StyleSheet } from 'react-native';
import { black, royalBlue, stormyGray } from '../../../theme';

export default StyleSheet.create({
  btn: {
    alignItems: 'center',
    backgroundColor: royalBlue,
    flexDirection: 'row',
    marginVertical: 8,
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 40,
  },
  img: {
    width: '100%',
  },
  title: {
    color: black,
    textAlign: 'center',
  },
  txt: {
    fontWeight: 'bold',
    marginLeft: 10,
  },
  txtMessage: {
    color: stormyGray,
    fontSize: 42,
    fontWeight: '300',
  },
});
