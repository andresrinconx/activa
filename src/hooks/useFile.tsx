import { useState } from 'react';
import {
  ImagePickerResponse,
  launchCamera,
  launchImageLibrary,
} from 'react-native-image-picker';
import DocumentPicker, {
  DocumentPickerResponse,
} from 'react-native-document-picker';
import usePermissions from './usePermissions';
import useDevice from './useDevice';

const useFile = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [file, setFile] = useState<any>(null);
  const [tempUri, setTempUri] = useState<string | undefined>('');

  const { ios } = useDevice();
  const { requestCameraPermission } = usePermissions();

  const openCamera = async () => {
    setIsLoading(true);
    const hasPermission = await requestCameraPermission();

    if (hasPermission) {
      const result: ImagePickerResponse = await launchCamera({
        mediaType: 'photo',
        quality: 0.5,
      });
      if (result.assets) {
        const { type, fileName: name, uri } = result.assets[0];
        setFile({ uri, type, name });
        setTempUri(uri);
      }
      setIsLoading(false);
    }
  };

  const openGallery = async () => {
    setIsLoading(true);

    const result: ImagePickerResponse = await launchImageLibrary({
      mediaType: 'photo',
      quality: 0.5,
    });
    if (result.assets) {
      const { type, fileName: name, uri } = result.assets[0];
      setFile({ uri, type, name });
      setTempUri(uri);
    }
    setIsLoading(false);
  };

  const openSelectFile = async () => {
    setIsLoading(true);
    try {
      const result: DocumentPickerResponse[] = await DocumentPicker.pick({
        allowMultiSelection: false,
        copyTo: 'cachesDirectory',
      });
      if (result) {
        const uri = ios
          ? decodeURIComponent(result[0].fileCopyUri as string)
          : (result[0].fileCopyUri as string);
        const { type, name } = result[0];
        setFile({ uri, type, name });
        setTempUri(uri);
      }

      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const cleanData = () => {
    setFile(null);
  };

  return {
    file,
    tempUri,
    isLoading,
    openCamera,
    openGallery,
    openSelectFile,
    cleanData,
  };
};

export default useFile;
