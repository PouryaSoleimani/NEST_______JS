import { EmployeesService } from "./employees.service";
import { EmployeesController } from "./employees.controller";
import { Module } from "@nestjs/common";

@Module({
  imports: [],
  controllers: [EmployeesController],
  providers: [EmployeesService],
})
export class EmployeesModule {}
