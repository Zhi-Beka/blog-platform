export interface IAuthor {
  username: string;
  image: string;
  following: boolean;
}

export interface IUsers {
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

export interface IState {
  loading: boolean;
  users: IUsers[];
  articleCount: number;
  error: boolean | string;
}
