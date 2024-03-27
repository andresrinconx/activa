import React, { useEffect, useState } from 'react';
import styles from './EnvironmentPermissions.styles';
import { View } from 'react-native';
import Text from '../../atoms/Text';
import SwipeableContactCard from '../SwipeableContactCard';
import Button from '../../atoms/buttons/Button';
import Icon from '../../atoms/Icon';
import { tranquilIndigo } from '../../../theme';
import { IContact } from '../../../types/contact';
import List from '../../atoms/List';
import { useUserStore } from '../../../store';
import useNavigation from '../../../hooks/useNavigation';
// import useHttp from '../../../hooks/useHttp';

const EnvironmentPermissions = () => {
  const [loading, setLoading] = useState(true);
  const [contacts, setContacts] = useState<IContact[]>([]);

  const { isPAM } = useUserStore();
  const navigation = useNavigation();
  // const { post, deleteE } = useHttp(navigation);

  useEffect(() => {
    getContacts();
  }, []);

  const getContacts = async () => {
    // if (isPAM) {
    //   setContacts();
    // } else {
    //   setContacts();
    // }
    setLoading(false);
  };

  const deleteContact = async () => {
    // const res = await deleteE();
    // if (res) {
    //   getContacts();
    // }
  };

  return (
    <>
      <Text style={styles.title}>{isPAM ? 'ENTORNO' : 'PAMs'}</Text>

      <View style={styles.contactsContainer}>
        <List
          loading={loading}
          data={contacts}
          renderItem={item => (
            <SwipeableContactCard item={item} deleteContact={deleteContact} />
          )}
          noDataText="Aún no has añadido ningún miembro"
          spinnerColor={tranquilIndigo}
        />
      </View>

      <Button
        h={25}
        style={styles.btnAddMember}
        onPress={() => navigation.navigate('AddMember')}>
        <Icon
          scale="22"
          viewBox="0 0 22 22"
          d="M9.95233 16.048H12.048V12.048H16.048V9.95232H12.048V5.95232H9.95233V9.95232H5.95233V12.048H9.95233V16.048ZM11.0001 21.2034C9.58493 21.2034 8.25706 20.9358 7.01652 20.4005C5.77599 19.8652 4.6969 19.1387 3.77925 18.2211C2.8616 17.3034 2.13512 16.2243 1.59982 14.9838C1.06452 13.7432 0.796875 12.4154 0.796875 11.0001C0.796875 9.58493 1.06452 8.25706 1.59982 7.01653C2.13512 5.77599 2.8616 4.6969 3.77925 3.77925C4.6969 2.8616 5.77599 2.13512 7.01652 1.59982C8.25706 1.06452 9.58493 0.796875 11.0001 0.796875C12.4154 0.796875 13.7432 1.06452 14.9838 1.59982C16.2243 2.13512 17.3034 2.8616 18.2211 3.77925C19.1387 4.6969 19.8652 5.77599 20.4005 7.01653C20.9358 8.25706 21.2034 9.58493 21.2034 11.0001C21.2034 12.4154 20.9358 13.7432 20.4005 14.9838C19.8652 16.2243 19.1387 17.3034 18.2211 18.2211C17.3034 19.1387 16.2243 19.8652 14.9838 20.4005C13.7432 20.9358 12.4154 21.2034 11.0001 21.2034ZM11.0001 18.9284C13.2175 18.9284 15.0933 18.1614 16.6273 16.6273C18.1614 15.0933 18.9284 13.2175 18.9284 11.0001C18.9284 8.78277 18.1614 6.90704 16.6273 5.37298C15.0933 3.83893 13.2175 3.0719 11.0001 3.0719C8.78277 3.0719 6.90704 3.83893 5.37297 5.37298C3.83892 6.90704 3.0719 8.78277 3.0719 11.0001C3.0719 13.2175 3.83892 15.0933 5.37297 16.6273C6.90704 18.1614 8.78277 18.9284 11.0001 18.9284Z"
          fill={tranquilIndigo}
          styles={styles.plusIcon}
        />
        <Text color={tranquilIndigo} isBold={true} size={18}>
          Añadir miembro
        </Text>
      </Button>
    </>
  );
};

export default EnvironmentPermissions;
