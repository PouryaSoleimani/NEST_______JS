import { NestMiddleware } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";

export class MainMiddleWare implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log('🚀 APP STARTED')
    next()
  }
} 