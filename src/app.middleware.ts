import { NestMiddleware } from "@nestjs/common";
import { NextFunction } from "express";


export class AppMiddleWare implements NestMiddleware {
  use(req: any, res: any, next: NextFunction) {
    console.log('🚀 APP STARTED')
    next()
  }
} 