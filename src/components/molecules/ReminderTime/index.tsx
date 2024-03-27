import React from 'react';
import styles from './ReminderTime.styles';
import Text from '../../atoms/Text';
import { View } from 'react-native';
import Icon from '../../atoms/Icon';
import { black } from '../../../theme';
import { convertHourToMilitaryFormat } from '../../../utils/dates/getFormattedTime';
import { IReminderEvent, IReminderItem } from '../../../types/reminders';

const ReminderTime = ({ item }: { item: IReminderItem }) => {
  return (
    <View style={styles().container}>
      <Text style={styles().txtTime}>
        {convertHourToMilitaryFormat(item.time)}
      </Text>

      <View style={styles().eventsContainer}>
        {item?.items?.map((record: IReminderEvent) => (
          <View style={styles(true).event} key={`record-${record.id}`}>
            <Icon
              styles={styles().icon}
              scale="14"
              viewBox="0 0 14 14"
              d="M4.375 14C3.15649 14 2.12269 13.5755 1.2736 12.7264C0.424535 11.8773 0 10.8435 0 9.625C0 9.04167 0.111111 8.47917 0.333333 7.9375C0.555556 7.39583 0.868056 6.92361 1.27083 6.52083L6.52083 1.27083C6.92361 0.868056 7.39583 0.555556 7.9375 0.333333C8.47917 0.111111 9.04167 0 9.625 0C10.8435 0 11.8773 0.424535 12.7264 1.2736C13.5755 2.12269 14 3.15649 14 4.375C14 4.95833 13.8889 5.52083 13.6667 6.0625C13.4444 6.60417 13.1319 7.07639 12.7292 7.47917L7.47917 12.7292C7.07639 13.1319 6.60417 13.4444 6.0625 13.6667C5.52083 13.8889 4.95833 14 4.375 14ZM9.5625 8.5L11.6667 6.41667C11.9444 6.13889 12.1528 5.82639 12.2917 5.47917C12.4306 5.13194 12.5 4.7662 12.5 4.38194C12.5 3.58692 12.2184 2.90785 11.6553 2.34471C11.0922 1.78157 10.4131 1.5 9.61806 1.5C9.2338 1.5 8.86806 1.56944 8.52083 1.70833C8.17361 1.84722 7.86111 2.05556 7.58333 2.33333L5.5 4.4375L9.5625 8.5ZM4.38194 12.5C4.7662 12.5 5.13194 12.4306 5.47917 12.2917C5.82639 12.1528 6.13889 11.9444 6.41667 11.6667L8.5 9.5625L4.4375 5.5L2.35417 7.58333C2.07639 7.86111 1.86458 8.17361 1.71875 8.52083C1.57292 8.86806 1.5 9.2338 1.5 9.61806C1.5 10.4131 1.78157 11.0922 2.34471 11.6553C2.90785 12.2184 3.58692 12.5 4.38194 12.5Z"
              fill={black}
            />
            <Text style={styles().txtEvent}>{record.description}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default ReminderTime;
