import { BadRequestException, Injectable, NotFoundException, UseGuards } from "@nestjs/common";
import { CreateAuthDto } from "./dto/create-auth.dto";
import { UpdateAuthDto } from "./dto/update-auth.dto";
import { PrismaService } from "src/prisma/prisma.service";
import * as bcrypt from "bcrypt";
import { AuthGuard } from "./auth.guard";
const saltOrRounds = 10;

@Injectable()
export class AuthService {
  constructor(private readonly prisma: PrismaService) {}

  async register(body: CreateAuthDto) {
    const hash = await bcrypt.hash(body.password, saltOrRounds);

    const newUser = await this.prisma.user.create({
      data: {
        age: body.age,
        email: body.email,
        full_name: body.full_name,
        password: hash,
        role: body.role,
      },
    });

    if (!newUser) {
      throw new BadRequestException("400 | BAD REQEUST");
    } else {
      return {
        ok: true,
        message: "201 | USER CREATED SUCCESSFULLY",
        data: newUser,
      };
    }
  }


  async findAll() {
    const allusers = await this.prisma.user.findMany();
    if (!allusers) {
      throw new NotFoundException("404 | USERS NOT FOUND");
    } else {
      return {
        ok: true,
        message: "ALL USERS",
        data: allusers,
      };
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  update(id: number, updateAuthDto: UpdateAuthDto) {
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }
}
