import React, { useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../components/screens/Login';
import Register from '../components/screens/Register';
import Home from '../components/screens/Home';
import Reminders from '../components/screens/Reminders';
import AddReminder from '../components/screens/AddReminder';
import Services from '../components/screens/Services';
import CategoryServices from '../components/screens/CategoryServices';
import Community from '../components/screens/Community';
import MyHealth from '../components/screens/MyHealth';
import AddDocument from '../components/screens/AddDocument';
import SearchEngine from '../components/screens/SearchEngine';
import Loading from '../components/screens/Loading';
import Config from '../components/screens/Config';
import AdvertiseService from '../components/screens/AdvertiseService';
import useNavigation from '../hooks/useNavigation';
import { IServiceMainCategory, IServiceTag } from '../types/services';
import { getDataStorage } from '../utils/storage/asyncStorage';
import ServiceDetails from '../components/screens/ServiceDetails';
import AddMember from '../components/screens/AddMember';

export type RootStackParams = {
  Login: undefined;
  Register: undefined;
  Home: undefined;
  Reminders: undefined;
  AddReminder: { addReminder: (data: any) => Promise<any> };
  Services: undefined;
  CategoryServices: {
    service: IServiceMainCategory;
    categories: IServiceTag[];
  };
  ServiceDetails: { category: string; item: any };
  Community: undefined;
  MyHealth: undefined;
  AddDocument: { addDocument: (data: any) => Promise<any> };
  SearchEngine: { searchTerm: string };
  Loading: undefined;
  Config: undefined;
  AdvertiseService: undefined;
  AddMember: undefined;
};

const Stack = createNativeStackNavigator<RootStackParams>();

const Navigation = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const getData = async () => {
      const user = await getDataStorage('user-storage');
      if (user.state.token) {
        navigation.reset({
          index: 0,
          routes: [{ name: 'Home' }],
        });
      }
    };
    getData();
  }, []);

  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{ animation: 'slide_from_right' }}
      />
      <Stack.Screen
        name="Loading"
        component={Loading}
        options={{ animation: 'slide_from_right' }}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ animation: 'none' }}
      />
      <Stack.Screen
        name="Config"
        component={Config}
        options={{ animation: 'fade_from_bottom' }}
      />
      <Stack.Screen
        name="SearchEngine"
        component={SearchEngine}
        options={{ animation: 'none' }}
      />
      <Stack.Screen
        name="Reminders"
        component={Reminders}
        options={{ animation: 'fade_from_bottom' }}
      />
      <Stack.Screen
        name="AddReminder"
        component={AddReminder}
        options={{ animation: 'fade_from_bottom' }}
      />
      <Stack.Screen
        name="Services"
        component={Services}
        options={{ animation: 'fade_from_bottom' }}
      />
      <Stack.Screen
        name="CategoryServices"
        component={CategoryServices}
        options={{ animation: 'fade_from_bottom' }}
      />
      <Stack.Screen
        name="ServiceDetails"
        component={ServiceDetails}
        options={{ animation: 'slide_from_right' }}
      />
      <Stack.Screen
        name="AdvertiseService"
        component={AdvertiseService}
        options={{ animation: 'fade_from_bottom' }}
      />
      <Stack.Screen
        name="Community"
        component={Community}
        options={{ animation: 'fade_from_bottom' }}
      />
      <Stack.Screen
        name="MyHealth"
        component={MyHealth}
        options={{ animation: 'fade_from_bottom' }}
      />
      <Stack.Screen
        name="AddDocument"
        component={AddDocument}
        options={{ animation: 'fade_from_bottom' }}
      />
      <Stack.Screen
        name="AddMember"
        component={AddMember}
        options={{ animation: 'fade_from_bottom' }}
      />
    </Stack.Navigator>
  );
};

export default Navigation;
