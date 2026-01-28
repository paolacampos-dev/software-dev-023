//database data when READing

export type staffType = {
  location: string;
  age: number;
};

export type postsType = {
  title: string;
  date: number;
  content: string;
  tags?: string[];
  username?: string;
};
