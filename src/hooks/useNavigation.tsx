import { useNavigation as useNavigationNative } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParams } from '../navigation/Navigation';

const useNavigation = () =>
  useNavigationNative<NativeStackNavigationProp<RootStackParams>>();

export default useNavigation;
