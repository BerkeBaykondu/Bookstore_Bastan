import { IsEmail, IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';

export class UserRegisterDto {
  @IsString()
  @MinLength(3)
  @MaxLength(100)
  @IsNotEmpty()
  fullname: string;

  @IsString()
  @IsEmail()
  email: string;

  @IsString()
  @MinLength(3)
  @MaxLength(36)
  password: string;
}
