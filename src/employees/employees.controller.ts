import { Body, Controller, Get, Param, ParseIntPipe, Post, UseInterceptors } from "@nestjs/common";
import { EmployeesService } from "./employees.service";
import { EmployeesGetAllInterceptor, EmployeesGetSingleInterceptor } from "./employees.interceptor";

@Controller("/employees")
export class EmployeesController {
   constructor(private readonly service: EmployeesService) {}

   @UseInterceptors(EmployeesGetAllInterceptor)
   @Get("/")
   getAll() {
      return this.service.getAll();
   }

   @UseInterceptors(EmployeesGetSingleInterceptor)
   @Get("/:id")
   getSingle(@Param("id", ParseIntPipe) id: number) {
      return this.service.getSingle(+id);
   }

   @Post("/create")
   create(@Body() body: any) {
      return this.service.create(body);
   }
}

