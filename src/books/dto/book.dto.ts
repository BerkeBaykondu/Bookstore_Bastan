import { IsInt, IsOptional, IsString } from 'class-validator';

export class commentDto {
  bookname: string;

  @IsOptional()
  comment: string;

  rate: number;
}

export class addBookDto {
  @IsString()
  bookname: string;

  @IsInt()
  page: number;
}

export class updateBookDto {
  @IsOptional()
  @IsString()
  bookname: string;

  @IsOptional()
  @IsInt()
  page: number;
}

export class deleteBookDto {
  id: string;
}
