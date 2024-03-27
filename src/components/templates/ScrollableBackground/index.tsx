import React from 'react';
import { ScrollView, StatusBar } from 'react-native';
import styles from './ScrollableBackground.styles';
import { darkSlateBlue } from '../../../theme';
import { SafeAreaView } from 'react-native-safe-area-context';

interface Props {
  children: React.ReactNode;
  bgStatusBar?: string;
  darkContent?: boolean;
  backgroundColor?: string;
  paddingHorizontal?: number;
}

const ScrollableBackground = ({
  children,
  bgStatusBar,
  darkContent,
  backgroundColor = darkSlateBlue,
  paddingHorizontal = 20,
}: Props) => {
  return (
    <SafeAreaView style={styles(backgroundColor, paddingHorizontal).container}>
      <StatusBar
        backgroundColor={bgStatusBar || darkSlateBlue}
        barStyle={darkContent ? 'dark-content' : 'light-content'}
      />

      <ScrollView
        contentContainerStyle={styles().scrollContainer}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps={'handled'}>
        {children}
      </ScrollView>
    </SafeAreaView>
  );
};

export default ScrollableBackground;
