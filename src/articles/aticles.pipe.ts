import { IsNumber, IsOptional, IsString } from "class-validator";

export class CreateNewArticleDTO {
  @IsOptional()
  @IsNumber()
  id: number;
  @IsString()
  title: string;
  @IsString()
  author: string;
}
