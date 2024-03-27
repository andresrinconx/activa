import React from 'react';
import Background from '../../templates/Background';
import SectionHeader from '../../molecules/SectionHeader';
import HomeFAB from '../../atoms/fabs/HomeFAB';
import CommunityPostsList from '../../organisms/CommunityPostsList';
import { softLavender } from '../../../theme';

const Community = () => {
  return (
    <Background bgStatusBar={softLavender} paddingHorizontal={0}>
      <SectionHeader
        title="Comunidad"
        backgroundColor={softLavender}
        textWhite={true}
      />
      <CommunityPostsList />
      <HomeFAB />
    </Background>
  );
};

export default Community;
