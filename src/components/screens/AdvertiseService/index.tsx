import React from 'react';
import ScrollableBackground from '../../templates/ScrollableBackground';
import { white } from '../../../theme';
import AdvertiseServiceForm from '../../organisms/AdvertiseServiceForm';

const AdvertiseService = () => {
  return (
    <ScrollableBackground
      bgStatusBar={white}
      backgroundColor={white}
      darkContent={true}>
      <AdvertiseServiceForm />
    </ScrollableBackground>
  );
};

export default AdvertiseService;
