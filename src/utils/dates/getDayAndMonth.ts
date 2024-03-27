import { months } from '../../constants/dates';

export const getDayAndMonth = (date: Date) => {
  const day = date.getUTCDate();
  const month = months[date.getMonth()];
  return `${day} de ${month}`;
};
