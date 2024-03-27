import { useEffect, useState } from 'react';
import useNotification from './useNotification';
import useHttp from './useHttp';
import { useNavigation } from '@react-navigation/native';
import { AxiosResponse } from 'axios';
import { IDocument } from '../types/health';

const useMyHealth = () => {
  const [date, setDate] = useState(new Date());
  const [allDocuments, setAllDocuments] = useState<IDocument[]>([]);
  const [documents, setDocuments] = useState<IDocument[]>([]);
  const [error, setError] = useState<any>(null);
  const [loader, setLoader] = useState(true);

  const navigation = useNavigation();
  const { showToast } = useNotification();
  const { get, post } = useHttp(navigation);

  const getDocuments = async () => {
    try {
      const res = await get('/healths/', {}, {});
      setAllDocuments(res.data.data);
      setLoader(false);
    } catch (error) {
      showToast('Error al obtener los documentos');
    }
  };

  useEffect(() => {
    getDocuments();
  }, [date]);

  useEffect(() => {
    if (allDocuments) {
      const currentYear = date.getFullYear();
      const currentMonth = date.getMonth() + 1;
      const monthlyDocuments = allDocuments.filter(item => {
        const itemDate = new Date(item.day);
        const documentYear = itemDate.getFullYear();
        const documentMonth = itemDate.getMonth() + 1;
        return documentYear === currentYear && documentMonth === currentMonth;
      });
      setDocuments(monthlyDocuments);
    }
  }, [allDocuments, date]);

  const addDocument = async ({ name, document, date }: any) => {
    let data: any = null;

    const body = new FormData();
    body.append('name', name);
    body.append('document', document);
    body.append('day', date.toISOString().split('T')[0]);

    const response: AxiosResponse = await post('/healths/', {}, body, {
      'Content-Type': 'multipart/form-data',
    });
    if (response.status === 201) {
      data = response.data;
      getDocuments();
    } else {
      setError(response.data);
    }
    return data;
  };

  const clickBack = () => {
    setDate(prevDate => {
      const newDate = new Date(prevDate);
      newDate.setMonth(newDate.getMonth() - 1);
      return newDate;
    });
  };

  const clickForward = () => {
    setDate(prevDate => {
      const newDate = new Date(prevDate);
      newDate.setMonth(newDate.getMonth() + 1);
      return newDate;
    });
  };

  return {
    date,
    documents,
    error,
    loader,
    addDocument,
    clickBack,
    clickForward,
  };
};

export default useMyHealth;
