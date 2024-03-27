import { StyleSheet } from 'react-native';
import {
  black,
  deepNavy,
  electricBlue,
  frostyBlue,
  mistyBlue,
  silverGray,
  white,
} from '../../../theme';

export default (md?: boolean) =>
  StyleSheet.create({
    btn: {
      backgroundColor: white,
      borderColor: mistyBlue,
      borderWidth: 1,
      height: 170,
      marginBottom: 30,
    },
    container: {
      flex: 1,
      marginTop: 30,
      paddingBottom: 10,
    },
    dataContainer: {
      flexDirection: md ? 'row' : 'column',
      justifyContent: 'space-between',
    },
    input: {
      borderColor: silverGray,
      borderWidth: 1,
      color: black,
      fontSize: 16,
      height: 67,
      paddingHorizontal: 24,
      width: md ? '49%' : '100%',
    },
    itemContainer: {
      alignItems: 'center',
      backgroundColor: frostyBlue,
      borderRadius: 16,
      flexDirection: 'row',
      height: 56,
      justifyContent: 'space-between',
      marginBottom: 24,
      paddingHorizontal: 17,
      width: md ? '49%' : '100%',
    },
    nameContainer: {
      width: '100%',
    },
    option: {
      width: md ? '49%' : '100%',
    },
    pickerContainer: {
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 20,
    },
    rowContainer: {
      alignItems: 'center',
      flexDirection: 'row',
    },
    spaceContainer: {
      flex: 1,
      justifyContent: 'space-between',
    },
    title: {
      color: black,
      marginBottom: 50,
      textAlign: 'center',
    },
    txt: {
      color: black,
      fontSize: 18,
      marginBottom: 20,
      textAlign: 'center',
    },
    txtBtn: {
      color: deepNavy,
      fontWeight: 'bold',
      marginTop: 10,
    },
    txtDelete: {
      color: electricBlue,
      fontSize: 16,
      marginLeft: 10,
    },
    txtFile: {
      color: black,
      fontSize: 16,
      marginLeft: 10,
      width: '60%',
    },
    txtPicker: {
      color: black,
      fontSize: 21,
      paddingRight: md ? 20 : 0,
    },
  });
