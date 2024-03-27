export interface IPost {
  id: number;
  tag: ITopic[];
  name: string;
  article: string;
  img: string;
  created_at: string;
  updated_at: string;
  user: number;
}

export type ITopic = {
  id: string;
  name: string;
};
