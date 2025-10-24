import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { CreateCarDto } from "./dto/create-card.dto";
import { UpdateCardDto } from "./dto/update-card.dto";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class CarsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(body: CreateCarDto) {
    const newCar = await this.prisma.car.create({
      data: {
        title: body.title,
        brand: body.brand,
        color: body.color,
        horsePower: body.horsePower,
        make: body.make,
      },
    });
    if (!newCar) {
      throw new BadRequestException("400 | BAD REQUEST");
    } else {
      return {
        ok: true,
        message: "201 | 🚗 NEW CAR CREATED ...",
        data: newCar,
      };
    }
  }

  async findAll() {
    const allCars = await this.prisma.car.findMany();
    if (!allCars) {
      throw new NotFoundException("404 | USERS NOT FOUND");
    } else {
      return {
        ok: true,
        message: "201 | ALL CARS LIST :",
        data: allCars,
      };
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
