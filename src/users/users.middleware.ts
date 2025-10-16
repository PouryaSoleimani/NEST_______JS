import { NestMiddleware } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";

export class UsersMiddleWare implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log('👥 USERS ROUTE')
    console.log("👥 URL =>", req.url)
    console.log("👥 PATH =>", req.path)
    req.method == 'GET' ? console.log('METHOD : GET') : console.log('METHOD : POST')
    next()
  }
}