import { amberGold, redCoral, vividGreen } from '../../theme';

export const progressData = (password: string) => {
  if (password.length < 8) return { color: redCoral, label: 'Bajo', value: 25 };
  if (password.length < 12)
    return { color: amberGold, label: 'Medio', value: 50 };
  return { color: vividGreen, label: 'Alto', value: 100 };
};
