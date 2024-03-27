import { StyleSheet } from 'react-native';
import { ashGray, darkSlateBlue } from '../../../theme';

export default StyleSheet.create({
  container: {
    marginTop: 40,
    paddingBottom: 10,
    paddingHorizontal: 25,
  },
  referencesContainer: {
    alignItems: 'flex-end',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
    marginTop: 25,
  },
  title: {
    color: ashGray,
    fontSize: 12,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  txtMax: {
    color: darkSlateBlue,
    fontSize: 24,
  },
  txtMin: {
    color: darkSlateBlue,
    fontSize: 14,
  },
});
