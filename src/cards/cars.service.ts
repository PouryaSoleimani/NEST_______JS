import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCarDto } from './dto/create-card.dto';
import { UpdateCardDto } from './dto/update-card.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CarsService {
  constructor(private readonly prisma: PrismaService) { }

  create(createCarDto: CreateCarDto) {
    return 'This action adds a new card';
  }

  async findAll() {
    const allCars = await this.prisma.car.findMany()
    if (!allCars) {
      throw new NotFoundException('404 | USERS NOT FOUND')
    } else {
      return {
        ok: true,
        message: '201 | ALL CARS LIST :',
        data: allCars
      }
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} card`;
  }

  update(id: number, updateCardDto: UpdateCardDto) {
    return `This action updates a #${id} card`;
  }

  remove(id: number) {
    return `This action removes a #${id} card`;
  }
}
