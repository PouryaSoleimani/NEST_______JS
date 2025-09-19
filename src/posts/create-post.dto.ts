import { IsString, IsInt, IsBoolean, Length } from "class-validator";

export class CreatePostDto {
  @IsString()
  @Length(3, 20)
  name: string;

  @IsInt()
  age: number;

  @IsString()
  job: string;

  @IsBoolean()
  isValid: boolean;
}
