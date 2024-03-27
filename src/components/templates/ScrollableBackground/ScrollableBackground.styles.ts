import { StyleSheet } from 'react-native';

export default (backgroundColor?: string, paddingHorizontal?: number) =>
  StyleSheet.create({
    container: {
      backgroundColor: backgroundColor,
      flex: 1,
      paddingHorizontal,
    },
    scrollContainer: {
      flexGrow: 1,
      justifyContent: 'space-between',
    },
  });
