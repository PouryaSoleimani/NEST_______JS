import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(public prisma: PrismaService) { }
  getAll() {
    return this.prisma.user.findMany()
  }
}
