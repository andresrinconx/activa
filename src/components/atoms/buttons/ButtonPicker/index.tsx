import React, { useState } from 'react';
import styles from './ButtonPicker.styles';
import Button from '../Button';
import { Text } from 'react-native';
import DatePicker from 'react-native-date-picker';
import {
  getFormattedTime,
  getFormattedDate,
} from '../../../../utils/dates/getFormattedTime';

interface Props {
  value: Date;
  pickerMode?: 'date' | 'time';
  onConfirm: (date: Date) => void;
}

const ButtonPicker = ({ value, pickerMode = 'time', onConfirm }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onPress={() => setIsOpen(true)} style={styles.btn}>
        {pickerMode === 'date' ? (
          <Text style={styles.txtDate}>{getFormattedDate(value as Date)}</Text>
        ) : (
          <Text style={styles.txtDate}>{getFormattedTime(value as Date)}</Text>
        )}
      </Button>

      <DatePicker
        modal={true}
        mode={pickerMode}
        open={isOpen}
        date={value}
        onConfirm={date => {
          onConfirm(date);
          setIsOpen(false);
        }}
        onCancel={() => setIsOpen(false)}
      />
    </>
  );
};

export default ButtonPicker;
