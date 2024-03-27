import React from 'react';
import styles from './ProgressBar.styles';
import { Progress, ProgressFilledTrack } from '@gluestack-ui/themed';
import { DimensionValue, View } from 'react-native';
import Text from '../Text';

interface Props {
  width: DimensionValue;
  height: DimensionValue;
  bgColor: string;
  fillColor: string;
  value: number;
  isRadius?: boolean;
  txt?: string;
}

const ProgressBar = ({
  width,
  height,
  bgColor,
  fillColor,
  value,
  isRadius = false,
  txt,
}: Props) => {
  return (
    <>
      <Progress value={value} w={width} h={height} bg={bgColor} mb={10}>
        {isRadius ? (
          <ProgressFilledTrack h={height} bg={fillColor} />
        ) : (
          <ProgressFilledTrack
            borderTopRightRadius={0}
            borderBottomRightRadius={0}
            h={height}
            bg={fillColor}
          />
        )}

        {txt && (
          <View style={styles.container}>
            <Text style={styles.txt}>{txt}</Text>
          </View>
        )}
      </Progress>
    </>
  );
};

export default ProgressBar;
