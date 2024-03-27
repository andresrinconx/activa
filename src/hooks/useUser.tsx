import { useState } from 'react';
import useHttp from './useHttp';
import { AxiosResponse } from 'axios';

const useUser = (navigation: any) => {
  const [error, setError] = useState<any>(null);
  const [loader, setLoader] = useState(false);
  const { post } = useHttp(navigation);

  const handleSignIn = async (username: string, password: string) => {
    setLoader(true);
    let data: any = null;
    const body = {
      username: username.toLowerCase(),
      password,
    };

    const response: AxiosResponse = await post('/login/', {}, body, {});
    if (response.status === 200) {
      data = response.data;
    } else {
      setError(response.data);
    }
    setLoader(false);
    return data;
  };

  const handleSignUp = async ({
    username,
    name,
    surname,
    password,
    type,
  }: any) => {
    setLoader(true);
    let data: any = null;
    const body = {
      username: username.toLowerCase(),
      name,
      surname,
      password,
      role: type,
    };

    const response: AxiosResponse = await post('/register/', {}, body, {});
    if (response.status === 201) {
      data = response.data.data;
    } else {
      setError(response.data);
    }
    setLoader(false);
    return data;
  };

  const handleSignOut = async () => {
    setLoader(true);
    let data: any = null;
    const response: AxiosResponse = await post('/token/blacklist/', {}, {}, {});
    if (response.status === 200) {
      data = response.data;
    } else {
      setError(response.data);
    }
    setLoader(false);
    return data;
  };

  return { handleSignIn, handleSignOut, handleSignUp, loader, error };
};

export default useUser;
