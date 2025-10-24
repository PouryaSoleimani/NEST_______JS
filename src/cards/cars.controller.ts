import { Controller, Get, Post, Body, Patch, Param, Delete } from "@nestjs/common";
import { UpdateCarDto } from "./dto/update-card.dto";
import { CarsService } from "./cars.service";
import { CreateCarDto } from "./dto/create-card.dto";

@Controller("/cars")
export class CarsController {
  constructor(private readonly carsService: CarsService) {}

  @Post("/create")
  create(@Body() body: CreateCarDto) {
    return this.carsService.create(body);
  }

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
