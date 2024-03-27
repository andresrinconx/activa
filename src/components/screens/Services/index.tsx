import React from 'react';
import { skyBlue } from '../../../theme';
import SectionHeader from '../../molecules/SectionHeader';
import ServicesList from '../../molecules/ServicesList';
import Background from '../../templates/Background';
import AdvertiseServiceButton from '../../molecules/AdvertiseServiceButton';
import { useUserStore } from '../../../store';
import HelpFAB from '../../atoms/fabs/HelpFAB';

const Services = () => {
  const { isAdvertiser } = useUserStore();

  return (
    <Background bgStatusBar={skyBlue} darkContent={true} paddingHorizontal={0}>
      <SectionHeader
        title="Servicios"
        backgroundColor={skyBlue}
        ActionButton={isAdvertiser && <AdvertiseServiceButton h={42} w="45%" />}
      />
      <ServicesList />
      <HelpFAB screen="Services" />
    </Background>
  );
};

export default Services;
