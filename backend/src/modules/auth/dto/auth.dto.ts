export class RegisterRequestDto {
  email!: string;
  username!: string;
  password!: string;
  bio?: string;
}

export class AuthResponseDto {
  id!: number;
  email!: string;
  username!: string;
  bio!: string | null;
  token!: string;
}