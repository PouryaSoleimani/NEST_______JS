import { BadRequestException, Injectable, NotFoundException, UnauthorizedException, UseGuards } from "@nestjs/common";
import { CreateAuthDto } from "./dto/create-auth.dto";
import { UpdateAuthDto } from "./dto/update-auth.dto";
import { PrismaService } from "src/prisma/prisma.service";
import * as bcrypt from "bcrypt";
import { LoginUserDTO } from "./dto/login-auth.dto";

const saltOrRounds = 10;
export type UserType = { email: string; password: string };
@Injectable()
export class AuthService {
  constructor(private readonly prisma: PrismaService) {}

  async register(body: CreateAuthDto) {
    const hash = await bcrypt.hash(body.password, saltOrRounds);

    const newUser = await this.prisma.user.create({
      data: {
        email: body.email,
        password: hash,
        full_name: body.full_name,
        age: body.age,
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

  async login(body: LoginUserDTO, user: UserType) {
    const isUserAvailable = await this.prisma.user.findUnique({
      where: { email: body.email },
    });
    if (isUserAvailable) {
      return {
        ok: true,
        message: "LOGGED IN SUCCESSFULLY ...",
      };
    } else {
      return {
        ok: false,
        message: "YOU DONT HAVE AN ACCOUNT , PLEASE REGISTER FIRST",
      };
    }
  }

  async validate(EMAIL: string, password: string) {
    const isUserRegistered = await this.prisma.user.findUnique({
      where: { email: EMAIL },
    });
    return isUserRegistered;
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

  async findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  async update(id: number, updateAuthDto: UpdateAuthDto) {
    return `This action updates a #${id} auth`;
  }

  async remove(id: number) {
    return `This action removes a #${id} auth`;
  }
}
