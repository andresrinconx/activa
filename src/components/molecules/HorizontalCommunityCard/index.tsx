import React, { useState } from 'react';
import styles from './HorizontalCommunityCard.styles';
import Image from '../../atoms/Image';
import Button from '../../atoms/buttons/Button';
import { View } from 'react-native';
import Text from '../../atoms/Text';
import { IPost } from '../../../types/community';
import Sheet from '../../atoms/Sheet';
import CommunityPost from '../../organisms/CommunityPost';

interface Props {
  item: IPost;
  horizontal?: boolean;
}

const HorizontalCommunityCard = ({ item, horizontal = true }: Props) => {
  const [isPostOpen, setIsPostOpen] = useState(false);

  const { name } = item;

  return (
    <>
      {!horizontal ? (
        <Button
          onPress={() => setIsPostOpen(true)}
          style={styles.verticalContainer}>
          <Image
            style={styles.imgVertical}
            source={{
              uri: 'https://sa1s3optim.patientpop.com/assets/images/provider/photos/2394116.jpg',
            }}
          />

          <View style={styles.verticalDataContainer}>
            <Text style={styles.title} numberOfLines={2}>
              {name}
            </Text>
          </View>
        </Button>
      ) : (
        <Button onPress={() => setIsPostOpen(true)} style={styles.container}>
          <Image
            style={styles.img}
            source={{
              uri: 'https://sa1s3optim.patientpop.com/assets/images/provider/photos/2394116.jpg',
            }}
          />

          <View style={styles.dataContainer}>
            <Text style={styles.title}>{name}</Text>
          </View>
        </Button>
      )}

      <Sheet isOpen={isPostOpen} setIsOpen={setIsPostOpen} height="89%">
        <CommunityPost post={item} />
      </Sheet>
    </>
  );
};

export default HorizontalCommunityCard;
