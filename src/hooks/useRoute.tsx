import {
  RouteProp,
  useRoute as useRouteNavigation,
} from '@react-navigation/native';
import { RootStackParams } from '../navigation/Navigation';

type ScreenParams<T extends keyof RootStackParams> = RootStackParams[T];

const useRoute = <T extends keyof RootStackParams>(ScreenName: T) =>
  useRouteNavigation<RouteProp<RootStackParams, typeof ScreenName>>()
    .params as ScreenParams<T>;

export default useRoute;
