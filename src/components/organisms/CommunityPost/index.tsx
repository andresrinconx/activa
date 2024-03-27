import React from 'react';
import styles from './CommunityPost.styles';
import { IPost } from '../../../types/community';
import Image from '../../atoms/Image';
import Title from '../../atoms/Title';
import Text from '../../atoms/Text';
import { View } from 'react-native';

const CommunityPost = ({ post }: { post: IPost }) => {
  const { name, article } = post;

  return (
    <>
      <Image
        style={styles.img}
        source={{
          uri: 'https://sa1s3optim.patientpop.com/assets/images/provider/photos/2394116.jpg',
        }}
      />

      <View style={styles.content}>
        <Title style={styles.title} size="base">
          {name}
        </Title>
        <Text style={styles.txtDescription}>{article}</Text>
      </View>
    </>
  );
};

export default CommunityPost;
