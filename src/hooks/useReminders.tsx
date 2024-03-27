import { useEffect, useState } from 'react';
import useNavigation from './useNavigation';
import { IReminderItem } from '../types/reminders';
import { hourFormat } from '../utils/dates/hourFormat';
import { useUserStore } from '../store';
import useHttp from './useHttp';
import { AxiosResponse } from 'axios';

const useReminders = () => {
  const [date, setDate] = useState(new Date());
  const [allReminders, setAllReminders] = useState<IReminderItem[]>([]);
  const [reminders, setReminders] = useState<IReminderItem[]>(
    Array.from({ length: 24 }, (_, index) => {
      const hour = index.toString().padStart(2, '0');
      return { time: `${hour}:00` };
    }),
  );
  const [error, setError] = useState<any>(null);
  const [loader, setLoader] = useState(false);

  const navigation = useNavigation();
  const { post, get } = useHttp(navigation);
  const { user } = useUserStore();

  const fetchData = async () => {
    setLoader(true);
    try {
      const response: AxiosResponse = await get('/reminders/', {}, {});
      setAllReminders(response?.data?.data);
      setLoader(false);
    } catch (error) {
      setLoader(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (allReminders) {
      const organizedData = allReminders?.filter(
        (item: any) => item.day === date.toISOString().slice(0, 10),
      );
      const updatedReminders = reminders.map(reminder => {
        const matchingItems = organizedData.filter(
          (dataItem: any) =>
            dataItem.hour_start.slice(0, 2) === reminder.time.slice(0, 2),
        );
        const items = matchingItems.map((matchingItem: any) => ({
          id: matchingItem.id,
          description: matchingItem.description,
        }));
        return { ...reminder, items };
      });
      setReminders(updatedReminders);
    }
  }, [allReminders, date]);

  const addReminder = async ({ date, description, from, to }: any) => {
    setLoader(true);
    let data: any = null;

    const body = {
      description,
      hour_start: hourFormat(from),
      hour_end: hourFormat(to),
      day: date.toISOString().split('T')[0],
      user: user.id,
    };

    const response: AxiosResponse = await post('/reminders/', {}, body, {});
    if (response.status === 201) {
      data = response.data;
      fetchData();
    } else {
      setError(response.data);
    }
    setLoader(false);
    return data;
  };

  const clickBack = () => {
    setDate(prevDate => {
      const newDate = new Date(prevDate);
      newDate.setDate(newDate.getDate() - 1);
      return newDate;
    });
  };

  const clickForward = () => {
    setDate(prevDate => {
      const newDate = new Date(prevDate);
      newDate.setDate(newDate.getDate() + 1);
      return newDate;
    });
  };

  return {
    date,
    reminders,
    loader,
    error,
    addReminder,
    clickBack,
    clickForward,
  };
};

export default useReminders;
