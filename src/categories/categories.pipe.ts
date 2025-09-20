import { IsBoolean, IsNumber, IsString } from "class-validator";

export class CategoriesPostDTO {
  @IsNumber()
  id: number;
  @IsString()
  name: string;
  @IsNumber()
  priority: number;
  @IsBoolean()
  isShowOnMenu: boolean;
}
