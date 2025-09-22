import { IsNumber, IsOptional, IsString } from "class-validator";

export class CreateSingleUserDTO {
  @IsOptional()
  @IsNumber()
  id: number;
  @IsString()
  name: string;
  @IsNumber()
  age: number;
  @IsString()
  job: string;
}
