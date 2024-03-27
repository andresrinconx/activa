import React from 'react';
import ScrollableBackground from '../../templates/ScrollableBackground';
import { white } from '../../../theme';
import AddReminderForm from '../../organisms/AddReminderForm';
import useRoute from '../../../hooks/useRoute';

const AddReminder = () => {
  const params = useRoute('AddReminder');

  return (
    <ScrollableBackground
      bgStatusBar={white}
      backgroundColor={white}
      darkContent={true}>
      <AddReminderForm addReminder={params.addReminder} />
    </ScrollableBackground>
  );
};

export default AddReminder;
