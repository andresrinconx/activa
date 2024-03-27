import { ImageSourcePropType } from 'react-native';

export type IContact = {
  name: string;
  relation: string;
  profilePhoto: ImageSourcePropType;
  phone: string;
};
