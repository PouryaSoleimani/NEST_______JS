import { Injectable } from '@nestjs/common';
import { timeStamp } from 'console';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class EmployeesService {
  constructor(private readonly prisma: PrismaService) { }
  getAll() {
  }
}
