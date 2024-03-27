import { StyleSheet } from 'react-native';
import { redCoral } from '../../../theme';

export default StyleSheet.create({
  btn: {
    alignItems: 'center',
    backgroundColor: redCoral,
    flexDirection: 'row',
    flex: 1,
    height: 65,
    justifyContent: 'center',
  },
  txt: {
    fontWeight: 'bold',
    marginLeft: 10,
  },
});
