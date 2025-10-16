import { NestMiddleware } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";

export class AppMiddleWare implements NestMiddleware {
  use(next: NextFunction) {
    console.log('🚀 APP STARTED')
    next()
  }
} 