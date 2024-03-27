import { useWindowDimensions, Platform } from 'react-native';

const useDevice = () => {
  const { height, width } = useWindowDimensions();
  const md = width >= 758;
  const ios = Platform.OS === 'ios';
  const android = Platform.OS === 'android';

  return {
    width,
    height,
    md,
    ios,
    android,
  };
};

export default useDevice;
