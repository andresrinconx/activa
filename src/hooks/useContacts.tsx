import { useEffect, useRef, useState } from 'react';
import Contacts from 'react-native-contacts';
import { IContact } from '../types/contact';
import useNotification from './useNotification';
import usePermissions from './usePermissions';
import { getBatch } from '../utils/lists/getBatch';
import { filterDataByFields } from '../utils/lists/filterDataByFields';

const useContacts = () => {
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [allContacts, setAllContacts] = useState<IContact[]>([]);
  const [contacts, setContacts] = useState<IContact[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchedContacts, setSearchedContacts] = useState<IContact[]>([]);
  const nextBatchRef = useRef<IContact[]>([]);

  const { showToast } = useNotification();
  const { requestContactsPermission } = usePermissions();
  const contactsPerPage = 10;

  useEffect(() => {
    const getContacts = async () => {
      const hasPermission = await requestContactsPermission();
      if (hasPermission) {
        try {
          const contacts = await Contacts.getAll();
          const formattedContacts: IContact[] = contacts.map(contact => {
            const name = [
              contact?.givenName?.trim(),
              contact?.middleName?.trim(),
              contact?.familyName?.trim(),
            ]
              .filter(Boolean)
              .join(' ');

            const relation = contact?.jobTitle || '';
            const profilePhoto = contact?.hasThumbnail
              ? { uri: contact?.thumbnailPath }
              : require('../assets/icons/nophoto.png');
            const phone = contact?.phoneNumbers[0]?.number || '';

            return { name, relation, profilePhoto, phone };
          });

          setAllContacts(formattedContacts);
          setContacts(
            getBatch(formattedContacts, contactsPerPage, currentPage),
          );
          setCurrentPage(prevPage => {
            const newPage = prevPage + 1;
            nextBatchRef.current = getBatch(
              formattedContacts,
              contactsPerPage,
              newPage,
            );
            return newPage;
          });

          setLoading(false);
        } catch (error) {
          showToast('No se pudieron obtener los contactos');
        }
      }
    };
    getContacts();
  }, []);

  useEffect(() => {
    if (searchTerm.length > 2) {
      setSearchedContacts(
        filterDataByFields(allContacts, searchTerm, [
          'name',
          'relation',
          'phone',
        ]),
      );
    } else {
      setSearchedContacts([]);
    }
  }, [searchTerm]);

  const loadMore = () => {
    setContacts([...contacts, ...nextBatchRef.current]);
    setCurrentPage(prevPage => {
      const newPage = prevPage + 1;
      nextBatchRef.current = getBatch(allContacts, contactsPerPage, newPage);
      return newPage;
    });
  };

  return {
    loading,
    contacts,
    searchTerm,
    setSearchTerm,
    searchedContacts,
    loadMore,
  };
};

export default useContacts;
