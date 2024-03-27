export type IReminderItem = {
  time: string;
  items?: IReminderEvent[];
};

export type IReminderEvent = {
  id: string;
  description: string;
};
