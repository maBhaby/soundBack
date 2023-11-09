import { IsString, IsNumber, IsDate } from 'class-validator';

export class UserDTO {
  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsNumber()
  age: number;

  @IsDate()
  createdAt: Date;

  @IsDate()
  updatedAt: Date;
}
