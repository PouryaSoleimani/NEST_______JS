import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(public prisma: PrismaService) { }
  async getAll() {
    const data = this.prisma.user.findMany()
  }
}
