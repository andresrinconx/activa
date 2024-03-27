import { months, shortWeekdays } from '../../constants/dates';

export const getDayInfo = (date: Date): string => {
  const dayOfWeek: string = shortWeekdays[date.getDay()];
  const day: number = date.getDate();
  const month: string = months[date.getMonth()];
  return `${dayOfWeek}. ${day < 10 ? '0' + day : day} ${month}`;
};
