import React from 'react';
import styles, { Style } from './ToggleButton.styles';
import Button from '../Button';
import Text from '../../Text';
import Spinner from '../../Spinner';

interface Props extends Style {
  text: string;
  disabled: boolean;
  loading?: boolean;
  onPress: () => void;
}

const ToggleButton = ({
  text,
  loading,
  disabled,
  enabledColor,
  onPress,
}: Props) => {
  return (
    <Button
      onPress={onPress}
      style={styles(disabled, enabledColor).btn}
      disabled={disabled}>
      {loading ? (
        <Spinner color="white" />
      ) : (
        <Text style={styles().txt}>{text}</Text>
      )}
    </Button>
  );
};

export default ToggleButton;
