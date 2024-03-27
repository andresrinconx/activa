import React, { Fragment } from 'react';
import styles from './List.styles';
import Spinner from '../Spinner';
import Text from '../Text';
import { ColorValue } from 'react-native';
import { black } from '../../../theme';
import Separator from '../Separator';

interface Props<T> {
  data: T[];
  loading: boolean;
  spinnerColor?: ColorValue;
  noDataText: string;
  noDataTextColor?: ColorValue;
  renderItem: (item: T) => React.JSX.Element;
}

const List = <T,>({
  data,
  loading,
  spinnerColor,
  noDataText,
  noDataTextColor,
  renderItem,
}: Props<T>) => {
  return (
    <>
      {loading ? (
        <Spinner color={spinnerColor || black} margin={10} />
      ) : data.length ? (
        data?.map((item, index) => (
          <Fragment key={index}>
            {renderItem(item as T)}
            <Separator marginVertical={data?.length - 1 === index ? 0 : 8} />
          </Fragment>
        ))
      ) : (
        <Text
          color={noDataTextColor || black}
          isBold={true}
          size={18}
          textAlign="center"
          style={styles.txtNoData}>
          {noDataText}
        </Text>
      )}
    </>
  );
};

export default List;
