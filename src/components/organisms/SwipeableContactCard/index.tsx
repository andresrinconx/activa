import React from 'react';
import styles from './SwipeableContactCard.styles';
import { View } from 'react-native';
import { pureWhite, white } from '../../../theme';
import { Swipeable } from 'react-native-gesture-handler';
import ContactCard from '../../molecules/ContactCard';
import { IContact } from '../../../types/contact';
import Icon from '../../atoms/Icon';
import Button from '../../atoms/buttons/Button';

interface Props {
  item: IContact;
  deleteContact: (phone: string) => void;
}

const SwipeableContactCard = ({ item, deleteContact }: Props) => {
  return (
    <Swipeable
      renderRightActions={() => (
        <View style={styles.btnDeleteContainer}>
          <Button onPress={() => deleteContact(item.phone)} w={90} h="100%">
            <Icon
              width="18"
              height="20"
              viewBox="0 0 18 20"
              d="M3.93401 19.2033C3.30429 19.2033 2.76769 18.9816 2.32421 18.5381C1.88073 18.0946 1.65898 17.558 1.65898 16.9283V4.06582H0.521484V1.79082H5.86226V0.65332H12.1253V1.79082H17.478V4.06582H16.3405V16.9283C16.3405 17.558 16.1188 18.0946 15.6753 18.5381C15.2318 18.9816 14.6952 19.2033 14.0655 19.2033H3.93401ZM14.0655 4.06582H3.93401V16.9283H14.0655V4.06582ZM5.89216 14.9941H8.02966V5.99409H5.89216V14.9941ZM9.96986 14.9941H12.1074V5.99409H9.96986V14.9941Z"
              fill={white}
            />
          </Button>
        </View>
      )}>
      <ContactCard
        item={item}
        backgroundColor={pureWhite}
        mx={25}
        disabled={true}
      />
    </Swipeable>
  );
};

export default SwipeableContactCard;
