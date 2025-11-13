import { BadRequestException, Injectable, UnauthorizedException } from "@nestjs/common";
import { CreateAuthDto } from "./DTO/register-auth.dto";
import { PrismaService } from "src/prisma/prisma.service";
import * as bcrypt from "bcrypt";

const saltOrRounds = 10;

@Injectable()
export class AuthService {
  constructor(private readonly prisma: PrismaService) {}

  //^ REGISTER
  async register(body: CreateAuthDto) {
    const hash = await bcrypt.hash(body.password, saltOrRounds);
    const newUser = await this.prisma.user.create({
      data: {
        full_name: body.fullname,
        age: body.age,
        password: hash,
        email: body.email,
        role: body.role,
      },
    });
    if (!newUser) {
      throw new BadRequestException("400 | BAD REQUEST");
    } else {
      return {
        ok: true,
        message: "201 | USER CREATED ...",
        data: newUser,
      };
    }
  }
  
  //^ VALIDATE
  async validateUser(email: string, password: string) {
    const user = await this.prisma.user.findUnique({
      where: { email: email },
    });
    if (user) {
      const isMatch = await bcrypt.compare(password, user.password);
      if (isMatch) {
        return { ok: true, user: user };
      } else {
        throw new UnauthorizedException("401 | UNAUTHORIZED");
      }
    }
  }

  async addToken(id: number, token: string) {
    await this.prisma.user.update({
      where: { id: id },
      data: { token: token },
    });
  }

  //^ USER INFOS
  async userInfos(user: any) {
    console.log("email", user.email);
    const infos = await this.prisma.user.findUnique({
      where: { email: user.email },
    });
    return infos;
  }
}
