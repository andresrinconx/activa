import { StyleSheet } from 'react-native';
import { black, frostyBlue, mistyBlue, white } from '../../../theme';

export default StyleSheet.create({
  btnUpload: {
    backgroundColor: white,
    borderColor: mistyBlue,
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: 30,
    paddingLeft: 25,
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
    marginVertical: 30,
  },
  inputPrice: {
    backgroundColor: frostyBlue,
    borderRadius: 25,
    color: black,
    fontSize: 25,
    height: 90,
    paddingHorizontal: 25,
    width: 150,
  },
  priceContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  textareaDescription: {
    marginBottom: 30,
  },
  textareaTitle: {
    height: 120,
    marginBottom: 30,
  },
  title: {
    color: black,
    marginBottom: 25,
    textAlign: 'center',
  },
  txtBtn: {
    marginLeft: 10,
  },
  txtPrice: {
    color: black,
    fontSize: 21,
  },
});
