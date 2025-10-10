import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(public prisma: PrismaService) { }
  async getAll() {
    const data = await this.prisma.user.findMany()
    return {
      ok: true,
      message: "ALL USERS GET",
      data: data
    }
  }
}
