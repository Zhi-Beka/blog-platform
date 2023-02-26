export interface IAuthor {
  username: string;
  image: string;
  following: boolean;
}

export interface IUser {
  author: IAuthor;
  body: string;
  createdAt: string;
  description: string;
  favorited?: boolean;
  favoritesCount: number;
  slug: string;
  tagList: string[];
  title: string;
  updatedAt?: string;
}

export interface IData {
  username: string;
  email: string;
  password: string;
  confirm: string;
  remember: boolean;
}
