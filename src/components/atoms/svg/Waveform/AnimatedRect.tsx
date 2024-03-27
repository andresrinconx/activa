import React, { useEffect } from 'react';
import Animated, { useSharedValue, withSpring } from 'react-native-reanimated';

interface Props {
  rect: { heightMin: number; heightMax: number };
  pitch: number;
  calculateRectHeight: (rect: {
    heightMin: number;
    heightMax: number;
  }) => number;
}

const AnimatedRect: React.FC<Props> = ({
  pitch,
  rect,
  calculateRectHeight,
}: Props) => {
  const height = useSharedValue(rect.heightMin);

  useEffect(() => {
    if (pitch) {
      height.value = withSpring(calculateRectHeight(rect));
    } else {
      height.value = rect.heightMin;
    }
  }, [pitch]);

  // eslint-disable-next-line react-native/no-inline-styles
  return <Animated.View style={{ width: 7, height }} />;
};

export default AnimatedRect;
