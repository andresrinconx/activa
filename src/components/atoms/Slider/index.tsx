import React from 'react';
import {
  Slider as GSSlider,
  SliderTrack,
  SliderThumb,
  SliderFilledTrack,
} from '@gluestack-ui/themed';
import { white } from '../../../theme';

interface Props {
  value: number;
  setValue: (value: number) => void;
  color: string;
}

const Slider = ({ value, setValue, color }: Props) => {
  return (
    <GSSlider
      value={value}
      onChange={value => setValue(value)}
      size="sm"
      orientation="horizontal">
      <SliderTrack>
        <SliderFilledTrack bg={color} />
      </SliderTrack>
      <SliderThumb
        bg={color}
        borderWidth={1.5}
        borderColor={white}
        elevation={0}
      />
    </GSSlider>
  );
};

export default Slider;
