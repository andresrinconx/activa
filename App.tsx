import React from 'react';
import { StyleSheet } from 'react-native';
import { GluestackUIProvider } from '@gluestack-ui/themed';
import { config } from '@gluestack-ui/config';
import { NavigationContainer } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Navigation from './src/navigation/Navigation';
import { NotificationProvider } from './src/contexts/NotificationContext';

const App = () => {
  return (
    <GluestackUIProvider config={config}>
      <GestureHandlerRootView style={styles.gesture}>
        <NavigationContainer>
          <NotificationProvider>
            <Navigation />
          </NotificationProvider>
        </NavigationContainer>
      </GestureHandlerRootView>
    </GluestackUIProvider>
  );
};

const styles = StyleSheet.create({
  gesture: { flex: 1 },
});

export default App;
