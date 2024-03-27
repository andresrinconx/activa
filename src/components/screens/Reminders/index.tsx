import React from 'react';
import SectionHeader from '../../molecules/SectionHeader';
import { goldenYellow } from '../../../theme';
import Background from '../../templates/Background';
import HomeFAB from '../../atoms/fabs/HomeFAB';
import DayReminders from '../../organisms/DayReminders';
import useNavigation from '../../../hooks/useNavigation';
import AddButton from '../../molecules/AddButton';
import useReminders from '../../../hooks/useReminders';

const Reminders = () => {
  const navigation = useNavigation();
  const { date, reminders, clickBack, clickForward, addReminder } =
    useReminders();

  return (
    <Background
      bgStatusBar={goldenYellow}
      darkContent={true}
      paddingHorizontal={0}>
      <SectionHeader
        title="Recordatorios"
        backgroundColor={goldenYellow}
        ActionButton={
          <AddButton
            onAdd={() => navigation.navigate('AddReminder', { addReminder })}
          />
        }
        alertText="Recordatorio añadido exitoasmente"
      />
      <DayReminders
        date={date}
        reminders={reminders}
        clickBack={clickBack}
        clickForward={clickForward}
      />
      <HomeFAB />
    </Background>
  );
};

export default Reminders;
