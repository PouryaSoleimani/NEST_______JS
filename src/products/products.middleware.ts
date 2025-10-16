import { NestMiddleware } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";

export class ProductsMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log('📦 PRODUCTS ROUTE ....')
    next()
  }
}