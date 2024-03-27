import { StyleSheet } from 'react-native';
import {
  black,
  blushPink,
  calmLavender,
  cottonCandyPink,
  delicateRose,
  fieryRed,
  redCoral,
} from '../../../theme';

const SCALE = 145;

export default (isLoading?: boolean) =>
  StyleSheet.create({
    barContainer: {
      borderColor: calmLavender,
      borderRadius: 999,
      borderWidth: 15,
      bottom: -15,
      height: 95,
      left: -15,
      position: 'absolute',
      right: -15,
      top: -15,
      width: '110%',
    },
    bottomContainer: {
      alignItems: 'center',
      borderBottomLeftRadius: 25,
      borderBottomRightRadius: 25,
      padding: 25,
    },
    btn: {
      backgroundColor: redCoral,
      width: '100%',
    },
    firstColor: {
      backgroundColor: isLoading ? calmLavender : blushPink,
      borderRadius: 999,
      padding: 60,
    },
    gradient: {
      alignItems: 'center',
      backgroundColor: black,
      borderTopLeftRadius: 25,
      borderTopRightRadius: 25,
      height: 350,
      justifyContent: 'center',
      overflow: 'hidden',
    },
    img: {
      borderColor: redCoral,
      borderRadius: 999,
      borderWidth: isLoading ? 5 : 0,
      height: SCALE,
      width: SCALE,
    },
    nameContainer: {
      alignItems: 'center',
      bottom: isLoading ? 0 : 10,
      position: isLoading ? 'relative' : 'absolute',
    },
    progressContainer: {
      position: isLoading ? 'relative' : 'absolute',
      width: '100%',
    },
    secondColor: {
      backgroundColor: isLoading ? calmLavender : cottonCandyPink,
      borderRadius: 999,
      padding: 50,
    },
    thirdColor: {
      backgroundColor: isLoading ? calmLavender : delicateRose,
      borderRadius: 999,
      padding: 60,
    },
    title: {
      color: fieryRed,
      marginBottom: 35,
      position: isLoading ? 'relative' : 'absolute',
      top: isLoading ? 0 : 45,
    },
    topContainer: {
      alignItems: 'center',
      backgroundColor: calmLavender,
      borderTopLeftRadius: 25,
      borderTopRightRadius: 25,
      padding: 25,
    },
    txtBtn: {
      fontWeight: 'bold',
    },
    txtName: {
      color: black,
      marginTop: 15,
    },
    txtRelation: {
      color: black,
      fontSize: 17,
      fontWeight: '500',
      marginBottom: 20,
    },
  });
