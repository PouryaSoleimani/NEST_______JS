import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UseGuards,
} from "@nestjs/common";
import { UpdateCarDto } from "./dto/update-car.dto";
import { CarsService } from "./cars.service";
import { CreateCarDto } from "./dto/create-car.dto";
import { CarsGetAllInterceptor } from "./cars.interceptor";
import { CarsGuard } from "./cars.guard";

@UseGuards(CarsGuard)
@Controller("/cars")
export class CarsController {
  constructor(private readonly carsService: CarsService) {}

  @Post("/create")
  create(@Body() body: CreateCarDto) {
    return this.carsService.create(body);
  }

  @UseInterceptors(CarsGetAllInterceptor)
  @Get("/")
  findAll() {
    return this.carsService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.carsService.findOne(+id);
  }

  @Patch("/update/:id")
  update(@Param("id") id: string, @Body() updateCardDto: UpdateCarDto) {
    return this.carsService.update(+id, updateCardDto);
  }

  @Delete("/delete/:id")
  remove(@Param("id") id: string) {
    return this.carsService.remove(+id);
  }
}
