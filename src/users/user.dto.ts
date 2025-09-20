import { IsBoolean, isBoolean, IsNumber, IsString } from "class-validator";

export class SingleUserDTO {
  @IsNumber()
  id: number;

  @IsString()
  name: string;

  @IsNumber()
  age: number;

  @IsString()
  job: string;

  @IsBoolean()
  isAdmin: boolean;
}
