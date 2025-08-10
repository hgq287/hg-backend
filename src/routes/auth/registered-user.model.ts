export interface RegisteredUser {
  id: number;
  email: string;
  username: string;
  bio: string | null;
  token: string;
}
