import React from 'react';
import styles from './MonthlyDocuments.styles';
import DateSelector from '../../atoms/DateSelector';
import StaticSheet from '../../atoms/StaticSheet';
import { FlatList } from 'react-native';
import Document from '../../molecules/Document';
import Text from '../../atoms/Text';
import { IDocument } from '../../../types/health';
import { getDayAndMonth } from '../../../utils/dates/getDayAndMonth';
import { black } from '../../../theme';
import Spinner from '../../atoms/Spinner';

interface Props {
  isLoading: boolean;
  date: Date;
  documents: IDocument[];
  clickBack: () => void;
  clickForward: () => void;
}

const MonthlyDocuments = ({
  isLoading,
  date,
  documents,
  clickBack,
  clickForward,
}: Props) => {
  const showDate = (day: string, index: number) => {
    if (index > 0) {
      const previusDay = documents[index - 1].day;
      if (previusDay !== day) {
        return (
          <Text style={styles.txtDate}>
            {getDayAndMonth(new Date(`${day}T00:00:00Z`))}
          </Text>
        );
      }
    } else {
      return (
        <Text style={styles.txtDate}>
          {getDayAndMonth(new Date(`${day}T00:00:00Z`))}
        </Text>
      );
    }
  };

  return (
    <>
      <DateSelector
        dateType="month"
        date={date}
        clickBack={clickBack}
        clickForward={clickForward}
      />

      <StaticSheet>
        {isLoading ? (
          <Spinner color={black} />
        ) : documents?.length ? (
          <FlatList
            data={documents}
            numColumns={1}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.listContainer}
            renderItem={({ item, index }) => {
              const isLast =
                index === documents.length - 1 ||
                (index < documents.length - 1 &&
                  documents[index + 1].day !== item.day);
              return (
                <>
                  {showDate(item.day, index)}
                  <Document isLast={isLast} title={item.name} />
                </>
              );
            }}
          />
        ) : (
          <Text color={black} isBold={true} size={18} textAlign="center">
            No hay documentos para este mes
          </Text>
        )}
      </StaticSheet>
    </>
  );
};

export default MonthlyDocuments;
