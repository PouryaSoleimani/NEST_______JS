import { BadRequestException, Injectable } from "@nestjs/common";
import { CreateAuthDto } from "./dto/create-auth.dto";
import { UpdateAuthDto } from "./dto/update-auth.dto";
import { PrismaService } from "src/prisma/prisma.service";
import * as bcrypt from "bcrypt";

const saltOrRounds = 10;
@Injectable()
export class AuthService {
  constructor(private readonly prisma: PrismaService) {}

  async register(body: CreateAuthDto) {
    const hash = await bcrypt.hash(body.password, saltOrRounds);
    const newUser = await this.prisma.user.create({
      data: {
        full_name: body.fullname,
        age: body.age,
        email: body.email,
        password: hash,
        role: body.role,
      },
    });
    if (!newUser) {
      throw new BadRequestException("400 | BAD REQUEST");
    } else {
      return {
        ok: true,
        message: "201 | USER CREATED",
        data: newUser,
      };
    }
  }

  async validate(email: string, password: string) {
    const user = await this.prisma.user.findUnique({
      where: { email: email },
    });
    if (user) {
      const isMatch = await bcrypt.compare(user?.password, password);
      if (isMatch) {
        return true;
      } else {
        return false;
      }
    }
  }

  async login() {
    return `This action returns all auth`;
  }
}
