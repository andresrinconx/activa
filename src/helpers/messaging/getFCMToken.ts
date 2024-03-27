// import messaging from '@react-native-firebase/messaging';
import {
  getDataStorage,
  // setDataStorage,
} from '../../utils/storage/asyncStorage';

export const getFCMToken = async () => {
  const fcmToken = await getDataStorage('fcmToken');
  // if (!fcmToken) {
  //   const fcmToken = await messaging().getToken();
  //   if (fcmToken) {
  //     await setDataStorage('fcmToken', fcmToken);
  //     return fcmToken;
  //   }
  // } else {
  //   return fcmToken;
  // }
};
