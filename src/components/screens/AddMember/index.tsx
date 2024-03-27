import React from 'react';
import ScrollableBackground from '../../templates/ScrollableBackground';
import { white } from '../../../theme';
import AddMemberForm from '../../organisms/AddMemberForm';

const AddMember = () => {
  return (
    <ScrollableBackground
      bgStatusBar={white}
      backgroundColor={white}
      darkContent={true}>
      <AddMemberForm />
    </ScrollableBackground>
  );
};

export default AddMember;
