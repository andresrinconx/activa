import AsyncStorage from '@react-native-async-storage/async-storage';

export const setDataStorage = async (
  key: string,
  value: string | boolean | object | number | any[] | null | undefined,
) => {
  await AsyncStorage.setItem(key, JSON.stringify(value));
};

export const getDataStorage = async (key: string) => {
  return JSON.parse((await AsyncStorage.getItem(key)) as string);
};

export const removeDataStorage = async (key: string) => {
  await AsyncStorage.removeItem(key);
};
