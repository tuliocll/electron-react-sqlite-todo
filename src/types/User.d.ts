declare type User = {
  id?: number;
  username: string;
  password_hash: Buffer;
  status: number;
};

declare type Auth = {
  username: string;
  password: string;
};
