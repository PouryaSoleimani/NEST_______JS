import { Body, Controller, Get, Post } from '@nestjs/common';
import { EmployeesService } from './employees.service';

@Controller('/employees')
export class EmployeesController {
  constructor(private readonly service: EmployeesService) { }
  @Get("/")
  getAll() {
    return this.service.getAll()
  }
  @Post('/create')
  create(@Body() body: any) {
    return this.service.create(body)
  }
}
