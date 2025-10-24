import { Injectable, NestMiddleware } from "@nestjs/common";
import { Request, Response } from "express";

@Injectable()
export class CarsMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: Function) {
    console.log("🚗 CARS MIDDLEWARE ...");
    next();
  }
}
