export type IService = {
  id: number;
  tag: IServiceTag[];
  img: string;
  title: string;
  description: string;
  price: string;
  created_at: string;
  updated_at: string;
  user: number;
};

export type IServiceTag = {
  id: string;
  name: string;
};

export interface IServiceMainCategory extends IServiceTag {
  title: string;
}

export type ITaxi = {
  id: number;
  title: string;
  origin: string;
  destination: string;
  price: string;
  icon: string;
};
