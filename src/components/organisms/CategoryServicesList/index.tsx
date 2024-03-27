import React, { useEffect, useState } from 'react';
import styles from './CategoryServicesList.styles';
import { FlatList, View } from 'react-native';
import { IServiceTag } from '../../../types/services';
import ServiceCard from '../../molecules/ServiceCard';
import Spinner from '../../atoms/Spinner';
import Text from '../../atoms/Text';
import { white } from '../../../theme';
import useHttp from '../../../hooks/useHttp';
import useNavigation from '../../../hooks/useNavigation';

interface Props {
  selectedCategory: {
    name: string;
    title: string;
  };
  categories: IServiceTag[];
}

const CategoryServicesList = ({ selectedCategory }: Props) => {
  // const [category, setCategory] = useState(selectedCategory);
  const [services, setServices] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const navigation = useNavigation();
  const { get } = useHttp(navigation);

  useEffect(() => {
    const getData = async () => {
      const res = await get(`/service/${selectedCategory.name}`, {}, {});
      setServices(res.data.data);
      setIsLoading(false);
    };
    getData();
  }, []);

  return (
    <View style={styles.container}>
      {isLoading ? (
        <Spinner color="white" />
      ) : services?.length ? (
        <FlatList
          data={services}
          numColumns={1}
          contentContainerStyle={styles.servicesContainer}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => {
            return (
              <ServiceCard
                selectedCategory={selectedCategory.name}
                item={item}
              />
            );
          }}
        />
      ) : (
        <Text color={white} isBold={true} size={18} textAlign="center">
          No se encontraron registros
        </Text>
      )}
    </View>
  );
};

export default CategoryServicesList;
