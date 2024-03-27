import { months } from '../../constants/dates';

export const getMonthInfo = (date: Date): string => {
  const month: string = months[date.getMonth()];
  const year: number = date.getFullYear();
  return `${month}, ${year}`;
};
