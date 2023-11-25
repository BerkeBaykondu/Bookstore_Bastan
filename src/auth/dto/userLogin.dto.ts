import { IsEmail, IsString, MaxLength, MinLength } from 'class-validator';

export class UserLoginDto {
  @IsString()
  @IsEmail()
  email: string;

  @IsString()
  @MinLength(3)
  @MaxLength(36)
  password: string;
}
