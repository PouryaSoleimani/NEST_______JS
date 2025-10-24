import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { CreateCarDto } from "./dto/create-card.dto";
import { UpdateCarDto } from "./dto/update-card.dto";
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

  async findOne(id: number) {
    const car = await this.prisma.car.findUnique({
      where: { id: id },
    });
    if (!car) {
      throw new NotFoundException("404 | CAR NOT FOUND ... ☹️");
    } else {
      return {
        ok: true,
        message: "201 | SINGLE CAR DATA",
        data: car,
      };
    }
  }

  async update(id: number, body: UpdateCarDto) {
    const updatedCar = await this.prisma.car.update({
      where: { id: id },
      data: {
        title: body.title,
        color: body.color,
        brand: body.brand,
        horsePower: body.horsePower,
        make: body.make,
      },
    });
    if (!updatedCar) {
      throw new BadRequestException("400 | BAD REQUEST");
    } else {
      return {
        ok: true,
        message: "203 | CAR DATA UPDATED ....",
        data : updatedCar
      };
    }
  }

  remove(id: number) {
    return `This action removes a #${id} card`;
  }
}
