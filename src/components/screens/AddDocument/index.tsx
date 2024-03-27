import React from 'react';
import ScrollableBackground from '../../templates/ScrollableBackground';
import { white } from '../../../theme';
import AddDocumentForm from '../../organisms/AddDocumentForm';
import useRoute from '../../../hooks/useRoute';

const AddDocument = () => {
  const params = useRoute('AddDocument');

  return (
    <ScrollableBackground
      bgStatusBar={white}
      backgroundColor={white}
      darkContent={true}>
      <AddDocumentForm addDocument={params?.addDocument} />
    </ScrollableBackground>
  );
};

export default AddDocument;
