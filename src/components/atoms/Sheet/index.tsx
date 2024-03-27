import React from 'react';
import styles from './Sheet.styles';
import {
  Actionsheet,
  ActionsheetBackdrop,
  ActionsheetScrollView,
  ActionsheetContent,
} from '@gluestack-ui/themed';
import { white } from '../../../theme';
import { DimensionValue, View } from 'react-native';

interface Props {
  children: React.ReactNode;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  height?: DimensionValue;
  backdrop?: boolean;
  scrollable?: boolean;
  onClose?: () => void;
}

const Sheet = ({
  children,
  isOpen,
  setIsOpen,
  height = '50%',
  backdrop,
  scrollable = true,
  onClose,
}: Props) => {
  return (
    <Actionsheet
      isOpen={isOpen}
      onClose={() => {
        setIsOpen(false), onClose && onClose();
      }}>
      {backdrop ? (
        <ActionsheetBackdrop />
      ) : (
        <ActionsheetBackdrop backgroundColor={undefined} />
      )}
      <ActionsheetContent
        height={height}
        padding={0}
        backgroundColor={white}
        borderTopRightRadius={25}
        borderTopLeftRadius={25}>
        {scrollable ? (
          <ActionsheetScrollView
            contentContainerStyle={styles.scrollContainer}
            showsVerticalScrollIndicator={false}>
            {children}
          </ActionsheetScrollView>
        ) : (
          <View style={styles.container}>{children}</View>
        )}
      </ActionsheetContent>
    </Actionsheet>
  );
};

export default Sheet;
