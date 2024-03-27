import React from 'react';
import Background from '../../templates/Background';
import SectionHeader from '../../molecules/SectionHeader';
import { skyBlue } from '../../../theme';
import HelpFAB from '../../atoms/fabs/HelpFAB';
import CategoryServicesList from '../../organisms/CategoryServicesList';
import useRoute from '../../../hooks/useRoute';

const CategoryServices = () => {
  const params = useRoute('CategoryServices');

  return (
    <Background bgStatusBar={skyBlue} darkContent={true} paddingHorizontal={0}>
      <SectionHeader
        title={params?.service?.title}
        backgroundColor={skyBlue}
        alertText="¡Anuncio publicado exitosamente!"
      />
      <CategoryServicesList
        categories={params?.categories}
        selectedCategory={params?.service}
      />
      <HelpFAB screen={params?.service?.name} />
    </Background>
  );
};

export default CategoryServices;
