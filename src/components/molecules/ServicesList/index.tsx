import React, { useEffect, useState } from 'react';
import styles from './ServicesList.styles';
import { FlatList, View } from 'react-native';
import Text from '../../atoms/Text';
import Button from '../../atoms/buttons/Button';
import useNavigation from '../../../hooks/useNavigation';
import Icon from '../../atoms/Icon';
import { black } from '../../../theme';
import { IServiceMainCategory } from '../../../types/services';
import Spinner from '../../atoms/Spinner';
import { mainCategories } from '../../../constants/services';
// import useHttp from '../../../hooks/useHttp';
// import useNotification from '../../../hooks/useNotification';

const ServicesList = () => {
  const [categories, setCategories] = useState<IServiceMainCategory[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const navigation = useNavigation();
  // const { showToast } = useNotification();
  // const { get } = useHttp(navigation);

  // useEffect(() => {
  //   const getCategories = async () => {
  //     try {
  //       const res = await get('/service/tags', {}, {});
  //       setCategories(res.data.data);
  //       setIsLoading(false);
  //     } catch (error) {
  //       showToast('Error al obtener los servicios');
  //     }
  //   };
  //   getCategories();
  // }, []);

  useEffect(() => {
    setCategories(mainCategories);
    setIsLoading(false);
  }, []);

  return (
    <View style={styles.container}>
      {isLoading ? (
        <Spinner color="white" />
      ) : (
        <FlatList
          data={categories}
          contentContainerStyle={styles.listContainer}
          numColumns={1}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => {
            return (
              <Button
                onPress={() =>
                  navigation.navigate('CategoryServices', {
                    service: item,
                    categories,
                  })
                }
                style={styles.btnItem}>
                <Text style={styles.txtItem}>{item.title}</Text>
                <Icon
                  width="7"
                  height="12"
                  viewBox="0 0 7 12"
                  d="M4.5779 5.9998L0.859828 2.0998C0.685047 1.91647 0.597656 1.68314 0.597656 1.3998C0.597656 1.11647 0.685047 0.883138 0.859828 0.699805C1.03461 0.516471 1.25706 0.424805 1.52718 0.424805C1.79729 0.424805 2.01974 0.516471 2.19452 0.699805L6.57995 5.2998C6.67528 5.3998 6.74281 5.50814 6.78253 5.6248C6.82226 5.74147 6.84212 5.86647 6.84212 5.9998C6.84212 6.13314 6.82226 6.25814 6.78253 6.3748C6.74281 6.49147 6.67528 6.5998 6.57995 6.6998L2.19452 11.2998C2.01974 11.4831 1.79729 11.5748 1.52718 11.5748C1.25706 11.5748 1.03461 11.4831 0.859828 11.2998C0.685047 11.1165 0.597656 10.8831 0.597656 10.5998C0.597656 10.3165 0.685047 10.0831 0.859828 9.89981L4.5779 5.9998Z"
                  fill={black}
                />
              </Button>
            );
          }}
        />
      )}
    </View>
  );
};

export default ServicesList;
