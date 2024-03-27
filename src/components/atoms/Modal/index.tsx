import React from 'react';
import styles from './Modal.styles';
import { Modal as GSModal, ModalBackdrop } from '@gluestack-ui/themed';
import { ScrollView, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { darkSlateBlue } from '../../../theme';

interface Props {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
  paddingHorizontal?: number;
  isTemplate?: boolean;
}

const Modal = ({
  children,
  isOpen,
  onClose,
  paddingHorizontal,
  isTemplate,
}: Props) => {
  return (
    <GSModal
      paddingHorizontal={paddingHorizontal}
      isOpen={isOpen}
      onClose={onClose}
      useRNModal={true}>
      <ModalBackdrop />
      {isTemplate && (
        <StatusBar backgroundColor={darkSlateBlue} barStyle={'light-content'} />
      )}
      <SafeAreaView style={styles(isTemplate).modal}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles().scroll}>
          {children}
        </ScrollView>
      </SafeAreaView>
    </GSModal>
  );
};

export default Modal;
