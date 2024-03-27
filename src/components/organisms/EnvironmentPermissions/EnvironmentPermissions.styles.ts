import { StyleSheet } from 'react-native';
import { ashGray } from '../../../theme';

export default StyleSheet.create({
  btnAddMember: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: 30,
    marginHorizontal: 25,
    marginTop: 10,
  },
  contactsContainer: {
    marginTop: 20,
    paddingBottom: 10,
  },
  plusIcon: {
    marginRight: 10,
  },
  title: {
    color: ashGray,
    fontSize: 12,
    fontWeight: 'bold',
    marginHorizontal: 25,
    marginTop: 40,
  },
  txtNoData: {
    marginBottom: 15,
  },
});
