import React from 'react';
import styles from './SectionHeader.styles';
import { View, Pressable } from 'react-native';
import Text from '../../atoms/Text';
import Icon from '../../atoms/Icon';
import { black, white } from '../../../theme';
import useNavigation from '../../../hooks/useNavigation';
import HeaderAlert from '../../atoms/HeaderAlert';
import useNotification from '../../../hooks/useNotification';

interface Props {
  title: string;
  backgroundColor: string;
  textWhite?: boolean;
  ActionButton?: React.ReactNode;
  alertText?: string;
}

const SectionHeader = ({
  title,
  backgroundColor,
  textWhite = false,
  ActionButton,
  alertText,
}: Props) => {
  const navigation = useNavigation();
  const { showHeaderAlert } = useNotification();

  return (
    <>
      <View style={styles(backgroundColor).container}>
        <View style={styles().titleContainer}>
          <Pressable
            onPress={() => navigation.goBack()}
            style={styles().btnBack}>
            <Icon
              width="12"
              height="20"
              viewBox="0 0 12 20"
              d="M3.54995 10.0001L10.9 17.3501C11.15 17.6001 11.2708 17.8918 11.2625 18.2251C11.2541 18.5584 11.125 18.8501 10.875 19.1001C10.625 19.3501 10.3333 19.4751 9.99995 19.4751C9.66662 19.4751 9.37495 19.3501 9.12495 19.1001L1.42495 11.4251C1.22495 11.2251 1.07495 11.0001 0.974951 10.7501C0.874951 10.5001 0.824951 10.2501 0.824951 10.0001C0.824951 9.75011 0.874951 9.50011 0.974951 9.25011C1.07495 9.00011 1.22495 8.77511 1.42495 8.57511L9.12495 0.87511C9.37495 0.62511 9.67078 0.504277 10.0125 0.51261C10.3541 0.520944 10.65 0.65011 10.9 0.90011C11.15 1.15011 11.275 1.44178 11.275 1.77511C11.275 2.10844 11.15 2.40011 10.9 2.65011L3.54995 10.0001Z"
              fill={textWhite ? white : black}
            />
          </Pressable>
          <Text style={styles(undefined, textWhite).title}>{title}</Text>
        </View>

        {ActionButton}
      </View>
      {showHeaderAlert && <HeaderAlert text={alertText as string} />}
    </>
  );
};

export default SectionHeader;
