export type Tuser = {
  id?: String;
  name?: String;
  email?: String;
  password: String;
  avatar?: String;
  createdAt?: Date;
  map?: Array<Object>;
};

export type Tpost = {
  _id?: string;
  author?: string;
  title: string;
  image: string;
  content: string;
  createdAt?: String;
  map?: Array<Object>;
};
export type TImageUser = {
  avatar: string;
};
