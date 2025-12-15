import { NestMiddleware } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";

export function EmployeesMiddleWare(req: Request, res: Response, next: NextFunction) {
   console.log("👤  WELCOME TO EMPLOYEES ROUTE");
   console.log("BASE URL ==> ", req.baseUrl);
   console.log("PATH ==> ", req.path);
   next();
}
