import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UpdateCardDto } from './dto/update-card.dto';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/create-card.dto';

@Controller('/cars')
export class CarsController {
  constructor(private readonly carsService: CarsService) { }

  @Post("/create")
  create(@Body() createCardDto: CreateCarDto) {
    return this.carsService.create(createCardDto);
  }

  @Get('/')
  findAll() {
    return this.carsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.carsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCardDto: UpdateCardDto) {
    return this.carsService.update(+id, updateCardDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.carsService.remove(+id);
  }
}
