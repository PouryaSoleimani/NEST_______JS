import { IsString, IsInt, IsBoolean, Length, IsNumber } from "class-validator";

export class CreatePostDto {
  @IsString()
  @Length(3, 20)
  name: string;

  @IsNumber()
  age: number;

  @IsString()
  job: string;

  @IsBoolean()
  isValid: boolean;
}
