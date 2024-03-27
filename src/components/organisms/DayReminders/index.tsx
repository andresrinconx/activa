import React from 'react';
import styles from './DayReminders.styles';
import DateSelector from '../../atoms/DateSelector';
import StaticSheet from '../../atoms/StaticSheet';
import { FlatList } from 'react-native';
import ReminderTime from '../../molecules/ReminderTime';
import { IReminderItem } from '../../../types/reminders';

interface Props {
  date: Date;
  reminders: IReminderItem[];
  clickBack: () => void;
  clickForward: () => void;
}

const DayReminders = ({ date, reminders, clickBack, clickForward }: Props) => {
  return (
    <>
      <DateSelector
        dateType="day"
        date={date}
        clickBack={clickBack}
        clickForward={clickForward}
      />

      <StaticSheet>
        <FlatList
          data={reminders}
          numColumns={1}
          contentContainerStyle={styles.listContainer}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => {
            return <ReminderTime item={item} />;
          }}
        />
      </StaticSheet>
    </>
  );
};

export default DayReminders;
