import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './users.pipe';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) { }

  async getAll() {
    const data = await this.prisma.user.findMany()
    return {
      ok: true,
      message: "ALL USERS GET",
      data: data
    }
  }

  async getSingle(id: number) {
    const user = await this.prisma.user.findUnique({
      where: { id: id }
    })
    if (!user) {
      throw new NotFoundException('404 | NOT FOUND')
    } else {
      return {
        ok: true,
        message: '200 | SINGLE USER ROUTE',
        data: user
      }
    }
  }

  async create(body: CreateUserDto) {

    const result = await this.prisma.user.create({
      data: {
        full_name: body.full_name,
        age: body.age,
        email: body.email,
        password: body.password,
        role: body.role,
      }
    })

    if (!result) {
      throw new BadRequestException('400 | BAD REQUEST')
    } else {
      return result
    }
  }

}

