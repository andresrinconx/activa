import { StyleSheet } from 'react-native';
import { black, frostyBlue, pearlWhite, steelGray } from '../../../theme';

export default (isLast?: boolean) =>
  StyleSheet.create({
    container: {
      borderTopColor: pearlWhite,
      borderTopWidth: 1,
      flexDirection: 'row',
      paddingVertical: 15,
    },
    event: {
      backgroundColor: frostyBlue,
      borderRadius: 20,
      flexDirection: 'row',
      justifyContent: 'flex-start',
      marginBottom: isLast ? 0 : 8,
      minHeight: 40,
      paddingHorizontal: 20,
      paddingVertical: 15,
      width: '100%',
    },
    eventsContainer: {
      gap: 10,
      width: '80%',
    },
    icon: {
      marginTop: 4,
    },
    txtEvent: {
      color: black,
      fontSize: 16,
      paddingLeft: 5,
      width: '90%',
    },
    txtTime: {
      color: steelGray,
      fontSize: 16,
      width: '20%',
    },
  });
