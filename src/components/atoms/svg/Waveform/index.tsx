import React from 'react';
import styles from './Waveform.styles';
import { View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { lightBlue, lightSteelBlue } from '../../../../theme';
import { maxPitch, rects } from '../../../../constants/waveform';
import AnimatedRect from './AnimatedRect';

interface Props {
  pitch: number;
}

const Waveform: React.FC<Props> = ({ pitch }: Props) => {
  const calculateRectHeight = (rect: {
    heightMin: number;
    heightMax: number;
  }) => {
    const { heightMin, heightMax } = rect;
    let height =
      heightMin + ((pitch - 0) / (maxPitch - 0)) * (heightMax - heightMin);
    height = Math.max(heightMin, Math.min(height, heightMax));
    return height;
  };

  return (
    <View style={styles().container}>
      {rects.map((rect, index) => {
        const isLast = index === rects.length - 1;
        return (
          <LinearGradient
            key={rect.id}
            colors={[lightBlue, lightSteelBlue]}
            start={{ x: 0.5, y: 0 }}
            end={{ x: 0.5, y: 1 }}
            locations={[0.3, 1]}
            style={styles(undefined, isLast).gradient}>
            <AnimatedRect
              rect={rect}
              pitch={pitch}
              calculateRectHeight={calculateRectHeight}
            />
          </LinearGradient>
        );
      })}
    </View>
  );
};

export default Waveform;
