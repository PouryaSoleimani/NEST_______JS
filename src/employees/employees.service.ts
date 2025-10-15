import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { timeStamp } from 'console';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class EmployeesService {
  constructor(private readonly prisma: PrismaService) { }

  async getAll() {
    const result = await this.prisma.employee.findMany()
    if (!result) {
      throw new NotFoundException('404 | NO EMPLOYEES FOUND')
    } else {
      return {
        ok: true,
        message: 'EMPLOYEES LIST',
        data: result
      }
    }
  }

  async create(body: any) {
    const newEmployee = await this.prisma.employee.create({
      data: {
        fullname: body.fullname,
        job: body.job,
      }
    })
    if (!newEmployee) {
      throw new BadRequestException('400 | BAD REQUEST')
    } else {
      return {
        ok: true,
        message: '201 | NEW EMPLOYEE CREATED SUCCESSFULLY',
        newEmployee: newEmployee
      }
    }
  }
}
