import { IsBoolean, IsNumber, IsString, Length } from "class-validator";

export class CreatePostDto {
  @IsString()
  @Length(3, 20)
  name: string;
  @IsString()
  job: string;
  @IsNumber()
  age: number;
  @IsBoolean()
  isValid: boolean;
}
