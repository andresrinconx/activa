export const getFormattedTime = (date: Date): string => {
  const hours = date.getHours() % 12 || 12;
  const minutes = date.getMinutes();
  const ampm = date.getHours() < 12 ? 'AM' : 'PM';

  return `${hours}:${minutes < 10 ? '0' : ''}${minutes} ${ampm}`;
};

export const convertHourToMilitaryFormat = (hourString: string): string => {
  const arbitraryDate = `2024-01-01T${hourString}`;
  let date = new Date(arbitraryDate);
  if (date.getMinutes() >= 30) {
    date = new Date(date.getTime() + (60 - date.getMinutes()) * 60000);
  }
  date.setMinutes(0);
  const hours = date.getHours();
  return `${hours.toString().padStart(2, '0')}:00`;
};

export const getFormattedDate = (date: Date): string => {
  const day = date.getDate();
  const month = date.getMonth() + 1; // getMonth() devuelve un valor entre 0 (enero) y 11 (diciembre)
  const year = date.getFullYear();

  return `${day < 10 ? '0' + day : day}/${month < 10 ? '0' + month : month}/${year}`;
};
