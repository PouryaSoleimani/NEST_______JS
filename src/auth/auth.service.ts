import { BadRequestException, Injectable } from "@nestjs/common";
import { CreateAuthDto } from "./dto/create-auth.dto";
import { UpdateAuthDto } from "./dto/update-auth.dto";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class AuthService {
  constructor(private readonly prisma: PrismaService) {}
  async register(body: CreateAuthDto) {
    const newUser = await this.prisma.user.create({
      data: {
        full_name: body.fullname,
        age: body.age,
        email: body.email,
        password: body.password,
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

  login() {
    return `This action returns all auth`;
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
