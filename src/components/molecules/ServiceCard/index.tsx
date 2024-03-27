import React from 'react';
import styles from './ServiceCard.styles';
import Image from '../../atoms/Image';
import Button from '../../atoms/buttons/Button';
import { View } from 'react-native';
import Text from '../../atoms/Text';
import useNavigation from '../../../hooks/useNavigation';

interface Props {
  selectedCategory: string;
  item: any;
}

const ServiceCard = ({ selectedCategory, item }: Props) => {
  const { title, image } = item;
  const isTaxi = selectedCategory === 'taxi';
  const isMeals = selectedCategory === 'meals';
  const isPay = selectedCategory === 'pay';
  const navigation = useNavigation();

  const handleAction = () => {
    if (isTaxi) {
      navigation.navigate('ServiceDetails', {
        category: selectedCategory,
        item,
      });
    } else if (isMeals) {
      // navigation.navigate('ServiceDetails', {
      //   category: selectedCategory,
      //   item,
      // });
    } else if (isPay) {
      // navigation.navigate('ServiceDetails', {
      //   category: selectedCategory,
      //   item,
      // });
    }
  };

  return (
    <>
      <Button onPress={handleAction} style={styles.container}>
        <View style={styles.imgContainer}>
          <Image
            style={styles.img}
            source={
              image ?? (isTaxi && require('../../../assets/icons/taxi.png'))
            }
          />
        </View>

        <View style={styles.dataContainer}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Button>
    </>
  );
};

export default ServiceCard;
