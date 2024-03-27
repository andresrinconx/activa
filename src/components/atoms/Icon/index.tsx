import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { ViewStyle } from 'react-native';

type Props =
  | {
      width: string;
      height: string;
      viewBox: string;
      d: string;
      fill?: string;
      styles?: ViewStyle;
      scale?: never;
    }
  | {
      scale: string;
      viewBox: string;
      d: string;
      fill?: string;
      styles?: ViewStyle;
      width?: never;
      height?: never;
    };

const Icon = ({ scale, width, height, viewBox, d, fill, styles }: Props) => {
  return (
    <Svg
      style={styles}
      width={scale || width}
      height={scale || height}
      viewBox={viewBox}
      fill="none">
      <Path d={d} fill={fill || 'white'} />
    </Svg>
  );
};

export default Icon;
