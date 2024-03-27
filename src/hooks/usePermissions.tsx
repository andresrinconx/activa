// eslint-disable-next-line react-native/split-platform-components
import { PermissionsAndroid } from 'react-native';
// import messaging from '@react-native-firebase/messaging';
import useDevice from './useDevice';

const usePermissions = () => {
  const { android } = useDevice();

  const requestCameraPermission = async () => {
    if (android) {
      const check: boolean = await PermissionsAndroid.check(
        PermissionsAndroid.PERMISSIONS.CAMERA,
      );
      if (!check) {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.CAMERA,
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          return true;
        } else {
          return false;
        }
      } else {
        return check;
      }
    } else {
      return true;
    }
  };

  const requestMessagingPermission = async () => {
    if (android) {
      const check: boolean = await PermissionsAndroid.check(
        PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
      );
      if (!check) {
        PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
        );
      }
    }
    // await messaging().requestPermission();
  };

  const requestContactsPermission = async () => {
    if (android) {
      const check: boolean = await PermissionsAndroid.check(
        PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
      );
      if (!check) {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          return true;
        } else {
          return false;
        }
      } else {
        return check;
      }
    } else {
      return true;
    }
  };

  const requestAudioPermission = async () => {
    if (android) {
      const check: boolean = await PermissionsAndroid.check(
        PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
      );
      if (!check) {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          return true;
        } else {
          return false;
        }
      } else {
        return check;
      }
    } else {
      return true;
    }
  };

  return {
    requestCameraPermission,
    requestMessagingPermission,
    requestContactsPermission,
    requestAudioPermission,
  };
};

export default usePermissions;
