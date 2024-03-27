import React, { useState } from 'react';
import { IContact } from '../../../types/contact';
import ContactCard from '../../molecules/ContactCard';
import Modal from '../../atoms/Modal';
import ContactInfo from '../ContactInfo';

interface Props {
  item: IContact;
}

const InteractiveContactCard = ({ item }: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <ContactCard item={item} onPress={() => setIsModalOpen(true)} />

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        paddingHorizontal={10}>
        <ContactInfo onClose={() => setIsModalOpen(false)} item={item} />
      </Modal>
    </>
  );
};

export default InteractiveContactCard;
