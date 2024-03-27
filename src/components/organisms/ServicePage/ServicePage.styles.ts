import { StyleSheet } from 'react-native';
import { black, royalBlue, white } from '../../../theme';

export default StyleSheet.create({
  actionContainer: {
    backgroundColor: white,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    elevation: 8,
    flexDirection: 'row',
    paddingHorizontal: 25,
    paddingVertical: 10,
    width: '100%',
  },
  btnAction: {
    backgroundColor: royalBlue,
    height: 65,
    width: '50%',
  },
  content: {
    paddingBottom: 20,
    paddingHorizontal: 20,
    paddingTop: 25,
  },
  img: {
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    height: 190,
    width: '100%',
  },
  priceContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    width: '50%',
  },
  profileContainer: {
    marginVertical: 20,
  },
  title: {
    color: black,
    marginBottom: 20,
  },
  txtAction: {
    fontWeight: 'bold',
  },
  txtCents: {
    color: black,
    fontSize: 22,
    fontWeight: 'bold',
  },
  txtDescription: {
    color: black,
    fontSize: 18,
    lineHeight: 30,
    marginTop: 25,
  },
  txtPrice: {
    color: black,
    fontSize: 30,
    fontWeight: 'bold',
  },
  txtSlogan: {
    color: black,
    fontSize: 18,
    fontWeight: 'bold',
  },
});
