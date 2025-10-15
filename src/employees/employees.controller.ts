import { Controller, Get } from '@nestjs/common';
import { EmployeesService } from './employees.service';

@Controller('/employees')
export class EmployeesController {
  constructor(private readonly service: EmployeesService) { }
  @Get("/")
  getAll() {
    return 'ALL EMPLOYEES'
  }
}
