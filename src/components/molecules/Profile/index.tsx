import React from 'react';
import styles from './Profile.styles';
import { ImageSourcePropType, View } from 'react-native';
import Image from '../../atoms/Image';
import Text from '../../atoms/Text';
import Punctuation from '../../atoms/Punctuation';

interface Props {
  logo?: ImageSourcePropType;
  by: string;
  stars: number;
}

const Profile = ({ logo, by, stars }: Props) => {
  return (
    <View style={styles.container}>
      {logo && <Image source={logo} style={styles.img} />}

      <View style={styles.data}>
        <Text style={styles.by}>{by}</Text>
        <Punctuation stars={stars} />
      </View>
    </View>
  );
};

export default Profile;
