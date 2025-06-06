import React from 'react';
import styles from './DateSelector.styles';
import { View } from 'react-native';
import Button from '../buttons/Button';
import Text from '../Text';
import Icon from '../Icon';
import { getDayInfo } from '../../../utils/dates/getDayInfo';
import { getMonthInfo } from '../../../utils/dates/getMonthInfo';

interface Props {
  dateType: 'day' | 'month';
  date: Date;
  clickBack: () => void;
  clickForward: () => void;
}

const DateSelector = ({ dateType, date, clickBack, clickForward }: Props) => {
  const isDay = dateType === 'day';
  const isMonth = dateType === 'month';

  return (
    <View style={styles.container}>
      <Button onPress={clickBack} style={styles.btn}>
        <Icon
          width="27"
          height="26"
          viewBox="0 0 27 26"
          d="M4.95825 14.3888L13.9861 23.4166C14.2638 23.6944 14.4004 24.0185 14.3958 24.3889C14.3912 24.7592 14.2499 25.0833 13.9722 25.3611C13.6944 25.6296 13.3703 25.7662 13 25.7708C12.6296 25.7754 12.3055 25.6389 12.0278 25.3611L0.638833 13.9722C0.490694 13.824 0.386528 13.6713 0.326333 13.5138C0.266167 13.3564 0.236084 13.1852 0.236084 13C0.236084 12.8148 0.266167 12.6435 0.326333 12.4861C0.386528 12.3287 0.490694 12.1759 0.638833 12.0278L12.0278 0.638835C12.2963 0.370335 12.618 0.236084 12.993 0.236084C13.368 0.236084 13.6944 0.370335 13.9722 0.638835C14.2499 0.916612 14.3888 1.243 14.3888 1.618C14.3888 1.993 14.2499 2.31939 13.9722 2.59717L4.95825 11.6111H24.9444C25.3426 11.6111 25.6736 11.743 25.9375 12.0069C26.2013 12.2708 26.3333 12.6018 26.3333 13C26.3333 13.3981 26.2013 13.7291 25.9375 13.993C25.6736 14.2569 25.3426 14.3888 24.9444 14.3888H4.95825Z"
        />
      </Button>

      <Text style={styles.txtDate}>
        {isDay ? getDayInfo(date) : isMonth ? getMonthInfo(date) : ''}
      </Text>

      <Button onPress={clickForward} style={styles.btn}>
        <Icon
          width="27"
          height="26"
          viewBox="0 0 27 26"
          d="M21.5867 14.5782H1.9659C1.51682 14.5782 1.14151 14.4274 0.839987 14.1259C0.538459 13.8244 0.387695 13.4491 0.387695 13C0.387695 12.5509 0.538459 12.1756 0.839987 11.8741C1.14151 11.5725 1.51682 11.4218 1.9659 11.4218H21.5867L12.8811 2.71616C12.5657 2.40074 12.4084 2.02978 12.4094 1.60328C12.4103 1.17681 12.5687 0.805298 12.8844 0.488742C13.2002 0.180825 13.5717 0.026216 13.9988 0.0249104C14.426 0.0236049 14.798 0.18066 15.1151 0.496076L26.5039 11.885C26.6672 12.0493 26.7862 12.2247 26.861 12.411C26.9358 12.5973 26.9732 12.7939 26.9732 13.0007C26.9732 13.2076 26.9358 13.404 26.861 13.59C26.7862 13.7759 26.6672 13.951 26.5039 14.115L15.1051 25.5072C14.7901 25.82 14.4202 25.9765 13.9954 25.9765C13.5705 25.9765 13.2004 25.8195 12.885 25.5057C12.5696 25.19 12.4119 24.8189 12.4119 24.3926C12.4119 23.9662 12.5696 23.5953 12.885 23.2799L21.5867 14.5782Z"
        />
      </Button>
    </View>
  );
};

export default DateSelector;
