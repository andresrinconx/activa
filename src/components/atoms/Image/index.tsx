import React from 'react';
import { Image as RNImage } from 'react-native';
import { ImageSourcePropType } from 'react-native/Libraries/Image/Image';
import { ImageProps } from 'react-native';

interface Props extends ImageProps {
  source: ImageSourcePropType;
  isContain?: boolean;
}

const Image = ({ source, isContain, ...props }: Props) => {
  return (
    <RNImage
      {...props}
      source={source}
      resizeMode={isContain ? 'contain' : 'cover'}></RNImage>
  );
};

export default Image;
