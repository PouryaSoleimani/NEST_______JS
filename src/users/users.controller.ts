import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { UsersService } from './users.service';

@Controller('/api/users')
export class UsersController {

  constructor(public prisma: PrismaService, private service: UsersService) { }

  @Get('/')
  GET__ALL__USERS() {
    const result = this.service.getAll()
    return result
  }

  @Get('/:id')
  GET__SINGLE__USER() {
    return 'ALL USERS'
  }

  @Post('/:id')
  CREATE__USER() {
    return 'ALL USERS'
  }

  @Delete('/:id')
  DELETE__USER() {
    return 'ALL USERS'
  }

  @Put('/:id')
  UPDATE__USER() {
    return 'ALL USERS'
  }
}
