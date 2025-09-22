import { IsBoolean, IsNumber, IsString } from "class-validator";

export class CreateSingleProductDTO {
  @IsNumber()
  id: number;

  @IsString()
  title: string;

  @IsNumber()
  price: number;

  @IsBoolean()
  isAvailable: boolean;
}

export class UpdateSingleProductDTO {
  @IsNumber()
  id: number;

  @IsString()
  title: string;

  @IsNumber()
  price: number;

  @IsBoolean()
  isAvailable: boolean;
}
