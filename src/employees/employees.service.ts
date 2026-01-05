import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class EmployeesService {
   constructor(private readonly prisma: PrismaService) {}

   async getAll() {
      const result = await this.prisma.employee.findMany();
      
      if (!result) {
         throw new NotFoundException("404 | NO EMPLOYEES FOUND");
      } else {
         return {
            ok: true,
            message: "EMPLOYEES LIST",
            data: result,
         };
      }
   }

   async getSingle(id: number) {
      const singleEmployee = await this.prisma.employee.findUnique({
         where: { id: id },
      });

      if (!singleEmployee) {
         throw new NotFoundException("404 | EMPLOYEE NOT FOUND");
      } else {
         return {
            ok: true,
            message: "200 | SINGLE EMPLOYEE ROUTE",
            data: singleEmployee,
         };
      }
   }

   async create(body: any) {
      const newEmployee = await this.prisma.employee.create({
         data: {
            fullname: body.fullname,
            job: body.job,
         },
      });
      if (!newEmployee) {
         throw new BadRequestException("400 | BAD REQUEST");
      } else {
         return {
            ok: true,
            message: "201 | NEW EMPLOYEE CREATED SUCCESSFULLY",
            newEmployee: newEmployee,
         };
      }
   }
}
