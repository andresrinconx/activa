import React from 'react';
import ScrollableBackground from '../../templates/ScrollableBackground';
import Header from '../../organisms/Header';
import DoToday from '../../organisms/DoToday';
import VoiceAssistant from '../../organisms/VoiceAssistant';
import { View } from 'react-native';

const Home = () => {
  return (
    <ScrollableBackground>
      <View>
        <Header />
        <DoToday />
      </View>

      <VoiceAssistant />
    </ScrollableBackground>
  );
};

export default Home;
