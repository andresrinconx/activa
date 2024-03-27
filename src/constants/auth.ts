import { IAuthUserType } from '../types/auth';

interface UserType {
  id: IAuthUserType;
  name: string;
}

export const userTypes: UserType[] = [
  { id: 'P.A.M', name: 'P.A.M.' },
  { id: 'Entorno', name: 'Entorno' },
];
