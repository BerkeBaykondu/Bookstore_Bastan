import { IsEmail, IsString, MaxLength, MinLength } from 'class-validator';

export class ChangeActivityDto {
  @IsString()
  @IsEmail()
  email: string;
}
