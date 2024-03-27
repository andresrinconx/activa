import { StyleSheet } from 'react-native';

export default (height?: number, isLast?: boolean) =>
  StyleSheet.create({
    container: {
      alignItems: 'center',
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
    },
    gradient: {
      borderRadius: 8,
      marginRight: isLast ? 0 : 10,
    },
  });
