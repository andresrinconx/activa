import React from 'react';
import styles from './Config.styles';
import Background from '../../templates/Background';
import { stoneGray } from '../../../theme';
import StaticSheet from '../../atoms/StaticSheet';
import SectionHeader from '../../molecules/SectionHeader';
import FontSelector from '../../molecules/FontSelector';
import ThemeSelector from '../../molecules/ThemeSelector';
import VolumeSelector from '../../molecules/VolumeSelector';
import EnvironmentPermissions from '../../organisms/EnvironmentPermissions';
import { ScrollView, View } from 'react-native';
import Divider from '../../atoms/Divider';
import LogOut from '../../molecules/LogOut';

const Config = () => {
  return (
    <Background
      bgStatusBar={stoneGray}
      darkContent={true}
      paddingHorizontal={0}>
      <SectionHeader title="Configuración" backgroundColor={stoneGray} />
      <StaticSheet showTopBar={false} marginTop={30}>
        <ScrollView>
          <FontSelector />
          <ThemeSelector />
          <VolumeSelector />
          <EnvironmentPermissions />
          <View style={styles.logOutContainer}>
            <Divider marginVertical={10} />
            <LogOut />
          </View>
        </ScrollView>
      </StaticSheet>
    </Background>
  );
};

export default Config;
