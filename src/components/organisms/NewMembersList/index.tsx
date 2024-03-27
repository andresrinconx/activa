import React from 'react';
import styles from './NewMembersList.styles';
import ContactCard from '../../molecules/ContactCard';
import { FlatList, View } from 'react-native';
import Separator from '../../atoms/Separator';
import { ashGray, pureWhite } from '../../../theme';
import Image from '../../atoms/Image';
import useContacts from '../../../hooks/useContacts';
import Spinner from '../../atoms/Spinner';
import Icon from '../../atoms/Icon';
import { IContact } from '../../../types/contact';
import BaseInput from '../../atoms/inputs/BaseInput';

interface Props {
  addContact: (contact: IContact) => void;
}

const NewMembersList = ({ addContact }: Props) => {
  const {
    loading,
    loadMore,
    contacts,
    searchedContacts,
    setSearchTerm,
    searchTerm,
  } = useContacts();

  const Header = () => (
    <View style={styles.inputContainer}>
      <BaseInput
        style={styles.input}
        placeholder="Buscar contacto"
        placeholderTextColor={ashGray}
        value={searchTerm}
        onChangeText={setSearchTerm}
      />
      <Icon
        scale="18"
        viewBox="0 0 18 18"
        d="M16.6 18L10.3 11.7C9.8 12.1 9.225 12.4167 8.575 12.65C7.925 12.8833 7.23333 13 6.5 13C4.68333 13 3.14583 12.3708 1.8875 11.1125C0.629167 9.85417 0 8.31667 0 6.5C0 4.68333 0.629167 3.14583 1.8875 1.8875C3.14583 0.629167 4.68333 0 6.5 0C8.31667 0 9.85417 0.629167 11.1125 1.8875C12.3708 3.14583 13 4.68333 13 6.5C13 7.23333 12.8833 7.925 12.65 8.575C12.4167 9.225 12.1 9.8 11.7 10.3L18 16.6L16.6 18ZM6.5 11C7.75 11 8.8125 10.5625 9.6875 9.6875C10.5625 8.8125 11 7.75 11 6.5C11 5.25 10.5625 4.1875 9.6875 3.3125C8.8125 2.4375 7.75 2 6.5 2C5.25 2 4.1875 2.4375 3.3125 3.3125C2.4375 4.1875 2 5.25 2 6.5C2 7.75 2.4375 8.8125 3.3125 9.6875C4.1875 10.5625 5.25 11 6.5 11Z"
        fill={ashGray}
        styles={styles.icon}
      />
    </View>
  );

  return (
    <>
      {loading ? (
        <View style={styles.imgContainer}>
          <Image
            source={require('../../../assets/images/loader.png')}
            isContain={true}
            style={styles.img}
          />
        </View>
      ) : (
        <View style={styles.container}>
          <FlatList
            data={searchedContacts.length ? searchedContacts : contacts}
            numColumns={1}
            onEndReachedThreshold={0.5}
            onEndReached={loadMore}
            showsVerticalScrollIndicator={false}
            keyExtractor={(_, index) => index.toString()}
            renderItem={({ item }) => (
              <ContactCard
                item={item}
                backgroundColor={pureWhite}
                onPress={() => addContact(item)}
              />
            )}
            ItemSeparatorComponent={() => <Separator marginVertical={8} />}
            ListHeaderComponent={<Header />}
            ListFooterComponent={() => {
              return !searchedContacts.length ? <Spinner margin={10} /> : null;
            }}
          />
        </View>
      )}
    </>
  );
};

export default NewMembersList;
