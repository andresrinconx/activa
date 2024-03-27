import React, { useEffect, useState } from 'react';
import styles from './CommunityPostsList.styles';
import { IPost, ITopic } from '../../../types/community';
import { FlatList, View } from 'react-native';
import HorizontalSelector from '../../molecules/HorizontalSelector';
import HorizontalCommunityCard from '../../molecules/HorizontalCommunityCard';
import useHttp from '../../../hooks/useHttp';
import useNavigation from '../../../hooks/useNavigation';
import Spinner from '../../atoms/Spinner';
import useNotification from '../../../hooks/useNotification';
import Text from '../../atoms/Text';
import { white } from '../../../theme';

const CommunityPostsList = () => {
  const [topics, setTopics] = useState<ITopic[]>([]);
  const [selectedTopic, setSelectedTopic] = useState('');
  const [posts, setPosts] = useState<IPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const navigation = useNavigation();
  const { showToast } = useNotification();
  const { get } = useHttp(navigation);

  const getPosts = async (topic: string) => {
    try {
      const res = await get(
        `/community/`,
        {
          tag: topic,
        },
        {},
      );
      setPosts(res.data.data);
      setIsLoading(false);
    } catch (error) {
      showToast('Error al obtener los posts');
    }
  };

  const getTopics = async () => {
    try {
      const res = await get('/community/tags', {}, {});
      setSelectedTopic(res.data.data[0].name);
      setTopics(res.data.data);
      setIsLoading(false);
    } catch (error) {
      showToast('Error al obtener los temas');
    }
  };

  useEffect(() => {
    getTopics();
  }, []);

  useEffect(() => {
    getPosts(selectedTopic);
  }, [selectedTopic]);

  return (
    <View style={styles.container}>
      {isLoading ? (
        <Spinner color="white" />
      ) : (
        <>
          <HorizontalSelector
            items={topics.map(topic => topic.name)}
            selectedItem={selectedTopic}
            setSelectedItem={setSelectedTopic}
          />

          {posts?.length ? (
            <FlatList
              data={posts}
              numColumns={1}
              contentContainerStyle={styles.postsContainer}
              showsVerticalScrollIndicator={false}
              renderItem={({ item, index }) => (
                <HorizontalCommunityCard item={item} horizontal={index !== 0} />
              )}
            />
          ) : (
            <Text color={white} isBold={true} size={18} textAlign="center">
              No hay posts disponibles en este tema
            </Text>
          )}
        </>
      )}
    </View>
  );
};

export default CommunityPostsList;
