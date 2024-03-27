import React from 'react';
import { fieryRed } from '../../../theme';
import useNavigation from '../../../hooks/useNavigation';
import Background from '../../templates/Background';
import SectionHeader from '../../molecules/SectionHeader';
import HomeFAB from '../../atoms/fabs/HomeFAB';
import MonthlyDocuments from '../../organisms/MonthlyDocuments';
import AddButton from '../../molecules/AddButton';
import useMyHealth from '../../../hooks/useMyHealth';

const MyHealth = () => {
  const navigation = useNavigation();
  const { date, documents, loader, addDocument, clickBack, clickForward } =
    useMyHealth();

  return (
    <Background bgStatusBar={fieryRed} darkContent={true} paddingHorizontal={0}>
      <SectionHeader
        title="Mi salud"
        backgroundColor={fieryRed}
        ActionButton={
          <AddButton
            onAdd={() => navigation.navigate('AddDocument', { addDocument })}
          />
        }
        alertText="¡Documento añadido exitosamente!"
      />
      <MonthlyDocuments
        isLoading={loader}
        date={date}
        documents={documents}
        clickBack={clickBack}
        clickForward={clickForward}
      />
      <HomeFAB />
    </Background>
  );
};

export default MyHealth;
