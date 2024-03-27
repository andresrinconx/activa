import { AxiosResponse } from 'axios';
import axiosInstance from '../services/config/axios';
import { useContext } from 'react';
import { NotificationContext } from '../contexts/NotificationContext';

const useHttp = (navigation: any) => {
  const { showToast } = useContext(NotificationContext);

  const errorManage = async (error: any) => {
    let message = '';
    if (error.message === 'timeout of 10000ms exceeded') {
      showToast('timeout_of_10000');
      return error;
    }
    const resback: any = error.response;
    if (resback?.data.message === 'Error: Refresh token is expired') {
      const response: AxiosResponse = await post(
        '/auth/token/expire',
        {},
        {},
        {},
      );
      if (response.status === 200) {
        navigation.navigate('StackIdentification', {
          screen: 'Home',
          params: {
            phoneUser: '',
          },
        });
      }
    }

    if (
      error.response.status === 400 &&
      resback?.data.message !== 'Error: Refresh token is expired'
    ) {
      message = 'code_not_found';
    }

    if (error.response.status === 500) {
      message = 'Error con servidor';
    }
    message = message ? message : error.response?.data.message;
    showToast(message, 'error');

    return error.response;
  };

  const get = async (endpoint: string, params: any, headers?: any) => {
    try {
      const response: AxiosResponse = await axiosInstance.get(endpoint, {
        params: params ? params : {},
        headers,
      });
      return response;
    } catch (error: any) {
      return errorManage(error);
    }
  };

  const post = async (
    endpoint: string,
    params: any,
    body: any = {},
    headers: any = {},
    onProgress?: (percentage: number) => void,
  ) => {
    try {
      const response: AxiosResponse = await axiosInstance.post(endpoint, body, {
        headers,
        params: params ? params : {},
        onUploadProgress: (progressEvent: any) => {
          if (onProgress && progressEvent.lengthComputable) {
            onProgress(
              Math.round((progressEvent.loaded * 100) / progressEvent.total),
            );
          } else if (onProgress && progressEvent.total === 0) {
            const totalLength =
              progressEvent.target?.getResponseHeader('content-length') ||
              progressEvent.target?.getResponseHeader(
                'x-decompressed-content-length',
              );
            if (totalLength) {
              onProgress(
                Math.round(
                  (progressEvent.loaded * 100) / parseInt(totalLength),
                ),
              );
            }
          }
        },
      });
      return response;
    } catch (error: any) {
      return errorManage(error);
    }
  };

  const put = async (
    endpoint: string,
    params: any,
    body: any = {},
    onProgress?: (percentage: number) => void,
  ) => {
    try {
      const response: AxiosResponse = await axiosInstance.put(endpoint, body, {
        params: params ? params : {},
        onUploadProgress: (progressEvent: any) => {
          if (onProgress && progressEvent.lengthComputable) {
            onProgress(
              Math.round((progressEvent.loaded * 100) / progressEvent.total),
            );
          } else if (onProgress && progressEvent.total === 0) {
            const totalLength =
              progressEvent.target?.getResponseHeader('content-length') ||
              progressEvent.target?.getResponseHeader(
                'x-decompressed-content-length',
              );
            if (totalLength) {
              onProgress(
                Math.round(
                  (progressEvent.loaded * 100) / parseInt(totalLength),
                ),
              );
            }
          }
        },
      });
      return response;
    } catch (error: any) {
      return errorManage(error);
    }
  };

  const deleteE = async (endpoint: string, params: any) => {
    try {
      const response: AxiosResponse = await axiosInstance.delete(endpoint, {
        params: params ? params : {},
      });
      return response;
    } catch (error: any) {
      return errorManage(error);
    }
  };

  return { get, post, put, deleteE };
};

export default useHttp;
