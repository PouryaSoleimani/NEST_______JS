import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) { }
  async getAll() {
    const data = await this.prisma.user.findMany()
    return data
  }
}
