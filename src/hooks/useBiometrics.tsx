import { useEffect, useState } from 'react';
import ReactNativeBiometrics, { BiometryTypes } from 'react-native-biometrics';
import useDevice from './useDevice';
import useNotification from './useNotification';
import useNavigation from './useNavigation';
import { getDataStorage, setDataStorage } from '../utils/storage/asyncStorage';
// import { useUserStore } from '../store';

const useBiometrics = () => {
  const [hasFingerprint, setHasFingerprint] = useState(false);
  const [hasFaceID, setHasFaceID] = useState(false);

  const { android } = useDevice();
  const { showToast } = useNotification();
  // const { setUser } = useUserStore();
  const navigation = useNavigation();
  const biometrics = new ReactNativeBiometrics();

  useEffect(() => {
    const getBiometrics = async () => {
      const { biometryType } = await biometrics.isSensorAvailable();
      if (android) {
        if (biometryType === BiometryTypes.Biometrics) {
          setHasFingerprint(true);
          setHasFaceID(true);
        }
      } else {
        if (biometryType === BiometryTypes.TouchID) setHasFingerprint(true);
        if (biometryType === BiometryTypes.FaceID) setHasFaceID(true);
      }
    };
    getBiometrics();
  }, []);

  const registerBiometrics = async (userId: string) => {
    // const { publicKey } = await biometrics.createKeys();
    // await sendPublicKeyToServer({ userId, publicKey });
    await setDataStorage('userId', userId);
  };

  const authenticate = async (onError: () => void) => {
    const userId = await getDataStorage('userId');
    if (!userId) {
      onError();
      showToast('Primero debes autenticarte usando tus credenciales');
      return;
    }

    const { keysExist } = await biometrics.biometricKeysExist();
    if (keysExist) {
      const timestamp = Math.round(new Date().getTime() / 1000).toString();
      const payload = `${userId}__${timestamp}`;
      const { success, signature } = await biometrics.createSignature({
        promptMessage: 'Coloca el dedo en el sensor para confirmar',
        cancelButtonText: 'Cancelar',
        payload,
      });
      console.log(signature);
      if (!success) {
        onError();
        showToast('Hubo un error al autenticar. Intenta nuevamente');
        return;
      }

      try {
        // const { user } = await verifySignatureWithServer({
        //   signature,
        //   payload,
        // });
        // setUser(user);
        navigation.navigate('Loading');
      } catch (error) {
        onError();
        showToast('Hubo un error al autenticar');
      }
    }
  };

  return {
    hasFingerprint,
    hasFaceID,
    registerBiometrics,
    authenticate,
  };
};

export default useBiometrics;
