import React from 'react';
import { StatusBar } from 'react-native';
import styles from './Background.styles';
import { darkSlateBlue } from '../../../theme';
import { SafeAreaView } from 'react-native-safe-area-context';

interface Props {
  children: React.ReactNode;
  bgStatusBar?: string;
  darkContent?: boolean;
  backgroundColor?: string;
  paddingHorizontal?: number;
}

const Background = ({
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

      {children}
    </SafeAreaView>
  );
};

export default Background;
