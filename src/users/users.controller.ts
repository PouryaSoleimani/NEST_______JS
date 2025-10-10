import { Controller, Delete, Get, Post, Put } from '@nestjs/common';

@Controller('/api/users')
export class UsersController {

  @Get('/')
  GET__ALL__USERS() {
    return 'ALL USERS'
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
