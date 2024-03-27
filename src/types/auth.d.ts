export type IAuthUserType = 'P.A.M' | 'Entorno' | 'Anunciante';

export type IAuth = {
  userType?: IAuthUserType | '';
  name?: string;
  PAMs?: string[];
  currentPAM?: string;
};

export type IRegisterForm = {
  isModalOpen: boolean;
  selectedUserType: IAuthUserType | '';
  phone: string;
  environmentPAM: string;
  name: string;
  username: string;
  fatherSurname: string;
  motherMaidenName: string;
  password: string;
  error: string;
};
